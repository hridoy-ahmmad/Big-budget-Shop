"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FaGoogle } from "react-icons/fa";



export default function SignInPage() {
    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);


        const email = formData.get("email");
        const password = formData.get("password");

        try {
            const { data, error } = await authClient.signIn.email({
                email,
                password,
                callbackURL: '/'
            });

            if (error) {
                console.error("Sign-in Error:", error);
                return;
            }

            console.log("Success:", data);
        } catch (err) {
            console.error("Server Crash:", err);
        }
    };
    const handleGoogleSignIn = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <Card className="mx-auto w-full my-10 max-w-lg border border-slate-200 bg-white p-8 mt-10 shadow-xl rounded-2xl">
            <h1 className="text-center text-3xl font-extrabold text-slate-800 mb-8">
                Sign In to Your Account
            </h1>

            <Form className="flex flex-col gap-6" onSubmit={onSubmit}>
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
            <p className="text-center font-bold my-5">Or</p>
            <div className="">
                <Button onClick={handleGoogleSignIn} className={'w-full flex justify-center items-center gap-2 my-5  bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors shadow-md active:transform active:scale-[0.98'}><FaGoogle /> Sign In With Google</Button>
            </div>
        </Card>
    );
}