import React from 'react';
import Link from 'next/link';
import { FaFacebook } from 'react-icons/fa';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import { Mail, MapPin, Phone } from 'lucide-react';


const Footer = () => {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        { icon: <FaFacebook size={20} />, href: "#", label: "Facebook" },
        { icon: <BsTwitter size={20} />, href: "#", label: "Twitter" },
        { icon: <BsInstagram size={20} />, href: "#", label: "Instagram" },
        { icon: <LiaLinkedin size={20} />, href: "#", label: "LinkedIn" },
    ];

    return (
        <footer className="bg-white border-t border-gray-100 text-gray-600">
            <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                    {/* 1. BRAND & SOCIAL LINKS */}
                    <div className="space-y-6">
                        <Link href="/" className="text-xl font-bold text-indigo-600 tracking-tight">
                            Big Budget
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-500">
                            Building digital experiences that matter. Connect with us on social media to stay updated with our latest news.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="p-2 rounded-full bg-gray-50 text-gray-400 hover:bg-indigo-50 hover:text-indigo-600 transition-all"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* 2. QUICK LINKS (Optional but recommended) */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
                            Company
                        </h3>
                        <ul className="space-y-4 text-sm">
                            <li><Link href="/about" className="hover:text-indigo-600 transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-indigo-600 transition-colors">Services</Link></li>
                            <li><Link href="/blog" className="hover:text-indigo-600 transition-colors">Latest News</Link></li>
                            <li><Link href="/careers" className="hover:text-indigo-600 transition-colors">Careers</Link></li>
                        </ul>
                    </div>

                    {/* 3. CONTACT INFO */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-6">
                            Contact Info
                        </h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-indigo-600 shrink-0" />
                                <span>123 Innovation Way, Tech Suite 500,<br />San Francisco, CA 94105</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-indigo-600 shrink-0" />
                                <a href="tel:+1234567890" className="hover:text-indigo-600">+1 (234) 567-890</a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-indigo-600 shrink-0" />
                                <a href="mailto:hello@brand.com" className="hover:text-indigo-600">hello@brand.com</a>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* BOTTOM BAR: Copyright & Privacy */}
                <div className="mt-12 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-xs">
                    <p className="text-gray-400">
                        &copy; {currentYear} BrandName Inc. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="text-gray-400 hover:text-indigo-600 transition-colors">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className="text-gray-400 hover:text-indigo-600 transition-colors">
                            Terms of Service
                        </Link>
                        <Link href="/cookies" className="text-gray-400 hover:text-indigo-600 transition-colors">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;