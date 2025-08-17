import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <main className="border-b">
      <div className="flex flex-col items-center justify-center gap-4 px-4 py-8 text-lg border-vertical align-center">
        <p className="text-center text-balance">
          Built by{" "}
          <Link
            href="https://www.instagram.com/rht21/"
            target="_blank"
            className="font-mono font-medium cursor-pointer text-primary hover:underline"
          >
            RHT21
          </Link>
          . Inspired by{" "}
          <Link
            href="https://chanhdai.com/"
            target="_blank"
            className="font-mono font-medium cursor-pointer hover:underline"
          >
            Chánh Đại
          </Link>{" "}
          and{" "}
          <Link
            href="https://ui.shadcn.com/"
            target="_blank"
            className="font-mono font-medium cursor-pointer hover:underline"
          >
            ShadCN
          </Link>
          .
        </p>
        <SocialLinks />
      </div>
    </main>
  );
};

export default Footer;
