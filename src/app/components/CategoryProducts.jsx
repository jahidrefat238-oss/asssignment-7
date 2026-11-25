
"use client";

import { useState } from "react";
import ProductFilter from "./ProductFilter";
import ProductCard from "./ProductCard";

export default function CategoryProducts({ products }) {

    const [filter, setFilter] = useState("");

    // Filter Products
    const filteredProducts = products.filter((item) => {

        if (filter === "up") {
            return item.change.dir === "up";
        }

        if (filter === "down") {
            return item.change.dir === "down";
        }

        return true;

    });

    return (

        <section className="mx-auto w-full max-w-[1084px] px-4 py-7 sm:px-0">

            {/* Product Count and Filter */}
            <div className="mb-5 flex items-center justify-between gap-3">

                <p className="text-sm text-gray-500">
                    মোট {filteredProducts.length}টি পণ্য দেখানো হচ্ছে
                </p>

                <div className="flex items-center gap-2">

                    <span className="text-sm text-gray-500">
                        সাজান
                    </span>

                    <ProductFilter
                        value={filter}
                        onChange={setFilter}
                    />

                </div>

            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {filteredProducts.map((item) => (

                    <ProductCard
                        key={item.id}
                        product={item}
                    />

                ))}

            </div>

            {/* No Products */}
            {filteredProducts.length === 0 && (

                <p className="py-10 text-center text-sm text-gray-500">
                    কোনো পণ্য পাওয়া যায়নি।
                </p>

            )}

        </section>

    );

}
