
export default function ProductDetails({ product }) {

    const markets = product.markets || [];

    // Calculate Minimum Price
    const minPrice = markets.length
        ? Math.min(...markets.map((item) => item.min))
        : 0;

    // Calculate Maximum Price
    const maxPrice = markets.length
        ? Math.max(...markets.map((item) => item.max))
        : 0;

    // Calculate Average Price
    const averagePrice = markets.length
        ? markets.reduce(
            (total, item) => total + (item.min + item.max) / 2,
            0
        ) / markets.length
        : 0;

    const formatPrice = (price) => {
        return Number.isInteger(price)
            ? price
            : price.toFixed(2);
    };

    return (

        <section className="mt-4 rounded-2xl border border-[#DFE7E0] bg-[#FAFCFA] p-4 sm:p-5">

            {/* Price Summary */}
            <h2 className="mb-3 font-semibold text-[#26352C]">
                দামের সারসংক্ষেপ
            </h2>

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">

                {/* Minimum Price */}
                <div className="rounded-xl border border-[#DFE7E0] p-4">

                    <p className="text-xs text-gray-500">
                        সর্বনিম্ন দাম
                    </p>

                    <p className="mt-1 text-xl font-bold text-green-600">
                        {formatPrice(minPrice)} টাকা
                    </p>

                    <p className="text-xs text-gray-500">
                        সবচেয়ে কম দামের বাজার
                    </p>

                </div>

                {/* Maximum Price */}
                <div className="rounded-xl border border-[#DFE7E0] p-4">

                    <p className="text-xs text-gray-500">
                        সর্বোচ্চ দাম
                    </p>

                    <p className="mt-1 text-xl font-bold text-red-500">
                        {formatPrice(maxPrice)} টাকা
                    </p>

                    <p className="text-xs text-gray-500">
                        সবচেয়ে বেশি দামের বাজার
                    </p>

                </div>

                {/* Average Price */}
                <div className="rounded-xl border border-[#DFE7E0] p-4">

                    <p className="text-xs text-gray-500">
                        গড় দাম
                    </p>

                    <p className="mt-1 text-xl font-bold text-green-600">
                        {formatPrice(averagePrice)} টাকা
                    </p>

                    <p className="text-xs text-gray-500">
                        প্রতি {product.unit} হিসেবে
                    </p>

                </div>

            </div>

            {/* Market Price Table */}
            <h2 className="mb-3 mt-5 font-semibold text-[#26352C]">
                বাজারভিত্তিক আজকের দাম
            </h2>

            <div className="overflow-x-auto rounded-xl border border-[#DFE7E0]">

                <table className="w-full min-w-[650px] text-sm">

                    <thead className="bg-[#FAFCFA] text-gray-500">

                        <tr>
                            <th className="px-3 py-3 text-left font-medium">
                                বাজার
                            </th>

                            <th className="px-3 py-3 text-left font-medium">
                                বিভাগ
                            </th>

                            <th className="px-3 py-3 text-right font-medium">
                                সর্বনিম্ন
                            </th>

                            <th className="px-3 py-3 text-right font-medium">
                                সর্বোচ্চ
                            </th>

                            <th className="px-3 py-3 text-right font-medium">
                                গড়
                            </th>
                        </tr>

                    </thead>

                    <tbody>

                        {markets.map((market, index) => (

                            <tr
                                key={index}
                                className="border-t border-[#E5EBE6] even:bg-[#F0F5F1]"
                            >

                                <td className="px-3 py-3">
                                    {market.market}
                                </td>

                                <td className="px-3 py-3 text-gray-500">
                                    {market.division}
                                </td>

                                <td className="px-3 py-3 text-right">
                                    {market.min} টাকা
                                </td>

                                <td className="px-3 py-3 text-right">
                                    {market.max} টাকা
                                </td>

                                <td className="px-3 py-3 text-right font-medium">
                                    {formatPrice((market.min + market.max) / 2)} টাকা
                                </td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            </div>

            {markets.length === 0 && (
                <p className="py-6 text-center text-sm text-gray-500">
                    বাজারের তথ্য পাওয়া যায়নি।
                </p>
            )}

        </section>

    );

}
