'use client';
import React from 'react';
import { mono } from '@/utils/fonts';
import { MotionUpOpacity } from '@/components/Motion';

export default function Contact() {
    const isWork = true;
    return (
        <MotionUpOpacity className="contact" id="contact">
            <div>
                <span
                    className={`${mono.className} text-xs md:text-lg text-cyan`}
                >
                    05. What's Next?
                </span>
                <h2 className={mono.className}>Get In Touch</h2>
            </div>
            <p className={`${mono.className} max-w-[600px]`}>
                "My inbox is always open for any questions you might have. I
                will do my best to reach you as soon as possible."
            </p>
            <button type="submit" className={`${mono.className} mt-5 btn w-28`}>
                <a target="_blank" href="mailto:garaaudhy@gmail.com">
                    Say Hello
                </a>
            </button>
        </MotionUpOpacity>
    );
}
