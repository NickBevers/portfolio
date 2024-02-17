import "/src/app/globals.css";
import type { Metadata } from "next";
import Navigation from "../_components/navigation/page";

export const metadata: Metadata = {
  title: "Nick Bevers",
  description: "Your friendly neighborhood web developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navigation style="reverse" />
      <main>{children}</main>
    </div>
  );
}
