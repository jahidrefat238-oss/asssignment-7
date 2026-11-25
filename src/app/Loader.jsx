
"use client";

import { Spinner } from "@heroui/react";

export default function Loader({ size = "xl" }) {
    return (
        <div className="flex justify-center items-center py-10">
            <Spinner size={size} />
        </div>
    );
}
