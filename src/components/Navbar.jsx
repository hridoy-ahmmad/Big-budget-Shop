"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Install lucide-react for icons
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

    const [isOpen, setIsOpen] = useState(false);

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
                                <div className="relative  gap-2 h-12 w-12">
                                    <Image
                                        className="rounded-full object-cover border-2 border-blue-500 p-1"
                                        src={userData?.image}
                                        alt={userData?.name}
                                        referrerPolicy="no-referrer"
                                        fill
                                    />

                                </div>
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
                    {/* Mobile Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-700 hover:text-blue-600 focus:outline-none"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-100">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-3 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md text-base font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}

        </nav>
    );
};

export default Navbar;
