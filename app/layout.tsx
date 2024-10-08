import '../styles/globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Head from 'next/head';

export const metadata = {
    title: 'Fairuz Garaudhy',
    description: "Faudhya's Portfolio",
    icons: {
        icon: '/favicon.ico',
    },
};

interface Child {
    children: React.ReactNode;
}

export default function RootLayout({ children }: Child) {
    return (
        <html lang="en">
            <Head>
                <title>{metadata.title}</title>
                <meta name="description" content={metadata.description} />
                <meta
                    property="og:description"
                    content={metadata.description}
                />
                <meta property="og:image" content="./meta.jpg" />
            </Head>
            <body>
                <Navbar />
                <main>
                    <div>{children}</div>
                </main>
                <Footer />
            </body>
        </html>
    );
}
