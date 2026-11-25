"use client";

import { useState } from "react";
import ProductFilter from "./ProductFilter";
import ProductCard from "./ProductCard";

// Convert price (number / "148" / "১৪৮" / "১,৮৫০") to a real number
const toNumber = (value) => {

    if (typeof value === "number") return value;

    const bnDigits = "০১২৩৪৫৬৭৮৯";

    const normalized = String(value ?? "")
        .replace(/[০-৯]/g, (d) => bnDigits.indexOf(d))
        .replace(/[^\d.]/g, "");

    return Number(normalized) || 0;

};

export default function CategoryProducts({ products }) {

    const [sort, setSort] = useState("default");

    // Sort Products by real numeric price
    const sortedProducts = [...products];

    if (sort === "low-high") {
        sortedProducts.sort((a, b) => toNumber(a.today) - toNumber(b.today));
    }

    if (sort === "high-low") {
        sortedProducts.sort((a, b) => toNumber(b.today) - toNumber(a.today));
    }

    return (

        <section className="mx-auto w-full max-w-[1084px] px-4 py-7 sm:px-0">

            {/* Product Count and Sort */}
            <div className="mb-5 flex items-center justify-between gap-3">

                <p className="text-sm text-gray-500">
                    মোট {sortedProducts.length}টি পণ্য দেখানো হচ্ছে
                </p>

                <div className="flex items-center gap-2">

                    <span className="text-sm text-gray-500">
                        সাজান
                    </span>

                    <ProductFilter
                        value={sort}
                        onChange={setSort}
                    />

                </div>

            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                {sortedProducts.map((item) => (

                    <ProductCard
                        key={item.id}
                        product={item}
                    />

                ))}

            </div>

            {/* No Products */}
            {sortedProducts.length === 0 && (

                <p className="py-10 text-center text-sm text-gray-500">
                    কোনো পণ্য পাওয়া যায়নি।
                </p>

            )}

        </section>

    );

}