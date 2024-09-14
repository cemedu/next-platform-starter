import FetchData from "@/helper/FetchData";
import API from "@/library/apis";


const MessageAction = {

    GetAll: async (token) => await FetchData.GetData(`${API.messages.all}?token=${token}`),
    Details: async (token, id) => await FetchData.GetData(`${API.messages.detail}/${id}?token=${token}`),

    Create: async (data) => await FetchData.PostData(`${API.messages.create}`, data),

    Update: async (token, id, data) => await FetchData.PutData(`${API.messages.update}/${id}?token=${token}`, data),
    Delete: async (token, id) => await FetchData.DeleteData(`${API.messages.delete}/${id}?token=${token}`),

    //user
    FilterById: async (token, id) => await FetchData.GetData(`${API.messages.filterbyid}/${id}?token=${token}`),
};

export default MessageAction;