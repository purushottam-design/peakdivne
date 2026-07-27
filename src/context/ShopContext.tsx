"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  ReactNode,
} from "react";

export type CartItem = {
  id: number;
  name: string;
  price: number;
  img: string;
  qty: number;
  size: string;
};

type Currency = "INR" | "USD";

type ShopState = {
  cart: CartItem[];
  wishlist: number[];
  currency: Currency;
};

type ShopContextType = ShopState & {
  cartCount: number;
  wishlistCount: number;
  addToCart: (item: Omit<CartItem, "qty">, qty?: number) => void;
  removeFromCart: (id: number, size?: string) => void;
  updateCartQty: (id: number, delta: number, size?: string) => void;
  setCart: (items: CartItem[]) => void;
  isInWishlist: (productId: number) => boolean;
  toggleWishlist: (productId: number) => void;
  setCurrency: (c: Currency) => void;
  formatPrice: (price: number) => string;
};

const STORAGE_CART = "peakdivine_cart";
const STORAGE_WISHLIST = "peakdivine_wishlist";
const STORAGE_CURRENCY = "peakdivine_currency";

const defaultState: ShopState = {
  cart: [],
  wishlist: [],
  currency: "INR",
};

const ShopContext = createContext<ShopContextType | null>(null);

function loadCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_CART);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function loadWishlist(): number[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(STORAGE_WISHLIST);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function loadCurrency(): Currency {
  if (typeof window === "undefined") return "INR";
  try {
    const raw = localStorage.getItem(STORAGE_CURRENCY);
    if (raw === "USD" || raw === "INR") return raw;
    return "INR";
  } catch {
    return "INR";
  }
}

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCartState] = useState<CartItem[]>([]);
  const [wishlist, setWishlistState] = useState<number[]>([]);
  const [currency, setCurrencyState] = useState<Currency>("INR");
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setCartState(loadCart());
    setWishlistState(loadWishlist());
    setCurrencyState(loadCurrency());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_CART, JSON.stringify(cart));
  }, [cart, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_WISHLIST, JSON.stringify(wishlist));
  }, [wishlist, hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_CURRENCY, currency);
  }, [currency, hydrated]);

  const addToCart = useCallback(
    (item: Omit<CartItem, "qty">, qty = 1) => {
      setCartState((prev) => {
        const existing = prev.find((i) => i.id === item.id && i.size === item.size);
        if (existing) {
          return prev.map((i) =>
            i.id === item.id && i.size === item.size
              ? { ...i, qty: i.qty + qty }
              : i
          );
        }
        return [...prev, { ...item, qty }];
      });
    },
    []
  );

  const removeFromCart = useCallback((id: number, size?: string) => {
    setCartState((prev) =>
      size !== undefined
        ? prev.filter((i) => !(i.id === id && i.size === size))
        : prev.filter((i) => i.id !== id)
    );
  }, []);

  const updateCartQty = useCallback((id: number, delta: number, size?: string) => {
    setCartState((prev) =>
      prev.map((item) => {
        const match = size !== undefined ? item.id === id && item.size === size : item.id === id;
        return match ? { ...item, qty: Math.max(1, item.qty + delta) } : item;
      })
    );
  }, []);

  const setCart = useCallback((items: CartItem[]) => {
    setCartState(items);
  }, []);

  const isInWishlist = useCallback(
    (productId: number) => wishlist.includes(productId),
    [wishlist]
  );

  const toggleWishlist = useCallback((productId: number) => {
    setWishlistState((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  }, []);

  const setCurrency = useCallback((c: Currency) => {
    setCurrencyState(c);
  }, []);

  const formatPrice = useCallback(
    (price: number) => {
      if (currency === "USD") return `$${(price / 83).toFixed(2)}`;
      return `₹${price.toLocaleString()}`;
    },
    [currency]
  );

  const value: ShopContextType = {
    cart,
    wishlist,
    currency,
    cartCount: cart.reduce((sum, i) => sum + i.qty, 0),
    wishlistCount: wishlist.length,
    addToCart,
    removeFromCart,
    updateCartQty,
    setCart,
    isInWishlist,
    toggleWishlist,
    setCurrency,
    formatPrice,
  };

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}

export function useShop() {
  const ctx = useContext(ShopContext);
  if (!ctx) throw new Error("useShop must be used within ShopProvider");
  return ctx;
}
