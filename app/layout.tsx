import { Roboto_Mono } from '@next/font/google';
import Header from './Header';
import AdBanner from './AdBanner';
import Footer from './Footer';
import './globals.css';

const robotoMono = Roboto_Mono({
  variable: '--font-roboto-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={robotoMono.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className='font-mono bg-zinc-100 text-zinc-900 scroll-smooth selection:bg-orange-600 selection:text-zinc-100'>
        <Header />
        <AdBanner />
        {children}
        <Footer />
      </body>
    </html>
  );
}
