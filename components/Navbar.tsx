'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { list } from '@/utils/data';
import { mono } from '@/utils/fonts';
import { motion as m } from 'framer-motion';
import Faud from '@/public/logo.png';

export default function Navbar() {
    const [current, setCurrent] = useState<number | null>(null);
    const [menu, setMenu] = useState(false);
    const handleMenu = () => {
        setMenu(!menu);
    };

    return (
        <nav className="container mx-auto">
            {/*Logo*/}
            <m.h3
                initial={{ x: -200 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className={`${mono.className} cursor-pointer`}
            >
                <a href="#home">
                    <Image
                        src={Faud}
                        alt="logo"
                        height={30}
                        width={50}
                        className="rounded-full"
                    />
                </a>
            </m.h3>

            {/*Desktop Navigation*/}
            <m.ul
                initial={{ x: 800 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className={`${mono.className} navDesktop text-base`}
            >
                {list.map((item, id) => (
                    <li
                        onClick={() => setCurrent(id)}
                        key={item.title}
                        className={`li-nav ${
                            current === id ? 'text-cyan' : ''
                        }`}
                    >
                        <Link href={item.href ? item.href : `#${item.title}`}>
                            <span className="text-cyan text-xs">
                                0{id + 1}.{' '}
                            </span>
                            {item.title}
                        </Link>
                    </li>
                ))}
                <li>
                    <button className="btn w-20 p-5">
                        <a
                            target="_blank"
                            href="resume.pdf"
                            download="resume.pdf"
                        >
                            Resume
                        </a>
                    </button>
                </li>
            </m.ul>

            {/*Menu Navigation*/}
            <m.button
                initial={{ x: 100 }}
                animate={{ x: 0 }}
                transition={{ duration: 1 }}
                className="menu"
                onClick={handleMenu}
            >
                <div className={mono.className}>{!menu ? 'Menu' : 'Close'}</div>
            </m.button>

            {/*Mobile Navigation*/}
            <ul
                onClick={handleMenu}
                className={`${mono.className} ${
                    !menu ? 'navMobileOff' : `left-0`
                } navMobile`}
            >
                {list.map((item, id) => (
                    <li key={item.title} className="li-nav text-lg ">
                        <span className="text-cyan text-xs">0{id + 1}. </span>
                        <a href={`#${item.title}`}>{item.title}</a>
                    </li>
                ))}
                <li>
                    <button className="btn w-28 p-5 py-6">
                        <a
                            target="_blank"
                            href="resume.pdf"
                            download="resume.pdf"
                        >
                            Resume
                        </a>
                    </button>
                </li>
            </ul>
        </nav>
    );
}
