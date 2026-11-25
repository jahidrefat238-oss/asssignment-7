"use client";

import { Skeleton } from "@heroui/react";

export function ProductCardSkeleton() {
    return (
        <div className="rounded-2xl border border-[#DFE7E0] bg-[#FAFCFA] p-4">

            <div className="flex items-center gap-3">

                <Skeleton
                    animationType="shimmer"
                    className="h-14 w-14 shrink-0 rounded-2xl"
                />

                <div className="flex-1 space-y-2">
                    <Skeleton animationType="shimmer" className="h-4 w-2/3 rounded-lg" />
                    <Skeleton animationType="shimmer" className="h-3 w-1/3 rounded-lg" />
                </div>

            </div>

            <div className="mt-4 space-y-2">

                <Skeleton animationType="shimmer" className="h-3 w-1/4 rounded-lg" />

                <div className="flex items-center justify-between">
                    <Skeleton animationType="shimmer" className="h-6 w-1/3 rounded-lg" />
                    <Skeleton animationType="shimmer" className="h-6 w-14 rounded-full" />
                </div>

            </div>

        </div>
    );
}

export default function ProductGridSkeleton({ count = 6 }) {
    return (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: count }).map((_, index) => (
                <ProductCardSkeleton key={index} />
            ))}
        </div>
    );
}