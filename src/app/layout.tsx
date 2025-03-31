import type { Metadata } from "next";
import { Providers } from "@/components/Providers";
import { METADATA_CONFIG } from "../../Config/app.config";
import "./globals.css";

export const metadata: Metadata = METADATA_CONFIG;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </head>
      <body className="">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
