"use client";

import { Skeleton } from "@heroui/react";
import ProductGridSkeleton from "@/app/components/ProductSkeleton";

export default function Loading() {

    return (

        <main className="min-h-screen flex-1 bg-[#F0F5F1]">

            {/* Category Header Skeleton */}
            <section className="mx-auto w-full max-w-[1084px] px-4 pt-6 sm:px-0">

                <div className="flex items-center gap-5 rounded-2xl border border-[#DFE7E0] bg-[#FAFCFA] px-6 py-5">

                    <Skeleton
                        animationType="shimmer"
                        className="h-12 w-12 rounded-xl"
                    />

                    <div className="space-y-2">
                        <Skeleton animationType="shimmer" className="h-6 w-32 rounded-lg" />
                        <Skeleton animationType="shimmer" className="h-3 w-48 rounded-lg" />
                    </div>

                </div>

            </section>

            {/* Products Skeleton */}
            <section className="mx-auto w-full max-w-[1084px] px-4 py-7 sm:px-0">

                <div className="mb-5 flex items-center justify-between">
                    <Skeleton animationType="shimmer" className="h-4 w-40 rounded-lg" />
                    <Skeleton animationType="shimmer" className="h-9 w-24 rounded-lg" />
                </div>

                <ProductGridSkeleton count={9} />

            </section>

        </main>

    );

}