import "app/globals.css";
import type { Metadata } from "next";
import { PropsWithChildren } from "react";
import { cn } from "lib";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

const font = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
    title: "Web Template",
    description: "A template to build cool shit"
};

const RootLayout = ({ children }: PropsWithChildren) => (
    <ClerkProvider>
        <html lang="en" className="light scroll-smooth">
            <body className={cn("antialiased", font.className)}>
                <main>{children}</main>
            </body>
        </html>
    </ClerkProvider>
);

export default RootLayout;
