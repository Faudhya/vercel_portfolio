'use client';
import { mono } from '@/utils/fonts';
import { social } from '@/utils/data';
import { motion as m } from 'framer-motion';

export default function Footer() {
    return (
        <footer className={`${mono.className} container mx-auto`}>
            {/* Social Mobile */}
            <div className="social-mobile">
                {social.slice(0, 6).map((item, id) => (
                    <a
                        key={id}
                        href={item.link}
                        className={`${mono.className} `}
                    >
                        <item.icon size="25" />
                    </a>
                ))}
            </div>
            <div className={`${mono.className} text-xs md:text-base`}>
                <p>Built and Designed by Faudhya</p>
            </div>
            {/* Social Desktop */}
            <m.div
                initial={{ y: 430 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                className="social-desktop"
            >
                {social.slice(0, 5).map((item, id) => (
                    <div className="flex flex-col items-center gap-2" key={id}>
                        <div className="group flex gap-4">
                            <a
                                target="_blank"
                                href={item.link}
                                className={`${mono.className} li-nav`}
                            >
                                <item.icon size="25" />
                            </a>
                            <span className="tooltip">
                                {/* Tooltip */}
                                {item.title}
                            </span>
                        </div>
                        <div className="h-14 w-px bg-gray1"></div>
                    </div>
                ))}
            </m.div>

            {/* Social Desktop Mail */}
            <m.div
                initial={{ y: 430 }}
                animate={{ y: 0 }}
                transition={{ duration: 1 }}
                className="social-desktop-email"
                style={{ writingMode: 'vertical-lr' }}
            >
                <a
                    className={`${mono.className} text-xl text-gray1 hover:text-cyan`}
                    href={social[5].link}
                >
                    {social[5].email}
                </a>
                <div className="h-24 w-px bg-gray1"></div>
            </m.div>
        </footer>
    );
}
