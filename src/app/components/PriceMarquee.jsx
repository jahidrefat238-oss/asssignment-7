
"use client";

import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

export default function PriceMarquee() {

    const [products, setProducts] = useState([]);

    // Fetch Products from API
    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/products`
                );

                const data = await res.json();

                console.log("Products:", data);

                setProducts(data);

            } catch (error) {
                console.log("Product loading error:", error);
            }
        };

        fetchProducts();

    }, []);

    return (

        <div className="border-t border-gray-200 bg-[#FAFCFA]">

            <Marquee
                speed={90}
                pauseOnHover={true}
                gradient={false}
            >

                {products.map((item) => (

                    <div
                        key={item.id}
                        className="flex shrink-0 items-center gap-2 border-r border-gray-200 px-5 py-2.5 text-sm"
                    >

                        {/* Product Icon */}
                        <span className="text-base">
                            {item.image}
                        </span>

                        {/* Product Name */}
                        <span className="whitespace-nowrap font-medium text-[#26352C]">
                            {item.nameBn}
                        </span>

                        {/* Today's Price */}
                        <span className="whitespace-nowrap text-gray-500">
                            {item.today} টাকা/{item.unit}
                        </span>

                        {/* Price Change */}
                        {item.change.dir === "up" ? (

                            <span className="whitespace-nowrap font-semibold text-red-500">
                                ▲ {item.change.pct}%
                            </span>

                        ) : item.change.dir === "down" ? (

                            <span className="whitespace-nowrap font-semibold text-green-600">
                                ▼ {Math.abs(item.change.pct)}%
                            </span>

                        ) : (

                            <span className="whitespace-nowrap font-semibold text-gray-400">
                                — ০%
                            </span>

                        )}

                    </div>

                ))}

            </Marquee>

        </div>

    );
}
