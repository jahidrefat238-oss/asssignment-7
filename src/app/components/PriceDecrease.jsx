"use client";

import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import ProductGridSkeleton from "./ProductSkeleton";

export default function PriceDecrease() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Fetch Products
    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/products`
                );

                const data = await res.json();

                // Only products with price decrease
                const decreasedProducts = data
                    .filter((item) => item.change.dir === "down")
                    .slice(0, 6);

                setProducts(decreasedProducts);

            } catch (error) {
                console.log("Price decrease loading error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();

    }, []);

    return (

        <section className="mx-auto w-full max-w-[1084px] px-4 py-8 sm:px-0">

            {/* Section Heading */}
            <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-[#26352C]">
                <span className="text-green-600">▼</span>
                আজ দাম কমেছে
            </h2>

            {/* Product Cards */}
            {loading ? (

                <ProductGridSkeleton count={6} />

            ) : (

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                    {products.map((item) => (
                        <ProductCard
                            key={item.id}
                            product={item}
                        />
                    ))}

                </div>

            )}

        </section>

    );
}