import { motion } from "framer-motion";
import { ArrowUp, ArrowDown, Trash2 } from "lucide-react";

import visaIcon from "@/assets/visa.png";
import masterIcon from "@/assets/master.png";
import rupayIcon from "@/assets/rupay.png";

import productOne from "@/assets/new-1.png";
import productTwo from "@/assets/new-2.png";
import productThree from "@/assets/new-3.png";

// Cart Item
function CartItem({ image, name, price }: { image: string; name: string; price: string }) {
    return (
        <div className="flex items-center justify-between bg-white p-5 rounded-xl shadow-md mb-5">
            {/* Product Image + Name + Quantity */}
            <div className="flex items-center gap-4">
                <img src={image} alt={name} className="w-20 h-20 object-contain" />
                <div>
                    <h3 className="font-semibold text-gray-800">{name}</h3>
                    <div className="flex items-center gap-2 mt-3">
                        <button className="p-1 border rounded-md hover:bg-gray-100 text-black">
                            <ArrowUp size={16} />
                        </button>
                        <span className="px-2 font-medium text-black">1</span>
                        <button className="p-1 border rounded-md hover:bg-gray-100 text-black">
                            <ArrowDown size={16} />
                        </button>
                    </div>
                </div>
            </div>

            {/* Price + Delete */}
            <div className="flex items-center gap-6">
                <span className="font-semibold text-gray-800">{price}</span>
                <button className="text-red-500 hover:text-red-700">
                    <Trash2 />
                </button>
            </div>
        </div>
    );
}

export default function ShoppingPage() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-background py-12 px-6 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Left Side - Cart */}
            <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-3">Shopping Continue</h2>
                <hr className="mb-5" />
                <p className="mb-8 text-gray-600 dark:text-gray-300">Shopping cart (3 items)</p>

                {/* Items */}
                <CartItem image={productOne} name="Panadol Extra" price="$10.99" />
                <CartItem image={productTwo} name="Vitamin C" price="$7.49" />
                <CartItem image={productThree} name="Skin Cream" price="$12.00" />
            </div>

            {/* Right Side - Card Details */}
            <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-[#6268C6] text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between"
            >
                <div>
                    <h3 className="text-xl font-bold mb-6">Card Details</h3>

                    {/* Icons */}
                    <div className="flex items-center justify-between mb-8">
                        <img src={visaIcon} alt="Visa" className="object-contain " />
                        <img src={masterIcon} alt="MasterCard" className="object-contain " />
                        <img src={rupayIcon} alt="RuPay" className="object-contain " />
                        <button className="underline text-sm">See All</button>
                    </div>

                    {/* Inputs */}
                    <div className="space-y-4">
                        <div>
                            <label className="block mb-1 text-sm">Name on Card</label>
                            <input
                                type="text"
                                placeholder="Enter name"
                                className="w-full p-3 rounded-lg text-gray-800 focus:outline-none bg-[#D9D9D9]"
                            />
                        </div>
                        <div>
                            <label className="block mb-1 text-sm">Card Number</label>
                            <input
                                type="text"
                                placeholder="1234 5678 9012 3456"
                                className="w-full p-3 rounded-lg text-gray-800 focus:outline-none bg-[#D9D9D9]"
                            />
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-1">
                                <label className="block mb-1 text-sm">Expiration Date</label>
                                <input
                                    type="text"
                                    placeholder="MM/YY"
                                    className="w-full p-3 rounded-lg text-gray-800 focus:outline-none bg-[#D9D9D9]"
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block mb-1 text-sm">CVV</label>
                                <input
                                    type="text"
                                    placeholder="123"
                                    className="w-full p-3 rounded-lg text-gray-800 focus:outline-none bg-[#D9D9D9]"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Totals */}
                <div>
                    <hr className="my-6 border-white/40" />
                    <div className="space-y-2 mb-6">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>$1,688</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping</span>
                            <span>$4</span>
                        </div>
                        <div className="flex justify-between font-semibold text-lg">
                            <span>Total (Tax incl.)</span>
                            <span>$1,672</span>
                        </div>
                    </div>

                    {/* Checkout Button */}
                    <button className="w-full bg-[#4DE1C1] text-gray-900 font-semibold py-4 rounded-lg flex justify-between items-center px-4 hover:opacity-90 transition">
                        <span>Checkout</span>
                        <span>$1,672</span>
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
