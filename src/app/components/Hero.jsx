
import Link from "next/link";
import { Button } from "@heroui/react";
import Image from "next/image";

export default function Hero() {

    const today = new Date().toLocaleDateString("bn-BD", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    return (
        <section className="mx-auto w-full max-w-[1084px] px-4 pt-6 sm:px-0 sm:pt-7">

            <div className="flex min-h-[340px] flex-col items-center justify-between gap-6 rounded-3xl border border-[#DFE7E0] bg-[#FAFCFA] px-5 py-8 sm:flex-row sm:px-8 sm:py-10">

                {/* Left Content */}
                <div className="w-full flex-1">

                    {/* Date */}
                    <div className="mb-4 inline-block rounded-full bg-[#E2F2E7] px-3 py-1.5 text-xs font-medium text-[#078B48]">
                        {today}
                    </div>

                    {/* Heading */}
                    <h1 className="max-w-[520px] text-3xl font-bold leading-[1.3] text-[#26352C] sm:text-[42px]">
                        আজকের বাজারের দাম এক নজরে
                    </h1>

                    {/* Description */}
                    <p className="mt-3 max-w-[560px] text-sm leading-6 text-[#68746B] sm:text-base">
                        চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম —
                        বাজারভিত্তিক বিস্তারিত, গড়, সর্বনিম্ন-সর্বোচ্চ এবং
                        দামের পরিবর্তন এক জায়গায়।
                    </p>

                    {/* Button */}
                    <a href="#all-products">
                        <Button className="mt-5 h-10 rounded-lg bg-[#078B48] px-5 text-sm font-semibold text-white shadow-md hover:bg-[#06783F]">
                            সব পণ্য দেখুন
                        </Button>
                    </a>

                </div>

                {/* Right Image */}
                <div className="flex w-full shrink-0 items-center justify-center sm:w-[300px]">

                    <Image
                        src="/bazar-hero.png"
                        alt="Fresh vegetables basket"
                        width={300}
                        height={260}
                        priority
                        className="h-auto w-[220px] object-contain sm:w-[280px]"
                    />

                </div>

            </div>

        </section>
    );
}
