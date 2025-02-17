import { Nunito } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

const nunito = Nunito({
  subsets: ['cyrillic', "latin"],
  variable: '--font-nunito',
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="stylesheet" href="./logo. png" />
      </head> */}
      <body className={nunito.className}>
          <Toaster/>
          {children}
        </body>
    </html>
  );
}
