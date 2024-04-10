import "./globals.css";
import type { Metadata } from "next";
import { ProjectProvider } from "@/context/globalState";
import { Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Nick Bevers",
  description: "Your friendly neighborhood web developer",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <ProjectProvider>
          {children}
        </ProjectProvider>
      </body>
    </html>
  );
}