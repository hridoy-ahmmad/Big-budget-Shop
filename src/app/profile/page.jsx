"use client"
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const MyProfile = () => {
    const data = authClient.useSession()
    const userData = data.data?.user
    return (
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl border border-gray-100 my-4">
            <div className="md:flex items-center p-6">
                <div className="md:shrink-0 flex justify-center">
                    <div className="relative h-24 w-24">
                        <Image
                            className="rounded-full object-cover border-2 border-blue-500 p-1"
                            src={userData?.image}
                            alt={userData?.name}
                            fill
                        />
                    </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                        <h2 className="text-xl font-bold text-gray-900 tracking-tight">
                            {userData?.name}
                        </h2>
                       
                    </div>
                    <p className="text-gray-500 text-sm mb-2">{userData?.email}</p>
                    <div className="mt-2 pt-2 border-t border-gray-100">
                        <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                            ID: {userData?.id}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfile;