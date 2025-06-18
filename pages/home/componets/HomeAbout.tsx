import Image from 'next/image';
import { mono } from '@/utils/fonts';
import Aos from '@/components/Aos';

export default function About() {
    return (
        <Aos>
            <section id="about" className="xl:mx-20">
                <h2 className={mono.className}>
                    <span className={`${mono.className} span-title`}>01. </span>
                    About Me
                </h2>
                <div className="parent-about">
                    <div className={`${mono.className} about-desc-parent`}>
                        <p className="break-normal">
                            Hi, My name is{' '}
                            <span className="text-cyan">Fairuz Garaudhy</span>{' '}
                            but you can call me{' '}
                            <span className="text-cyan">Faudhy</span>. With a
                            solid background in HR management, I bring expertise
                            in communication, organization, and problem-solving
                            to any team. My experience in HR has equipped me
                            with the skills to manage people, processes, and
                            projects effectively, ensuring a positive and
                            productive work environment. In addition to my HR
                            role, I am also an experienced web developer. I have
                            hands-on experience in building robust and scalable
                            web APIs, working with databases, handling
                            authentication and security, and implementing
                            efficient server-side architecture.
                        </p>
                        <p>
                            Here are a few technologies I've been working with
                            recently
                        </p>
                        <ul className="ul-tech">
                            {tech.map((item, id) => (
                                <li
                                    key={id}
                                    className={`${mono.className} text-sm`}
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="about-img-parent">
                        <div className="about-img-div"></div>
                        <Image
                            priority
                            className="about-img-img"
                            src="/faud.jpeg"
                            width={800}
                            height={900}
                            alt="Faudhy"
                            quality={80}
                        />
                    </div>
                </div>
            </section>
        </Aos>
    );
}

const tech: string[] = [
    'NodeJs',
    'NestJs',
    'Typescript',
    'Javascript (ES6+)',
    'GoLang',
    'Gin',
    'Sequelize',
    'MySQL',
    'Docker',
    'Websocket',
    'Redis',
    'Git',
];
