import Header from "@/components/header";
import Provider from "@/components/provider";
import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai, Wix_Madefor_Display } from "next/font/google";
import "./globals.css";

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

/* export const metadata: Metadata = {
  title: "Home Tutorly Assessment",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "A take home assessment for Front-End/Mobile Developer Role at TFA",
}; */

export const metadata: Metadata = {
  title: "Home Tutorly Assessment",
  description:
    "A take home assessment for Front-End/Mobile Developer Role at TFA",
  openGraph: {
    type: "website",
    url: "https://moshood.dev",
    title: "Home Tutorly Assessment",
    description:
      "A take home assessment for Front-End/Mobile Developer Role at TFA",
    images: [
      {
        width: 1200,
        height: 630,
        alt: "Home Tutorly Assessment",
        url: "https://tutorly.moshood.dev/og-image.png",
      },
    ],
  },
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
          <section className="container pt-4 md:pt-8 pb-20 selection:bg-primary-500/25 min-h-screen">
            <Header />

            {children}
          </section>
        </Provider>
      </body>
    </html>
  );
}
