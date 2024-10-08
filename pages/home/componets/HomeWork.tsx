import { mono } from '@/utils/fonts';
import { project, otherProject } from '@/utils/data';
import Project from '@/components/Work/Project';
import OtherProject from '@/components/Work/OtherProject';
import Aos from '@/components/Aos';

export default function Work() {
    return (
        <section className="h-[100%] py-28 mt-20 pb-20 xl:mx-20" id="project">
            <h2 className={mono.className}>
                <span
                    className={`${mono.className} text-lg md:text-2xl text-cyan`}
                >
                    04.{' '}
                </span>
                Some Things I've Built
            </h2>
            <Aos>
                <div className="parent-work">
                    <Project project={project} />
                </div>
            </Aos>

            {/* <Aos>
                <div className="mt-14">
                    <h3 className="text-center mb-4">
                        Other Noteworthy Projects
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <OtherProject otherProject={otherProject} />
                    </div>
                </div>
            </Aos> */}
        </section>
    );
}
