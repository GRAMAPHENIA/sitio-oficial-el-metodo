"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { socials } from "@/data/socials";

export function SocialLinks() {
  return (
    <div className="flex gap-4 mr-36">
      {socials.map((social) => (
        <Link
          key={social.label}
          href={social.href}
          target="_blank"
          aria-label={social.label}
        >
          <Image
            src={social.icon}
            alt={social.label}
            width={40}
            height={40}
            className="opacity-50 hover:opacity-70 hover:bg-orange-400/40 p-2 rounded-lg"
          />
        </Link>
      ))}
    </div>
  );
}
