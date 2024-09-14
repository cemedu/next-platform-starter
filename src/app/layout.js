
import Actions from "@/actions/actions";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import { GetSession } from "@/helper/GetSession";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "Home | Interview Questions and Solutions",
  keywords: "interviews, questions, nodejs, reactjs, programming",
  description:
    "Prepare for your interview with our top-notch resources and guides",
  author: "Srisir",
};

export default async function RootLayout({ children }) {
  const token = GetSession();
  const { success, data } = await Actions.User.Details(token);

  const user = {};
  if (success && data?.id) {
    user.token = token;
    user.name = data.name;
    user.email = data.email;
    user.id = data.id;
    user.role = data.role;
    user.order_list = data.order_list;
  }

  return (
    <html lang="en">
      <body className="body_bg no-scrollbar">
        <Layout user={user}>{children}</Layout>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
