import Navbar from '@/components/Navbar'
import { cn, constructMetadata } from '@/lib/utils'
import { Inter } from 'next/font/google'
import './globals.css'
import Providers from '@/components/providers';

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Chat With PDF's",
//   description: "Smart AI Chat With PDF's Files",
// };
export const metadata = constructMetadata()


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='light'>
      <Providers>
        <body
          className={cn(
            'min-h-screen font-sans antialiased grainy',
            inter.className
          )}>
          {/* <Toaster /> */}
          <Navbar />
          {children}
        </body>
      </Providers>
    </html>
  );
}
