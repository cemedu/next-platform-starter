import FetchData from "@/helper/FetchData";
import API from "@/library/apis";

const RatingAction = {

        GetAll: async (data) => await FetchData.GetData(`${API.rating.all}?token=${data}`),
        Details: async (id) => await FetchData.GetData(`${API.rating.detail}/${id}`),

        Create: async (token, data) => await FetchData.PostData(`${API.rating.create}?token=${token}`, data),

        Update: async (token, id, data) => await FetchData.PutData(`${API.rating.update}/${id}?token=${token}`, data),
        Delete: async (token, id) => await FetchData.DeleteData(`${API.rating.delete}/${id}?token=${token}`),

        //user
        FilterById: async (id) => await FetchData.GetData(`${API.rating.filterbyid}/${id}`),
};

export default RatingAction;