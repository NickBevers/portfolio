import "./globals.css";
import type { Metadata } from "next";
import TTHoves from "./styles/fonts";
import { ProjectProvider } from "@/context/globalState";

export const metadata: Metadata = {
  title: "Nick Bevers",
  description: "Your friendly neighborhood web developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={TTHoves.className}>
        <ProjectProvider>
          {children}
        </ProjectProvider>
      </body>
    </html>
  );
}