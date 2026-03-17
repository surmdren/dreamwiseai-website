import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DreamWise AI — Become an Agent-Driven Company",
  description:
    "We help enterprises leverage AI agents to transform operations, accelerate growth, and become truly agent-driven organizations.",
  keywords: "AI consulting, AI agents, enterprise AI, digital transformation, agent-driven company",
  authors: [{ name: "Rick Ren" }],
  openGraph: {
    title: "DreamWise AI — Become an Agent-Driven Company",
    description:
      "We help enterprises leverage AI agents to transform operations and become agent-driven organizations.",
    url: "https://dreamwiseai.com",
    siteName: "DreamWise AI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DreamWise AI — Become an Agent-Driven Company",
    description: "We help enterprises leverage AI agents to transform operations.",
    creator: "@surmdren",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
