import Link from "next/link";
import { redirect } from "next/navigation";

import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { PageWrapper } from "./page-wrapper";

const posts = [
  {
    id: 1,
    title: "Understanding Cross-Site Scripting (XSS)",
    excerpt: "XSS is one of the most common vulnerabilities on the web...",
    slug: "understanding-xss",
  },
  {
    id: 2,
    title: "How to Protect Against SQL Injection",
    excerpt: "SQL Injection remains a prevalent issue in web security...",
    slug: "protect-against-sql-injection",
  },
  {
    id: 3,
    title: "Exploring OAuth 2.0 Security Flaws",
    excerpt: "OAuth 2.0 is often misconfigured in web apps...",
    slug: "oauth-2.0-security-flaws",
  },
];

export default function Base() {
  redirect("/home");
  return (
    <>
      <PageWrapper>
        <div className="flex w-full">aa</div>
      </PageWrapper>
    </>
  );
}
