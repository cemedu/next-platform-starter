import './style.css';
import Container2 from "@/components/container/Container2";
import QuestionTabCard from "./QuestionTabCard";


export const metadata = {
    title: 'Home | Interview Questions and Solutions',
    keywords: 'interviews, questions, nodejs, reactjs, programming',
    description: 'Prepare for your interview with our top-notch resources and guides',
    author: 'Srisir',
};

export default function RootLayout({ children }) {

    return (

        <Container2>
            <QuestionTabCard >
                {children}
            </QuestionTabCard>
        </Container2>
    );
}
