
import { notFound } from "next/navigation";

import CategoryHeader from "@/app/components/CategoryHeader";
import CategoryProducts from "@/app/components/CategoryProducts";

export default async function CategoryDetailsPage({ params }) {

    // Get Category Slug
    const { slug } = await params;

    // Fetch Category Information
    const resCat = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/categories/${slug}`
    );

    // Check if Category Exists
    if (!resCat.ok) {
        notFound();
    }

    const category = await resCat.json();

    if (!category || !category.nameBn) {
        notFound();
    }

    // Fetch Category Products
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?category=${slug}`
    );

    if (!res.ok) {
        throw new Error("Products loading failed");
    }

    const data = await res.json();
    const products = Array.isArray(data) ? data : [];

    return (
        <main className="min-h-screen flex-1 bg-[#F0F5F1]">

            {/* Category Information */}
            <CategoryHeader
                category={category}
                total={products.length}
            />

            {/* Category Products */}
            <CategoryProducts
                products={products}
            />

        </main>
    );
}
