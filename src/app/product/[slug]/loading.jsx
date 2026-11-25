"use client";

import { Skeleton } from "@heroui/react";

export default function Loading() {

    return (

        <main className="min-h-screen flex-1 bg-[#F0F5F1]">

            <div className="mx-auto w-full max-w-[1084px] px-4 py-6 sm:px-0">

                {/* Header */}
                <div className="rounded-2xl border border-[#DFE7E0] bg-[#FAFCFA] p-5">

                    <div className="flex items-center justify-between gap-4">

                        <div className="flex items-center gap-3">

                            <Skeleton
                                animationType="shimmer"
                                className="h-16 w-16 shrink-0 rounded-2xl"
                            />

                            <div className="space-y-2">
                                <Skeleton animationType="shimmer" className="h-6 w-40 rounded-lg" />
                                <Skeleton animationType="shimmer" className="h-3 w-32 rounded-lg" />
                                <Skeleton animationType="shimmer" className="h-3 w-48 rounded-lg" />
                            </div>

                        </div>

                        <Skeleton
                            animationType="shimmer"
                            className="h-24 w-28 shrink-0 rounded-xl"
                        />

                    </div>

                </div>

                {/* Details */}
                <div className="mt-4 rounded-2xl border border-[#DFE7E0] bg-[#FAFCFA] p-4 sm:p-5">

                    <Skeleton animationType="shimmer" className="mb-3 h-5 w-32 rounded-lg" />

                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                        <Skeleton animationType="shimmer" className="h-24 rounded-xl" />
                        <Skeleton animationType="shimmer" className="h-24 rounded-xl" />
                        <Skeleton animationType="shimmer" className="h-24 rounded-xl" />
                    </div>

                    <Skeleton animationType="shimmer" className="mb-3 mt-5 h-5 w-48 rounded-lg" />

                    <Skeleton animationType="shimmer" className="h-64 rounded-xl" />

                </div>

            </div>

        </main>

    );

}