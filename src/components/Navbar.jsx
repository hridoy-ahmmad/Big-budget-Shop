"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const Navbar = () => {
    const router = useRouter()
    const data = authClient.useSession()
    const userData = data.data?.user
    console.log(userData);
    const signOut = async () => {
        await authClient.signOut();
        router.push('/signin');
        toast.success('Signed out successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
    }



    const navLinks = [
        { name: "Home", href: "/" },
        { name: "All Products", href: "/allProducts" },
        { name: "My Profile", href: "/profile" },
    ];
    return (
        <nav className="bg-white shadow-md  w-full ">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="shrink-0 flex items-center">
                        <Link href="/" className="text-2xl font-bold text-blue-600">
                            BIG BUDGET
                        </Link>
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="flex gap-3 items-center">
                        {
                            userData ? <div className="flex items-center gap-2">
                                <Link href={'/profile'}>
                                    <div className="relative  gap-2 h-12 w-12">
                                        <Image
                                            className="rounded-full object-cover border-2 border-blue-500 p-1"
                                            src={userData?.image}
                                            alt={userData?.name}
                                            referrerPolicy="no-referrer"
                                            fill
                                        />

                                    </div>
                                </Link>
                                <Button onClick={signOut} className={'font-semibold cursor-pointer'}>Sign out</Button>
                            </div>
                                :
                                <div className="flex items-center gap-2">
                                    <Link className="py-2 px-3 border uppercase font-semibold border-gray-200 rounded-xl" href={'/signin'}>Login</Link>
                                    <p>Or</p>
                                    <Link className="py-2 px-3 border uppercase font-semibold border-gray-200 rounded-xl" href={'/signup'}>register</Link>
                                </div>
                        }
                    </div>
                </div>
            </div>

        </nav>
    );
};

export default Navbar;
