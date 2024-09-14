import Banner1 from "@/components/banners/Banner1";
import Button1 from "@/components/button/Button1";
import Container1 from "@/components/container/Container1";
import Loader from "@/components/loader/Loader";
import Navbar from "@/components/navbar/Navbar";
import { InputFields } from "./inputs";
import EmptyState from "@/components/empty-state/EmptyState";
import Footer1 from "@/components/footer/Footer1";
import Error from "@/components/error/Error";
import CourseForm from "@/components/form/CourseForm";

const Components = {
    Container: Container1,
    Banner: Banner1,
    Button: Button1,
    Inputs: InputFields,
    EmptyState: EmptyState,
    Footer: Footer1,
    Loader: Loader,
    Navbar: Navbar,
    Error:Error,
    CourseForm:CourseForm
};

export default Components;