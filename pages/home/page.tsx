import HomePage from '@/pages/home/componets/HomeIndex';
import HomeAbout from '@/pages/home/componets/HomeAbout';
import HomeWork from '@/pages/home/componets/HomeWork';
import HomeExperience from '@/pages/home/componets/HomeExperience';
import HomeEducation from '@/pages/home/componets/HomeEducation';
import HomeContact from '@/pages/home/componets/HomeContact';

export default function Page() {
    return (
        <>
            <HomePage />
            <HomeAbout />
            <HomeEducation />
            <HomeExperience />
            <HomeWork />
            <HomeContact />
        </>
    );
}
