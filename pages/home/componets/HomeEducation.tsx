'use client';
import { education as exp } from '@/utils/data';
import { mono } from '@/utils/fonts';
import { useState } from 'react';
import Aos from '@/components/Aos';

interface IExperience {
    exp: {
        title: string;
        title_full: string;
        date: string;
        story: string;
    }[];
    current?: number;
    setCurrent?: (id: number) => void;
}

export default function Education() {
    const [current, setCurrent] = useState<number>(0);

    return (
        <Aos>
            <section
                className="sm:mx-10 py-28 lg:mx-10 xl:mx-20 mt-36"
                id="education"
            >
                <h2 className={mono.className}>
                    <span
                        className={`${mono.className} text-lg md:text-2xl text-cyan`}
                    >
                        02.{' '}
                    </span>
                    My Education
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-4 w-full">
                    <div>
                        <Title
                            exp={exp}
                            current={current}
                            setCurrent={setCurrent}
                        />
                    </div>

                    <div className="col-span-4">
                        <Item exp={exp} current={current} />
                    </div>
                </div>
            </section>
        </Aos>
    );
}

const Title = ({ exp, setCurrent, current = 0 }: IExperience) => {
    return (
        <div className="experience-list">
            {exp.map((item, id) => {
                return (
                    <button
                        onClick={() => setCurrent?.(id)}
                        className={`experience-title ${mono.className} ${
                            current === id ? 'experience-title-active' : ''
                        }`}
                        key={id}
                    >
                        <p>{item.title}</p>
                    </button>
                );
            })}
        </div>
    );
};

const Item = ({ exp, current = 0 }: IExperience) => {
    return (
        <>
            <div className={`experience-item ${mono.className}`}>
                <div>
                    <h3>{exp[current]?.title_full}</h3>
                    <p>{exp[current]?.date}</p>
                </div>
            </div>
            <p className={mono.className}>{exp[current]?.story}</p>
        </>
    );
};
