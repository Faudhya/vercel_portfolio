import React from 'react';
import Image from 'next/image';
import { FiGithub } from 'react-icons/fi';
import { BiLinkExternal } from 'react-icons/bi';
import { mono } from '@/utils/fonts';

interface ProjectProps {
    project: {
        title: string;
        link: string;
        live?: string;
        desc: string;
        tech: string[];
        image?: any;
    }[];
}

export default function Project({ project }: ProjectProps) {
    return (
        <>
            {project.map((item, id) => {
                return (
                    <div key={id} className="parent-project-card">
                        <div className="parent-project">
                            <a
                                target="_blank"
                                href={item.live ? item.live : item.link}
                            >
                                <h3
                                    className={`project-title ${mono.className}`}
                                >
                                    {item.title}
                                </h3>
                            </a>

                            <div className={`project-desc ${mono.className}`}>
                                <p className="leading-6 text-base">
                                    {item.desc}
                                </p>
                            </div>

                            <ul className={`ul-tech-tag ${mono.className}`}>
                                {item.tech.map((techItem, techId) => (
                                    <li
                                        className="rounded-bg-cyan1"
                                        key={techId}
                                    >
                                        {techItem}
                                    </li>
                                ))}
                            </ul>

                            <div
                                className={`flex gap-4 items-center ${mono.className}`}
                            >
                                <a className="hover:text-cyan" href={item.link}>
                                    <FiGithub size="20" />
                                </a>
                                <span className="hover:text-cyan">
                                    {!!item.live ? (
                                        <a target="_blank" href={item.live}>
                                            <BiLinkExternal size="20" />
                                        </a>
                                    ) : (
                                        ''
                                    )}
                                </span>
                            </div>
                        </div>

                        <div className="parent-img">
                            <Image
                                className="child-parent-img-1"
                                src={item.image}
                                width={500}
                                height={500}
                                alt={item.title}
                                quality={50}
                            />
                            <div className="child-parent-img-2"></div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
