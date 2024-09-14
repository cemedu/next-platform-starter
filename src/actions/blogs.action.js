import FetchData from "@/helper/FetchData";
import API from "@/library/apis";


const BlogAction = {

    GetAll: async (data) => await FetchData.GetData(`${API.blogs.all}`),
    Details: async (id) => await FetchData.GetData(`${API.blogs.detail}/${id}`),

    Create: async (token, data) => await FetchData.PostData(`${API.blogs.create}?token=${token}`, data),

    Update: async (token, id, data) => await FetchData.PutData(`${API.blogs.update}/${id}?token=${token}`, data),
    Delete: async (token, id) => await FetchData.DeleteData(`${API.blogs.delete}/${id}?token=${token}`),
};

export default BlogAction;