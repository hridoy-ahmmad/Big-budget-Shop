"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";



export default function SignUpPage() {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name");
        const image = formData.get("image");
        const email = formData.get("email");
        const password = formData.get("password");

        try {
            const { data, error } = await authClient.signUp.email({
                name,
                email,
                password,
                image: image || undefined,
            });

            if (error) {
                console.error("Signup Error:", error);
                return;
            }

            console.log("Success:", data);
        } catch (err) {
            console.error("Server Crash:", err);
        }
    };

    return (
        <Card className="mx-auto w-full my-10 max-w-lg border border-slate-200 bg-white p-8 mt-10 shadow-xl rounded-2xl">
            <h1 className="text-center text-3xl font-extrabold text-slate-800 mb-8">
                Create Account
            </h1>

            <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
                {/* Name Field */}
                <TextField isRequired name="name" type="text" className="flex flex-col gap-1.5">
                    <Label className="text-sm font-semibold text-slate-700 ml-1">Name</Label>
                    <Input
                        placeholder="Enter your name"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                    <FieldError className="text-xs text-red-500 mt-1 ml-1" />
                </TextField>

                {/* Image URL Field */}
                <TextField isRequired name="image" type="text" className="flex flex-col gap-1.5">
                    <Label className="text-sm font-semibold text-slate-700 ml-1">Image URL</Label>
                    <Input
                        placeholder="https://example.com/photo.jpg"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                    <FieldError className="text-xs text-red-500 mt-1 ml-1" />
                </TextField>

                {/* Email Field */}
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    className="flex flex-col gap-1.5"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }
                        return null;
                    }}
                >
                    <Label className="text-sm font-semibold text-slate-700 ml-1">Email</Label>
                    <Input
                        placeholder="john@example.com"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                    <FieldError className="text-xs text-red-500 mt-1 ml-1" />
                </TextField>

                {/* Password Field */}
                <TextField
                    isRequired
                    name="password"
                    type="password"
                    className="flex flex-col gap-1.5"
                    validate={(value) => {
                        if (value.length < 8) return "Password must be at least 8 characters";
                        if (!/[A-Z]/.test(value)) return "Need one uppercase letter";
                        if (!/[0-9]/.test(value)) return "Need one number";
                        return null;
                    }}
                >
                    <Label className="text-sm font-semibold text-slate-700 ml-1">Password</Label>
                    <Input
                        placeholder="••••••••"
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    />
                    <Description className="text-xs text-slate-500 mt-1 ml-1 leading-relaxed">
                        Must be 8+ characters with 1 uppercase and 1 number
                    </Description>
                    <FieldError className="text-xs text-red-500 mt-1 ml-1" />
                </TextField>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                    <Button
                        type="submit"
                        className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md active:transform active:scale-[0.98]"
                    >
                        <Check size={18} />
                        Submit
                    </Button>
                    <Button
                        type="reset"
                        variant="secondary"
                        className="px-6 py-3 rounded-lg border border-slate-300 text-slate-600 font-semibold hover:bg-slate-50 transition-colors"
                    >
                        Reset
                    </Button>
                </div>
            </Form>
        </Card>
    );
}