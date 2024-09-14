import FetchData from "@/helper/FetchData";
import API from "@/library/apis";


const NotificationAction = {

    GetAll: async (token) => await FetchData.GetData(`${API.notifications.all}?token=${token}`),
    Details: async (token, id) => await FetchData.GetData(`${API.notifications.detail}/${id}?token=${token}`),

    Create: async (token, data) => await FetchData.PostData(`${API.notifications.create}?token=${token}`, data),

    Update: async (token, id, data) => await FetchData.PutData(`${API.notifications.update}/${id}?token=${token}`, data),
    Delete: async (token, id) => await FetchData.DeleteData(`${API.notifications.delete}/${id}?token=${token}`),

    //user
    FilterById: async (token, id) => await FetchData.GetData(`${API.notifications.filterbyid}/${id}?token=${token}`),
};

export default NotificationAction;