
"use client";

import { useEffect } from "react";
import toast from "react-hot-toast";

export default function LoginSuccessToast() {
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        if (params.get("login") === "success") {
            toast.success("সফলভাবে লগইন হয়েছে!");

            window.history.replaceState({}, "", "/");
        }
    }, []);

    return null;
}
