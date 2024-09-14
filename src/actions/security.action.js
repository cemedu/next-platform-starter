import FetchData from "@/helper/FetchData";
import API from "@/library/apis";


const SecurityAction = {

    GetAll: async (token) => await FetchData.GetData(`${API.security.all}?token=${token}`),
    Details: async (token, id) => await FetchData.GetData(`${API.security.detail}/${id}?token=${token}`),

    Create: async (data) => await FetchData.PostData(`${API.security.create}?token=${token}`, data),

    Update: async (token, id, data) => await FetchData.PutData(`${API.security.update}/${id}?token=${token}`, data),
    Delete: async (token, id) => await FetchData.DeleteData(`${API.security.delete}/${id}?token=${token}`),
    DeleteAll: async (token, id) => await FetchData.DeleteData(`${API.security.deleteall}?token=${token}`),
};

export default SecurityAction;