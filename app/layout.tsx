import type { Metadata } from "next"
import ThemeProviderWithToggle from '../components/mui-theme-provider';
import { ReactNode } from "react";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: "Senior Test Engineer | Cypress | Playwright | QA Automation | XRay | JIRA",
  description:
    "Professional portfolio of a Senior Test Engineer specializing in Cypress, Playwright, and modern testing frameworks",
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Toaster />
        <ThemeProviderWithToggle>
          {children}
        </ThemeProviderWithToggle>
      </body>
    </html>
  )
}
