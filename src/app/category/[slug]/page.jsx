import CategoryHeader from "@/app/components/CategoryHeader";
import CategoryProducts from "@/app/components/CategoryProducts";



export default async function CategoryDetailsPage({ params }) {

    // Get Category Slug
    const { slug } = await params;

    // Fetch Category Products
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/products?category=${slug}`
    );

    const products = await res.json();

    // Fetch Category Information
    const resCat = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/categories/${slug}`
    );

    const category = await resCat.json();

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
