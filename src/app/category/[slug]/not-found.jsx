
import Link from "next/link";

export default function CategoryNotFound() {
    return (
        <main className="flex min-h-[65vh] items-center justify-center bg-[#F0F5F1] px-4">

            <div className="w-full max-w-md rounded-2xl border border-[#DFE7E0] bg-[#FAFCFA] px-6 py-10 text-center">

                {/* Icon */}
                <div className="mb-5 text-6xl">
                    🔍
                </div>

                {/* Heading */}
                <h1 className="text-2xl font-bold text-[#26352C]">
                    ক্যাটাগরি পাওয়া যায়নি!
                </h1>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-gray-500">
                    দুঃখিত, আপনি যে ক্যাটাগরিটি খুঁজছেন
                    সেটি আমাদের তালিকায় পাওয়া যায়নি।
                </p>

                {/* Back to Home */}
                <Link
                    href="/"
                    className="mt-6 inline-flex items-center justify-center rounded-lg bg-[#078B48] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#06743D]"
                >
                    হোম পেজে ফিরে যান
                </Link>

            </div>

        </main>
    );
}
