import FetchData from "@/helper/FetchData";
import API from "@/library/apis";

const PaymentAction = {

    GetAll: async (search) => await FetchData.GetData(`${API.payments.all}?${search}`),
    Details: async (token, id) => await FetchData.GetData(`${API.payments.detail}/${id}?token=${token}`),
    Filter: async (token, id) => await FetchData.GetData(`${API.payments.filter}?token=${token}&id=${id}`),

    Create: async (token, data) => await FetchData.PostData(`${API.payments.create}?token=${token}`, data),
    Verify: async (token, data) => await FetchData.PostData(`${API.payments.verify}?token=${token}`, data),

    Update: async (token, id, data) => await FetchData.PutData(`${API.payments.update}/${id}?token=${token}`, data),
    Delete: async (token, id) => await FetchData.DeleteData(`${API.payments.delete}/${id}?token=${token}`),

    //user
    FilterById: async (token, id) => await FetchData.GetData(`${API.payments.filterbyid}/${id}?token=${token}`),
};

export default PaymentAction;