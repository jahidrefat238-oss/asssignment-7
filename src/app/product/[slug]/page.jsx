
import ProductDetails from "@/app/components/ProductDetails";
import ProductDetailsHeader from "@/app/components/ProductDetailsHeader";
import { notFound } from "next/navigation";



export default async function ProductDetailsPage({ params }) {

    // Get Product Slug
    const { slug } = await params;

    // Fetch All Products
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products`,
        { cache: "no-store" }
    );

    if (!res.ok) {
        throw new Error("Products loading failed");
    }

    const products = await res.json();

    // Find Product by Slug
    const selectedProduct = products.find(
        (item) => item.slug === slug
    );

    if (!selectedProduct) {
        notFound();
    }

    // Fetch Product Details using ID
    const detailsRes = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products/${selectedProduct.id}`,
        { cache: "no-store" }
    );

    if (!detailsRes.ok) {
        throw new Error("Product details loading failed");
    }

    const product = await detailsRes.json();

    return (

        <main className="min-h-screen flex-1 bg-[#F0F5F1]">

            <div className="mx-auto w-full max-w-[1084px] px-4 py-6 sm:px-0">

                {/* Product Header */}
                <ProductDetailsHeader product={product} />

                {/* Product Details */}
                <ProductDetails product={product} />

            </div>

        </main>

    );

}
