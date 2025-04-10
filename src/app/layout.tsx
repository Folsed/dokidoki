import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'

const rubik = Rubik({
    subsets: ['latin'],
})

export const metadata: Metadata = {
    title: 'Dokidoki',
    description:
        'Дайте волю своїм емоціям з Dokidoki: захоплива колекція аніме, фільмів та серіалів, що вразить ваше серце та додасть драйву до вашого дня! Погрузіться у світ пригод, емоцій та незабутніх моментів разом з Dokidoki!',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='en'>
            <body className={`${rubik.className} antialiased`}>{children}</body>
        </html>
    )
}
