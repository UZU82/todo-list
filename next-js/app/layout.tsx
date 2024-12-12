import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: 'Todo List',
    description: 'A simple todo list app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko-KR">
            <body>{children}</body>
        </html>
    );
}