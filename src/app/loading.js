import Loader from "@/components/loader/Loader";

export const metadata = {
  title: 'User Sign Up | Interview Questions and Solutions',
  keywords: 'interviews, questions, nodejs, reactjs, programming',
  description: 'Prepare for your interview with our top-notch resources and guides',
  author: 'Srisir',
};
const loader = () => {
  return (
    <div>
      <Loader />
    </div>
  )
}

export default loader;