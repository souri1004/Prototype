import React, { useState } from "react";

export default function Pricing() {
const [billing, setBilling] = useState("monthly");

return (
    <div className="bg-gradient-to-br from-white to-purple-200 min-h-screen flex flex-col items-center justify-center px-4 md:px-10">
        <h1 className="text-4xl font-bold text-center mt-10">
            Plans & Pricing
        </h1>
        <p className="text-center text-gray-600 mt-4 max-w-2xl mx-auto">
            Choose the plan that fits your needs. Switch between monthly and annual billing to see the best value.
        </p>
        <div className="flex justify-center mt-6">
            <div className="inline-flex items-center bg-gray-200 rounded-full p-1">
                <button
                    className={`px-4 py-1 text-sm font-medium rounded-full focus:outline-none transition ${
                        billing === "monthly"
                            ? "bg-white text-black shadow"
                            : "text-gray-700"
                    }`}
                    onClick={() => setBilling("monthly")}
                    aria-pressed={billing === "monthly"}
                >
                    Monthly
                </button>
                <button
                    className={`px-4 py-1 text-sm font-medium rounded-full focus:outline-none transition ${
                        billing === "annual"
                            ? "bg-white text-black shadow"
                            : "text-gray-700"
                    }`}
                    onClick={() => setBilling("annual")}
                    aria-pressed={billing === "annual"}
                >
                    Annual
                </button>
            </div>
        </div>
        <p className="text-center mt-4 text-sm text-gray-700">
            <>
                    <span className="font-semibold text-green-600">15% off</span> on annual payments
                </>
            <br />
            <span className="font-semibold text-green-600">Try LeMi Verse for 14 days.</span>
        </p>

        <div>
            {billing === "monthly" && (
                <div className="flex flex-wrap justify-center items-center gap-4 mt-6">

                    {/* Card 1 */}
                    <div className="p-6 bg-white rounded-xl shadow text-center">
                        <div class="flex items-center space-x-1">
                            <h1 className="text-2xl font-medium">Starter</h1>
                            
                        </div>
                        <div class="flex items-center space-x-1">
                            
                            <p className="text-sm">Ideal for small projects</p>
                            
                        </div>
                        <div class="flex items-center space-x-1 my-4">
                            
                            <h1 className="text-3xl font-bold">$100</h1>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">1 User Access</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">5 GB cloud space</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">1 project/month</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">Basic analyrics dashboard</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">Free onboarding guide</p></span>
                        </div>

                        <div>
                            <button className="bg-black text-white rounded-full px-20 py-2 mt-20">Start plan</button>
                        </div>

                    </div>


                    {/* Card 2 */}
                    <div className="relative  rounded-2xl border-[5px] border-yellow-500 shadow ">
                        <div className=" left-1/2  bg-yellow-500 text-black px-4 pb-4 pt-2 text-sm font-medium shadow width-full rounded-t-xl height-20">
                            MOST POPULAR PLAN
                        </div>
                        <div className="-mt-3 p-6 bg-white rounded-xl shadow text-center">
                            <div class="flex items-center space-x-1">
                                <h1 className="text-2xl font-medium">Standard</h1>
                                
                            </div>
                            <div class="flex items-center space-x-1">
                                
                                <p className="text-sm">Ideal for growing projects</p>
                                
                            </div>
                            <div class="flex items-center space-x-1 my-4">
                                
                                <h1 className="text-3xl font-bold">$300</h1>
                            </div>
                            <div class="flex items-center space-x-1">
                                <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                                <span><p class="m-0">Upto 5 user Access</p></span>
                            </div>
                            <div class="flex items-center space-x-1">
                                <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                                <span><p class="m-0">50 GB cloud space</p></span>
                            </div>
                            <div class="flex items-center space-x-1">
                                <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                                <span><p class="m-0">5 project/month</p></span>
                            </div>
                            <div class="flex items-center space-x-1">
                                <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                                <span><p class="m-0">Analyrics dashboard</p></span>
                            </div>
                            <div class="flex items-center space-x-1">
                                <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                                <span><p class="m-0">Monthly strategy call</p></span>
                            </div>

                            <div>
                                <button className="bg-black text-white rounded-full px-20 py-2 mt-20">Start plan</button>
                            </div>

                        </div>
                    </div>


                    {/* Card 3 */}
                    <div className="p-6 bg-white rounded-xl shadow text-center">
                        <div class="flex items-center space-x-1">
                            <h1 className="text-2xl font-medium">Plus</h1>
                            
                        </div>
                        <div class="flex items-center space-x-1">
                            
                            <p className="text-sm">Ideal for scalling buiseness</p>
                            
                        </div>
                        <div class="flex items-center space-x-1 my-4">
                            
                            <h1 className="text-3xl font-bold">$1000</h1>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">10 User Includes</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">200 GB cloud space</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">Unlimited project</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">Team collaboreation tool</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">API access</p></span>
                        </div>

                        <div>
                            <button className="bg-black text-white rounded-full px-20 py-2 mt-20">Start plan</button>
                        </div>

                    </div>



                    {/* Card 4 */}

                    <div className="p-6 bg-white rounded-xl shadow text-center">
                        <div class="flex items-center space-x-1">
                            <h1 className="text-2xl font-medium">Premium</h1>
                            
                        </div>
                        <div class="flex items-center space-x-1">
                            
                            <p className="text-sm">Ideal for large enterprise</p>
                            
                        </div>
                        <div class="flex items-center space-x-1 my-4">
                            
                            <h1 className="text-3xl font-bold">$1500</h1>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">Unlimited user</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">1 TB+ cloud space</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">24/7 premium support</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">Enterprise-level security</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">Full platform access</p></span>
                        </div>

                        <div>
                            <button className="bg-black text-white rounded-full px-20 py-2 mt-20">Start plan</button>
                        </div>

                    </div>
                    
                    
                </div>
            )}
            {billing === "annual" && (
                <div className="flex flex-wrap justify-center items-center gap-4 mt-6">

                    {/* Card 1 */}
                    <div className="p-6 bg-white rounded-xl shadow text-center">
                        <div class="flex items-center space-x-1">
                            <h1 className="text-2xl font-medium">Starter</h1>
                            
                        </div>
                        <div class="flex items-center space-x-1">
                            
                            <p className="text-sm">Ideal for small projects</p>
                            
                        </div>
                        <div class="flex items-center space-x-1 my-4">
                            <span><h1 className="text-3xl font-bold">$1,020</h1></span>
                            <span>15% Off</span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">1 User Access</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">5 GB cloud space</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">1 project/month</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">Basic analyrics dashboard</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">Free onboarding guide</p></span>
                        </div>

                        <div>
                            <button className="bg-black text-white rounded-full px-20 py-2 mt-20">Start plan</button>
                        </div>

                    </div>


                    {/* Card 2 */}
                    <div className="relative  rounded-2xl border-[5px] border-yellow-500 shadow ">
                        <div className=" left-1/2  bg-yellow-500 text-black px-4 pb-4 pt-2 text-sm font-medium shadow width-full rounded-t-xl height-20">
                            MOST POPULAR PLAN
                        </div>
                        <div className="-mt-3 p-6 bg-white rounded-xl shadow text-center">
                            <div class="flex items-center space-x-1">
                                <h1 className="text-2xl font-medium">Standard</h1>
                                
                            </div>
                            <div class="flex items-center space-x-1">
                                
                                <p className="text-sm">Ideal for growing projects</p>
                                
                            </div>
                            <div class="flex items-center space-x-1 my-4">
                                <span><h1 className="text-3xl font-bold">$3,060</h1></span>
                                <span>15% Off</span>
                            </div>
                            <div class="flex items-center space-x-1">
                                <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                                <span><p class="m-0">Upto 5 user Access</p></span>
                            </div>
                            <div class="flex items-center space-x-1">
                                <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                                <span><p class="m-0">50 GB cloud space</p></span>
                            </div>
                            <div class="flex items-center space-x-1">
                                <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                                <span><p class="m-0">5 project/month</p></span>
                            </div>
                            <div class="flex items-center space-x-1">
                                <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                                <span><p class="m-0">Analyrics dashboard</p></span>
                            </div>
                            <div class="flex items-center space-x-1">
                                <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                                <span><p class="m-0">Monthly strategy call</p></span>
                            </div>

                            <div>
                                <button className="bg-black text-white rounded-full px-20 py-2 mt-20">Start plan</button>
                            </div>

                        </div>
                    </div>


                    {/* Card 3 */}
                    <div className="p-6 bg-white rounded-xl shadow text-center">
                        <div class="flex items-center space-x-1">
                            <h1 className="text-2xl font-medium">Plus</h1>
                            
                        </div>
                        <div class="flex items-center space-x-1">
                            
                            <p className="text-sm">Ideal for scalling buiseness</p>
                            
                        </div>
                        <div class="flex items-center space-x-1 my-4">
                            <span><h1 className="text-3xl font-bold">$10,200</h1></span>
                            <span>15% Off</span>>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">10 User Includes</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">200 GB cloud space</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">Unlimited project</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">Team collaboreation tool</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">API access</p></span>
                        </div>

                        <div>
                            <button className="bg-black text-white rounded-full px-20 py-2 mt-20">Start plan</button>
                        </div>

                    </div>



                    {/* Card 4 */}

                    <div className="p-6 bg-white rounded-xl shadow text-center">
                        <div class="flex items-center space-x-1">
                            <h1 className="text-2xl font-medium">Premium</h1>
                            
                        </div>
                        <div class="flex items-center space-x-1">
                            
                            <p className="text-sm">Ideal for large enterprise</p>
                            
                        </div>
                        <div class="flex items-center space-x-1 my-4">
                            <span><h1 className="text-3xl font-bold">$15,300</h1></span>
                            <span>15% Off</span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">Unlimited user</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">1 TB+ cloud space</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">24/7 premium support</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">Enterprise-level security</p></span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <span><img src="./tick-icon.png" alt="tick" class="w-4 h-4" /></span>
                            <span><p class="m-0">Full platform access</p></span>
                        </div>

                        <div>
                            <button className="bg-black text-white rounded-full px-20 py-2 mt-20">Start plan</button>
                        </div>

                    </div>
                    
                    
                </div>
            )}
        </div>
    </div>
);
}