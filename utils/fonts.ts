import { NextFont } from 'next/dist/compiled/@next/font';
import { DM_Mono } from 'next/font/google';

export const mono: NextFont = DM_Mono({
    subsets: ['latin'],
    weight: ['300', '400', '500'],
});
