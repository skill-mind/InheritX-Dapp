import type { Metadata } from "next";
import { METADATA_CONFIG } from "../../Config/app.config";
import "./globals.css";
import ClientProviders from "@/components/client-providers";
import { WalletProvider } from "@/components/wallet-connect-context";

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
         <ClientProviders>
          <WalletProvider>{children}</WalletProvider>
        </ClientProviders>
      </body>
    </html>
  );
}
