import FetchData from "@/helper/FetchData";
import API from "@/library/apis";


const PricingAction = {

    GetAll: async (search) => await FetchData.GetData(`${API.pricing.all}?${search}`),
    Details: async (id) => await FetchData.GetData(`${API.pricing.detail}/${id}`),

    Create: async (token, data) => await FetchData.PostData(`${API.pricing.create}?token=${token}`, data),

    Update: async (token, id, data) => await FetchData.PutData(`${API.pricing.update}/${id}?token=${token}`, data),
    Delete: async (token, id) => await FetchData.DeleteData(`${API.pricing.delete}/${id}?token=${token}`),

    FilterById: async (token, id) => await FetchData.GetData(`${API.pricing.filter}/${id}?token=${token}`),
};

export default PricingAction;