import Container1 from "@/components/container/Container1";
import EmptyState from "@/components/empty-state/EmptyState";
import Link from "next/link";

/* eslint-disable */
export const metadata = {
    title: '404 - Not Found | Srikant Kumar Mehta | srisir.com ',
    description: 'Srikant Kumar Mehta is a best website developer in delhi ncr. Srikant Kumar Mehta is also known as "srisir". Srisir developed websites and mobile application using most popular and super advanced technologies node js, react js, next js, mongodb, express js and most popular npm package helper like telwind css, sass, axios etc.',
    generator: 'Next.js',
    applicationName: 'srisir.com',
    referrer: 'origin-when-cross-origin',
    keywords: 'Web developer, Senior web developer, Best web developer, Mern stack developer, Mern stack developer Delhi, Full stack developer, Full stack developer in Delhi',
}

function Custom404() {
    return (
        <Container1>
            <div className="flex items-center justify-center min-h-[70vh]">
                <div>
                    <EmptyState msg={'No page found!'} />
                </div>
            </div>
        </Container1>
    );
}
export default Custom404;