
"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";


export default function PriceIncrease() {

    const [products, setProducts] = useState([]);

    // Fetch Products
    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/products`
                );

                const data = await res.json();

                // Only products with price increase
                const increasedProducts = data
                    .filter((item) => item.change.dir === "up")
                    .slice(0, 6);

                setProducts(increasedProducts);

            } catch (error) {
                console.log("Price increase loading error:", error);
            }
        };

        fetchProducts();

    }, []);

    // Unit Name
    const getUnit = (unit) => {
        if (unit === "kg") return "প্রতি কেজি";
        if (unit === "piece") return "প্রতি পিস";
        if (unit === "dozen") return "প্রতি ডজন";

        return `প্রতি ${unit}`;
    };

    return (

        <section className="mx-auto w-full max-w-[1084px] px-4 py-8 sm:px-0">

            {/* Section Heading */}
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-[#26352C]">
                <span className="text-red-500">▲</span>
                আজ দাম বেড়েছে
            </h2>

            {/* Product Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {products.map((item) => (
                    <ProductCard
                        key={item.id}
                        product={item}
                    />
                ))}

            </div>

        </section>

    );
}
