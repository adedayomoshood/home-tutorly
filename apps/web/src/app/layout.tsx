import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, Wix_Madefor_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Provider from "@/components/provider";
import Image from "next/image";

const wixDisplay = Wix_Madefor_Display({
  subsets: ["latin"],
  variable: "--font-wix-display",
  weight: ["400", "500", "700", "800"],
});

const ibmPlex = IBM_Plex_Sans_Thai({
  subsets: ["latin"],
  variable: "--font-ibm-plex",
  weight: ["300"],
});

export const metadata: Metadata = {
  title: "Home Tutorly App",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "A take home assessment for Front-End/Mobile Developer Role at TFA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${wixDisplay.variable} ${wixDisplay.className} ${ibmPlex.variable} antialiased`}
      >
        <Provider>
          <section className="container pt-4 md:pt-8 pb-20 selection:bg-primary-500/25">
            <Header />

            <Image src="/images/image-2.png" alt="" width={400} height={400} />

            {children}
          </section>
        </Provider>
      </body>
    </html>
  );
}
