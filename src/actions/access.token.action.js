import FetchData from "@/helper/FetchData";
import API from "@/library/apis";


const AccessTokenAction = {

    GetAll: async (token) => await FetchData.GetData(`${API.accesstoken.all}?token=${token}`),
    Filter: async (token, data) => await FetchData.GetData(`${API.accesstoken.filter}?token=${token}&${data}`),
    Details: async (token, id) => await FetchData.GetData(`${API.accesstoken.detail}/${id}?token=${token}`),

    Create: async (token, data) => await FetchData.PostData(`${API.accesstoken.create}?token=${token}`, data),

    Update: async (token, id, data) => await FetchData.PutData(`${API.accesstoken.update}/${id}?token=${token}`, data),
    Delete: async (token, id) => await FetchData.DeleteData(`${API.accesstoken.delete}/${id}?token=${token}`),

    //user
    FilterById: async (query, id) => await FetchData.GetData(`${API.accesstoken.filterbyid}/${id}?${query}`),
};

export default AccessTokenAction;