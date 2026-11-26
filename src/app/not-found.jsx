
import Link from "next/link";

export default function NotFound() {
    return (
        <section className="flex min-h-[65vh] items-center justify-center bg-[#F0F5F1] px-4">

            <div className="w-full max-w-md rounded-2xl border border-[#DFE7E0] bg-[#FAFCFA] px-6 py-10 text-center">

                {/* Icon */}
                <div className="mb-5 text-6xl">
                    🔍
                </div>

                {/* 404 Number */}
                <h1 className="text-5xl font-bold text-[#078B48]">
                    404
                </h1>

                {/* Heading */}
                <h2 className="mt-3 text-2xl font-bold text-[#26352C]">
                    পেজটি খুঁজে পাওয়া যায়নি!
                </h2>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-500">
                    দুঃখিত, আপনি যে পেজটি খুঁজছেন
                    সেটি আমাদের ওয়েবসাইটে পাওয়া যায়নি।
                </p>

                {/* Back to Home */}
                <Link
                    href="/"
                    className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#078B48] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#06743D]"
                >
                    হোম পেজে ফিরে যান
                </Link>

            </div>

        </section>
    );
}
