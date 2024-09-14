import FetchData from "@/helper/FetchData";
import API from "@/library/apis";


const CommentAction = {

    GetAll: async (data) => await FetchData.GetData(`${API.comments.all}?token=${data}`),
    Details: async (id) => await FetchData.GetData(`${API.comments.detail}/${id}`),

    Create: async (token, data) => await FetchData.PostData(`${API.comments.create}?token=${token}`, data),

    Update: async (token, id, data) => await FetchData.PutData(`${API.comments.update}/${id}?token=${token}`, data),
    Delete: async (token, id) => await FetchData.DeleteData(`${API.comments.delete}/${id}?token=${token}`),

        //user
        FilterById: async (token, id) => await FetchData.GetData(`${API.comments.filterbyid}/${id}?token=${token}`),
};

export default CommentAction;