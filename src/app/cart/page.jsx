"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import { FiMinus, FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "@/features/cartSlice";

const CartPage = () => {
  const items = useSelector((state) => state.cart);
  const [mounted, setMounted] = useState(false);

  // Ensure client-side rendering only
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <section className="container py-10">
        <div className="flex justify-center">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-300 rounded w-32"></div>
          </div>
        </div>
      </section>
    );
  }

  const subtotal = items.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);

  return (
    <section>
      {/* Header */}
      <div className="bg-red-500 py-6 sm:py-8">
        <div className="container">
          <div className="flex items-center justify-between">
            <h1 className="text-lg sm:text-xl font-bold text-white">
              Shopping Cart
            </h1>
            <nav className="flex items-center gap-2 text-sm">
              <Link
                href="/"
                className="text-white hover:text-red-100 transition-colors"
              >
                Home
              </Link>
              <span className="text-white">/</span>
              <span className="text-white">Cart</span>
            </nav>
          </div>
        </div>
      </div>

      <div className="container py-8 sm:py-12">
        {items.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            {/* Desktop Table View */}
            <div className="hidden lg:block">
              <div className="bg-gray-100 grid grid-cols-12 gap-4 p-4 rounded-t-lg font-semibold text-gray-700">
                <div className="col-span-5">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-center">Total</div>
                <div className="col-span-1 text-center">Action</div>
              </div>
              <div className="bg-white rounded-b-lg border border-t-0">
                {items.map((item, index) => (
                  <DesktopProductRow
                    key={item.id}
                    item={item}
                    isLast={index === items.length - 1}
                  />
                ))}
              </div>
            </div>

            {/* Mobile Card View */}
            <div className="lg:hidden space-y-4">
              {items.map((item) => (
                <MobileProductCard key={item.id} item={item} />
              ))}
            </div>

            {/* Cart Summary */}
            <div className="mt-8 flex justify-end">
              <div className="w-full max-w-md bg-white p-6 rounded-lg border">
                <h3 className="text-lg font-semibold mb-4">Cart Summary</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal ({items.length} items)</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>Free</span>
                  </div>
                  <hr className="my-3" />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-emerald-500">${subtotal.toFixed(2)}</span>
                  </div>
                </div>
                <button className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white py-3 px-4 rounded-md font-semibold transition-colors">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

const DesktopProductRow = ({ item, isLast }) => {
  const dispatch = useDispatch();
  const quantity = item.quantity || 1;

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  return (
    <div className={`grid grid-cols-12 gap-4 p-4 items-center ${!isLast ? 'border-b' : ''}`}>
      {/* Product */}
      <div className="col-span-5 flex items-center gap-4">
        <div className="w-16 h-16 rounded-md border overflow-hidden flex-shrink-0">
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-medium text-gray-800 line-clamp-2">
            {item.title}
          </h3>
        </div>
      </div>

      {/* Price */}
      <div className="col-span-2 text-center">
        <span className="font-semibold text-gray-700">${item.price}</span>
      </div>

      {/* Quantity */}
      <div className="col-span-2 flex justify-center">
        <QuantityControl
          quantity={quantity}
          onIncrease={() => handleQuantityChange(quantity + 1)}
          onDecrease={() => handleQuantityChange(quantity - 1)}
        />
      </div>

      {/* Total */}
      <div className="col-span-2 text-center">
        <span className="font-bold text-emerald-500">
          ${(item.price * quantity).toFixed(2)}
        </span>
      </div>

      {/* Action */}
      <div className="col-span-1 flex justify-center">
        <button
          onClick={() => dispatch(removeFromCart(item.id))}
          className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
          aria-label={`Remove ${item.title} from cart`}
        >
          <IoTrashBinSharp size={18} />
        </button>
      </div>
    </div>
  );
};

const MobileProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const quantity = item.quantity || 1;

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg border">
      <div className="flex gap-4">
        <div className="w-20 h-20 rounded-md border overflow-hidden flex-shrink-0">
          <Image
            src={item.thumbnail}
            alt={item.title}
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-800 line-clamp-2 mb-2">
            {item.title}
          </h3>

          <div className="flex items-center justify-between mb-3">
            <span className="font-bold text-emerald-500 text-lg">
              ${item.price}
            </span>
            <button
              onClick={() => dispatch(removeFromCart(item.id))}
              className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
              aria-label={`Remove ${item.title} from cart`}
            >
              <IoTrashBinSharp size={18} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <QuantityControl
              quantity={quantity}
              onIncrease={() => handleQuantityChange(quantity + 1)}
              onDecrease={() => handleQuantityChange(quantity - 1)}
            />
            <div className="text-right">
              <p className="text-sm text-gray-600">Total</p>
              <p className="font-bold text-gray-800">
                ${(item.price * quantity).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuantityControl = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center bg-white border border-gray-300 rounded-md">
      <button
        onClick={onDecrease}
        className="p-2 hover:bg-gray-50 transition-colors disabled:opacity-50"
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
      >
        <FiMinus size={14} />
      </button>
      <span className="px-3 py-2 text-sm font-medium min-w-[3rem] text-center">
        {quantity}
      </span>
      <button
        onClick={onIncrease}
        className="p-2 hover:bg-gray-50 transition-colors"
        aria-label="Increase quantity"
      >
        <FiPlus size={14} />
      </button>
    </div>
  );
};

const EmptyCart = () => {
  return (
    <div className="text-center py-16">
      <div className="max-w-md mx-auto">
        <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
          <IoTrashBinSharp size={40} className="text-gray-400" />
        </div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-600 mb-8">
          Looks like you haven't added any items to your cart yet.
        </p>
        <Link
          href="/"
          className="inline-block bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-md font-semibold transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default CartPage;