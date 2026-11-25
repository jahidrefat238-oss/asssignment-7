
export default function CategoryHeader({ category, total }) {

    return (

        <section className="mx-auto w-full max-w-[1084px] px-4 pt-6 sm:px-0">

            <div className="flex items-center gap-5 rounded-2xl border border-[#DFE7E0] bg-[#FAFCFA] px-6 py-5">

                {/* Category Icon */}
                <div className="text-4xl">
                    {category.icon}
                </div>

                {/* Category Information */}
                <div>

                    <h1 className="text-2xl font-bold text-[#26352C]">
                        {category.nameBn}
                    </h1>

                    <p className="text-sm text-gray-500">
                        {total}টি পণ্যের আজকের দাম ও পরিবর্তন
                    </p>

                </div>

            </div>

        </section>

    );

}
