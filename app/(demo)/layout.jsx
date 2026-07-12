import { Footer } from '../../components/footer';
import { Header } from '../../components/header';

export const metadata = {
    title: {
        template: '%s | Netlify',
        default: 'Netlify Starter'
    }
};

export default function DemoLayout({ children }) {
    return (
        <div dir="ltr" className="font-sans antialiased text-white bg-blue-900">
            <div className="flex flex-col min-h-screen px-6 bg-grid-pattern sm:px-12">
                <div className="flex flex-col w-full max-w-5xl mx-auto grow">
                    <Header />
                    <div className="grow">{children}</div>
                    <Footer />
                </div>
            </div>
        </div>
    );
}
