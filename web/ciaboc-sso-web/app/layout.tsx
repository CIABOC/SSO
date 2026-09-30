import "./globals.css";
import KeycloakProvider from "@/src/components/KeycloakProvider";

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <KeycloakProvider>
            {children}
        </KeycloakProvider>
        </body>
        </html>
    );
}