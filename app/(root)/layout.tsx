import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import "app/globals.css";
import { LeftSidebar, Bottombar, RightSidebar, Topbar } from "components/layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Threads",
    description: "A Next.js 13 Meta Threads application"
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <ClerkProvider appearance={{ baseTheme: dark }}>
        <html lang="en">
            <body className={inter.className}>
                <Topbar />

                <main className="flex flex-row">
                    <LeftSidebar />
                    <section className="main-container">
                        <div className="w-full max-w-4xl">{children}</div>
                    </section>
                    <RightSidebar />
                </main>

                <Bottombar />
            </body>
        </html>
    </ClerkProvider>
);

export default RootLayout;
