import Link from "next/link";
import React from "react";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <main className="border-b">
      <div className="border-vertical align-center flex flex-col items-center justify-center gap-4 px-4 py-8 text-lg">
        <p className="text-center text-balance">
          Built by{" "}
          <Link
            href="https://www.X.com/itsrht21"
            target="_blank"
            className="text-primary cursor-pointer font-mono font-medium hover:underline"
          >
            RHT21
          </Link>
          . Inspired by{" "}
          <Link
            href="https://chanhdai.com/"
            target="_blank"
            className="cursor-pointer font-mono font-medium hover:underline"
          >
            Chánh Đại
          </Link>{" "}
          and{" "}
          <Link
            href="https://ui.shadcn.com/"
            target="_blank"
            className="cursor-pointer font-mono font-medium hover:underline"
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
