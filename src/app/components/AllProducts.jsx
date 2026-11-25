"use client";

import { useEffect, useState } from "react";
import ProductFilter from "./ProductFilter";
import ProductCard from "./ProductCard";
import ProductGridSkeleton from "./ProductSkeleton";
// Convert price (number / "148" / "১৪৮" / "১,৮৫০") to a real number
const toNumber = (value) => {

    if (typeof value === "number") return value;

    const bnDigits = "০১২৩৪৫৬৭৮৯";

    const normalized = String(value ?? "")
        .replace(/[০-৯]/g, (d) => bnDigits.indexOf(d))
        .replace(/[^\d.]/g, "");

    return Number(normalized) || 0;

};


export default function AllProducts() {

    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState("default");
    const [loading, setLoading] = useState(true);

    // Fetch All Products
    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_API_URL}/products`
                );

                const data = await res.json();

                setProducts(data);

            } catch (error) {
                console.log("Products loading error:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();

    }, []);

    // Filter Products
    // Sort Products by real numeric price
const filteredProducts = [...products];

if (sort === "low-high") {
    filteredProducts.sort((a, b) => toNumber(a.today) - toNumber(b.today));
}

if (sort === "high-low") {
    filteredProducts.sort((a, b) => toNumber(b.today) - toNumber(a.today));
}

    return (

        <section id="all-products" className="mx-auto w-full max-w-[1084px] px-4 py-8 sm:px-0">

            {/* Heading */}
            <h2 className="text-xl font-bold text-[#26352C]">
                সব পণ্য
            </h2>

            {/* Product Count and Filter */}
            <div className="mb-5 mt-3 flex items-center justify-between gap-3">

                <p className="text-sm text-gray-500">
                    {loading
                        ? "পণ্য লোড হচ্ছে..."
                        : `মোট ${filteredProducts.length}টি পণ্য দেখানো হচ্ছে`}
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
            {loading ? (

                <ProductGridSkeleton count={9} />

            ) : (

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

                    {filteredProducts.map((item) => (

                        <ProductCard
                            key={item.id}
                            product={item}
                        />

                    ))}

                </div>

            )}

            {/* No Products */}
            {!loading && filteredProducts.length === 0 && (
                <p className="py-10 text-center text-sm text-gray-500">
                    কোনো পণ্য পাওয়া যায়নি।
                </p>
            )}

        </section>

    );

}