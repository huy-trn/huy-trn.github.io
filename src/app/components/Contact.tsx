"use client";

import { useState } from "react";
import Image from "next/image";
import avatar from "../assets/freelancer.png";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";
import { JSX } from "react";

export default function Contact() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* Mobile View: Collapsible Sidebar */}
            <div className="md:hidden bg-gray-900 text-white p-4 shadow-lg">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full flex items-center justify-between bg-gray-800 px-4 py-2 rounded-md"
                ><ProfileInfo />
                    <span className="ml-5 w-34 px-4 py-2 rounded-md transition border border-gray-300 text-gray-300 hover:border-blue-600 hover:text-blue-400">
                        {isOpen ? "Hide Contact" : "Show Contact"}
                    </span>
                </button>

                {isOpen && (
                    <div className="mt-4 bg-gray-800 p-4 rounded-lg">
                        <ContactList />
                        <div className="my-4 border-b border-gray-700"></div>
                        <SocialLinks />
                    </div>
                )}
            </div>

            {/* Desktop View: Fixed Sidebar */}
            <aside className="min-w-80 hidden md:block md:mr-5 w-64 bg-gray-900 text-white p-6 rounded-lg shadow-lg">
                <ProfileInfo />
                <div className="my-4 border-b border-gray-700"></div>
                <ContactList />
                <div className="my-4 border-b border-gray-700"></div>
                <SocialLinks />
            </aside>
        </>
    );
}

// Profile Info Component
function ProfileInfo() {
    return (
        <div className="flex md:flex-col flex-row items-center text-center">
            <figure className="mb-4">
                <Image src={avatar} alt="Avatar" width={80} height={80} className="rounded-full" />
            </figure>
            <div className="md:ml-0 ml-5">
                <h1 className="text-xl font-semibold">Tran Quoc Huy</h1>
                <p className="text-sm text-gray-400">Software Developer</p>
            </div>
        </div>
    );
}

// Contact List Component
function ContactList() {
    return (
        <ul className="space-y-4">
            <ContactItem icon={<Mail size={20} className="text-blue-400" />} title="Email" value="tranquochuy645@gmail.com" href="mailto:tranquochuy645@gmail.com" />
            <ContactItem icon={<Phone size={20} className="text-blue-400" />} title="Phone" value="(+84) 37 8258 645" href="tel:+84378258645" />
            <ContactItem icon={<MapPin size={20} className="text-blue-400" />} title="Location" value="Thu Duc, Ho Chi Minh City, Vietnam" />
        </ul>
    );
}

// Social Links Component
function SocialLinks() {
    return (
        <ul className="flex justify-center space-x-4">
            <SocialLink icon={<Linkedin size={24} />} href="https://www.linkedin.com/in/huy-tran-036a7b2a9/" />
            <SocialLink icon={<Github size={24} />} href="https://github.com/huy-trn" />
        </ul>
    );
}

// Reusable ContactItem component
function ContactItem({ icon, title, value, href }: { icon: JSX.Element; title: string; value: string; href?: string }) {
    return (
        <li className="flex items-center space-x-3">
            {icon}
            <div>
                <p className="text-sm text-gray-400">{title}</p>
                {href ? (
                    <a href={href} className="text-gray-300 hover:text-blue-400 transition">
                        {value}
                    </a>
                ) : (
                    <p className="text-gray-300">{value}</p>
                )}
            </div>
        </li>
    );
}

// Reusable SocialLink component
function SocialLink({ icon, href }: { icon: JSX.Element; href: string }) {
    return (
        <li>
            <a href={href} className="text-2xl text-gray-400 hover:text-blue-400 transition">
                {icon}
            </a>
        </li>
    );
}
