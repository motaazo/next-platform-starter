import '../styles/globals.css';

export const metadata = {
    title: {
        template: '%s | أجنحة رواق',
        default: 'أجنحة رواق — إقامة فندقية فاخرة'
    },
    description:
        'أجنحة فندقية فاخرة تجمع بين خصوصية المنزل ورفاهية الفندق. احجز جناحك في أجنحة رواق واستمتع بإقامة لا تُنسى.'
};

export default function RootLayout({ children }) {
    return (
        <html lang="ar" dir="rtl" data-theme="lofi">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased">{children}</body>
        </html>
    );
}
