import Separator from "@/components/ui/separator";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Components by RHT21",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Separator />
      {children}
    </main>
  );
}
