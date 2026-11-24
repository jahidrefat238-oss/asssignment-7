"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
    const router = useRouter();
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());
        console.log("Data from form", data);
        const { data: resData, error } = await authClient.signUp.email({
            email: data.email,
            password: data.password,
            name: data.name
        });
        if (resData?.user?.name) {
            alert("go to sign in page?")
            router.push("/sign-in");
        };
        console.log("RESDATA", resData);
        // Convert FormData to plain object
        formData.forEach((value, key) => {
            data[key] = value.toString();
        });

        alert(`Form submitted with: ${JSON.stringify(data, null, 2)}`);
    };
    const hangleGoogle = async () => {
        const data = await authClient.signIn.social({
            provider: "google",
        });
    }
    return (
        <div>
            <Form className="flex w-96 flex-col gap-4" onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="name"
                    type="text"

                >
                    <Label>Name</Label>
                    <Input placeholder="Enter Your Name" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>

                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
                    validate={(value) => {
                        if (value.length < 8) {
                            return "Password must be at least 8 characters";
                        }
                        if (!/[A-Z]/.test(value)) {
                            return "Password must contain at least one uppercase letter";
                        }
                        if (!/[0-9]/.test(value)) {
                            return "Password must contain at least one number";
                        }

                        return null;
                    }}
                >
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>

                <div className="flex gap-2">
                    <Button type="submit">
                        <Check />
                        Sign Up
                    </Button>
                    <Button type="reset" variant="secondary">
                        Reset
                    </Button>
                </div>
            </Form>
            <p>or sign up with</p>
            <div>
                <Button onClick={hangleGoogle}>Google</Button>
            </div>
        </div>

    );
}