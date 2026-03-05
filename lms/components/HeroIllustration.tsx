"use client";

import React from 'react';

const HeroIllustration = () => {
    return (
        <div className="relative">
            <svg width="220" height="290" viewBox="0 0 450 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[0_20px_50px_rgba(59,130,246,0.15)]">
                {/* Soft Shadow Base */}
                <ellipse cx="225" cy="285" rx="120" ry="15" fill="black" fillOpacity="0.03" />

                {/* Desk Section */}
                <g transform="translate(75, 230)">
                    <rect width="300" height="12" rx="6" fill="#F1F5F9" stroke="#E2E8F0" strokeWidth="1" />
                    <rect y="12" x="40" width="220" height="4" rx="2" fill="#E2E8F0" />
                </g>

                {/* Laptop Area */}
                <g transform="translate(145, 175)">
                    {/* Main Body */}
                    <rect width="160" height="95" rx="8" fill="#1E293B" />
                    <rect x="5" y="5" width="150" height="75" rx="4" fill="#334155" />
                    {/* Logo Dot */}
                    <circle cx="80" cy="42" r="4" fill="white" fillOpacity="0.1" />
                    {/* Blue Accent Light */}
                    <rect x="10" y="85" width="140" height="1.5" rx="0.75" fill="#3B82F6" />
                </g>

                {/* Character Illustration */}
                <g transform="translate(195, 85)">
                    {/* Shoulders / Shirt */}
                    <path d="M-40 130 Q0 100 40 130 L45 180 H-45 L-40 130" fill="#3B82F6" />
                    <path d="M-40 130 Q0 100 40 130 L10 145 H-10 L-40 130" fill="black" fillOpacity="0.05" />

                    {/* Head & Neck */}
                    <rect x="-8" y="115" width="16" height="15" fill="#FDE68A" />
                    <circle cx="0" cy="85" r="35" fill="#FDE68A" />

                    {/* Hair - Premium Brown Tones */}
                    <path d="M-35 85 Q-35 40 0 40 Q35 40 35 85 L32 85 Q32 55 0 55 Q-32 55 -32 85 Z" fill="#4B2C20" />
                    <path d="M-35 85 Q-40 70 -30 60 Q-20 50 0 50 Q20 50 30 60 Q40 70 35 85 Z" fill="#3D2319" />

                    {/* Beard / Shadow */}
                    <path d="M-28 100 Q-20 120 0 120 Q20 120 28 100 L25 95 Q25 110 0 110 Q-25 110 -25 95 Z" fill="#3D2319" fillOpacity="0.2" />

                    {/* Facial Features */}
                    <circle cx="-12" cy="90" r="1.5" fill="#3D2319" />
                    <circle cx="12" cy="90" r="1.5" fill="#3D2319" />
                    <path d="M-4 105 Q0 108 4 105" stroke="#3D2319" strokeWidth="1" strokeLinecap="round" />
                </g>

                {/* Floating Props - Micro interactions in design */}
                <motion.g animate={{ y: [0, -8, 0], rotate: [0, 5, 0] }} transition={{ duration: 6, repeat: Infinity }}>
                    <rect x="360" y="150" width="30" height="42" rx="4" fill="white" stroke="#E5E8EB" strokeWidth="1.5" />
                    <rect x="365" y="160" width="20" height="2" rx="1" fill="#E5E8EB" />
                    <rect x="365" y="166" width="20" height="2" rx="1" fill="#E5E8EB" />
                    <rect x="365" y="172" width="15" height="2" rx="1" fill="#E5E8EB" />
                </motion.g>

                <motion.g animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}>
                    <circle cx="60" cy="180" r="12" fill="#3B82F6" fillOpacity="0.2" />
                    <path d="M56 180 L64 180 M60 176 L60 184" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" />
                </motion.g>

                {/* Background Elements */}
                <circle cx="380" cy="80" r="3" fill="#3B82F6" fillOpacity="0.4" />
                <circle cx="340" cy="220" r="4" fill="#3B82F6" fillOpacity="0.2" />
                <circle cx="40" cy="120" r="5" fill="#3B82F6" fillOpacity="0.1" />
            </svg>
        </div>
    );
};

import { motion } from 'framer-motion';

export default HeroIllustration;
