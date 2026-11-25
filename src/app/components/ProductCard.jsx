
export default function ProductCard({ product }) {

    // Unit Name
    const getUnit = (unit) => {
        if (unit === "kg") return "প্রতি কেজি";
        if (unit === "piece") return "প্রতি পিস";
        if (unit === "dozen") return "প্রতি ডজন";

        return `প্রতি ${unit}`;
    };

    return (

        <div className="rounded-2xl border border-[#DFE7E0] bg-[#FAFCFA] p-4 transition hover:border-[#078B48]">

            {/* Product Information */}
            <div className="flex items-center gap-3">

                {/* Product Image / Emoji */}
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#F0F5F1] text-2xl">
                    {product.image}
                </div>

                {/* Product Name */}
                <div>
                    <h3 className="font-bold text-[#26352C]">
                        {product.nameBn}
                    </h3>

                    <p className="text-sm text-gray-500">
                        {getUnit(product.unit)}
                    </p>
                </div>

            </div>

            {/* Price Information */}
            <div className="mt-3">

                <p className="text-xs text-gray-500">
                    আজকের দাম
                </p>

                <div className="mt-1 flex items-center justify-between">

                    {/* Today's Price */}
                    <p className="text-xl font-bold text-[#26352C]">
                        {product.today} টাকা
                    </p>

                    {/* Price Change */}
                    {product.change?.dir === "up" ? (

                        <span className="rounded-full bg-[#F0F5F1] px-3 py-1 text-xs font-semibold text-red-500">
                            ▲ {product.change.pct}%
                        </span>

                    ) : product.change?.dir === "down" ? (

                        <span className="rounded-full bg-[#F0F5F1] px-3 py-1 text-xs font-semibold text-green-600">
                            ▼ {Math.abs(product.change.pct)}%
                        </span>

                    ) : (

                        <span className="rounded-full bg-[#F0F5F1] px-3 py-1 text-xs font-semibold text-gray-500">
                            — ০%
                        </span>

                    )}

                </div>

            </div>

        </div>

    );
}
