
export default function ProductDetailsHeader({ product }) {

    const getUnit = (unit) => {
        if (unit === "kg") return "প্রতি কেজি";
        if (unit === "piece") return "প্রতি পিস";
        if (unit === "dozen") return "প্রতি ডজন";
        if (unit === "liter") return "প্রতি লিটার";

        return `প্রতি ${unit}`;
    };

    return (

        <section className="rounded-2xl border border-[#DFE7E0] bg-[#FAFCFA] p-5">

            <div className="flex items-center justify-between gap-4">

                {/* Product Information */}
                <div className="flex items-center gap-3">

                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-[#F0F5F1] text-3xl">
                        {product.image}
                    </div>

                    <div>

                        <h1 className="text-xl font-bold text-[#26352C] sm:text-2xl">
                            {product.nameBn}
                        </h1>

                        <p className="text-sm text-gray-500">
                            {getUnit(product.unit)}
                            {" · "}
                            {product.categoryNameBn}
                        </p>

                        <p className="mt-1 text-xs text-gray-500">

                            {product.change?.dir === "up"
                                ? `গতকালের তুলনায় আজ দাম বেড়েছে ${product.change.pct}%`
                                : product.change?.dir === "down"
                                ? `গতকালের তুলনায় আজ দাম কমেছে ${Math.abs(product.change.pct)}%`
                                : "গতকালের তুলনায় আজ দামের পরিবর্তন নেই"}

                        </p>

                    </div>

                </div>

                {/* Today's Price */}
                <div className="shrink-0 rounded-xl bg-[#F0F5F1] px-3 py-3 text-center sm:px-5">

                    <p className="text-xs text-gray-500">
                        আজকের দাম
                    </p>

                    <p className="text-2xl font-bold text-[#26352C]">
                        {product.today}
                    </p>

                    <p className="text-xs text-gray-500">
                        টাকা / {product.unit}
                    </p>

                    <p className={`mt-1 text-xs font-semibold ${
                        product.change?.dir === "up"
                            ? "text-red-500"
                            : product.change?.dir === "down"
                            ? "text-green-600"
                            : "text-gray-500"
                    }`}>
                        {product.change?.dir === "up"
                            ? `▲ ${product.change.pct}%`
                            : product.change?.dir === "down"
                            ? `▼ ${Math.abs(product.change.pct)}%`
                            : "— ০%"}
                    </p>

                </div>

            </div>

        </section>

    );

}
