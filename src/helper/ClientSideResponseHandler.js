import toast from "react-hot-toast";

async function ClientSideResponseHandler(res) {
    try {
        if (res.success) {
            toast.success(res.message);
            return res?.data;
        } else {
            toast.error(res.error || "Something went wrong!");
        }
    } catch (error) {
        toast.error(error.message);
    }
}

export default ClientSideResponseHandler;