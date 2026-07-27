"use client";
import Link from "next/link";
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight } from "lucide-react";
import { useShop } from "@/context/ShopContext";

export default function CartPage() {
  const { cart: items, updateCartQty, removeFromCart, formatPrice } = useShop();

  const updateQty = (id: number, delta: number, size?: string) => updateCartQty(id, delta, size);
  const remove = (id: number, size?: string) => removeFromCart(id, size);

  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal >= 999 ? 0 : 99;
  const total = subtotal + shipping;

  return (
    <div>
      <div className="py-12 text-center animate-fade-in-up" style={{ background: '#FAF8F4', borderBottom: '1px solid #E8E4DE' }}>
        <p className="section-tag">Your Order</p>
        <h1 className="section-title">Shopping Cart</h1>
        <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '13px', color: '#7A7A7A' }}>{items.length} item{items.length !== 1 ? 's' : ''} in your cart</p>
      </div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 py-12">
        {items.length === 0 ? (
          <div className="text-center py-20">
            <ShoppingBag size={48} className="text-gray-300 mx-auto mb-4" />
            <h2 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.5rem', color: '#7A7A7A', marginBottom: '8px' }}>Your cart is empty</h2>
            <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '14px', color: '#7A7A7A', marginBottom: '24px' }}>Discover our beautiful ethnic wear collections</p>
            <Link href="/collections/women" className="btn-primary">Shop Now <ArrowRight size={14} /></Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-10 stagger-children">
            {/* Cart Items */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {items.map((item, i) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-5 border-b border-gray-100 pb-6 animate-fade-in-up" style={{ animationDelay: `${i * 0.05}s` } as React.CSSProperties}>
                  <div className="w-24 h-28 sm:w-28 sm:h-36 flex-shrink-0 overflow-hidden bg-gray-50">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 style={{ fontFamily: '"Karla", sans-serif', fontSize: '14px', fontWeight: 500, color: '#1A1A1A', lineHeight: 1.4, marginBottom: '6px' }}>{item.name}</h3>
                    <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '12px', color: '#7A7A7A', marginBottom: '12px' }}>Size: {item.size}</p>
                    <div className="flex items-center justify-between flex-wrap gap-3">
                      <div className="flex items-center border border-gray-200">
                        <button onClick={() => updateQty(item.id, -1, item.size)} className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-colors">
                          <Minus size={12} />
                        </button>
                        <span className="w-10 text-center" style={{ fontFamily: '"Karla", sans-serif', fontSize: '13px' }}>{item.qty}</span>
                        <button onClick={() => updateQty(item.id, 1, item.size)} className="w-8 h-8 flex items-center justify-center hover:bg-gray-50 transition-colors">
                          <Plus size={12} />
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span style={{ fontFamily: '"Karla", sans-serif', fontSize: '15px', fontWeight: 600, color: '#1A1A1A' }}>{formatPrice(item.price * item.qty)}</span>
                        <button onClick={() => remove(item.id, item.size)} className="text-gray-400 hover:text-red-500 transition-colors">
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              <div className="border border-gray-100 p-6 sticky top-24 rounded-lg transition-shadow hover:shadow-lg">
                <h3 style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.3rem', color: '#1A1A1A', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid #E8E4DE' }}>Order Summary</h3>
                <div className="flex flex-col gap-3 mb-5">
                  {[
                    ["Subtotal", formatPrice(subtotal)],
                    ["Shipping", shipping === 0 ? "FREE" : formatPrice(shipping)],
                  ].map(([label, val]) => (
                    <div key={label} className="flex justify-between">
                      <span style={{ fontFamily: '"Karla", sans-serif', fontSize: '13px', color: '#7A7A7A' }}>{label}</span>
                      <span style={{ fontFamily: '"Karla", sans-serif', fontSize: '13px', color: label === "Shipping" && val === "FREE" ? "#16a34a" : '#1A1A1A', fontWeight: 500 }}>{val}</span>
                    </div>
                  ))}
                </div>
                {shipping > 0 && (
                  <p style={{ fontFamily: '"Karla", sans-serif', fontSize: '11px', color: '#B4863E', background: '#FEF9F0', padding: '8px 12px', marginBottom: '16px' }}>
                    Add {formatPrice(999 - subtotal)} more for free shipping!
                  </p>
                )}
                <div className="border-t border-gray-100 pt-4 mb-5">
                  <div className="flex justify-between">
                    <span style={{ fontFamily: '"Karla", sans-serif', fontSize: '14px', fontWeight: 600, color: '#1A1A1A' }}>Total</span>
                    <span style={{ fontFamily: '"Playfair Display", serif', fontSize: '1.2rem', color: '#1A1A1A', fontWeight: 600 }}>{formatPrice(total)}</span>
                  </div>
                </div>
                <input type="text" placeholder="Enter coupon code" className="input-field mb-3" />
                <button className="btn-primary w-full justify-center mb-3">
                  Proceed to Checkout <ArrowRight size={14} />
                </button>
                <Link href="/collections/women" className="btn-outline w-full justify-center text-center block">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
