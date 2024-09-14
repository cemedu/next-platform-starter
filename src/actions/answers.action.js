import FetchData from "@/helper/FetchData";
import API from "@/library/apis";


const AnswerAction = {

    GetAll: async (token) => await FetchData.GetData(`${API.answers.all}?token=${token}`),
    Filter: async (token, data) => await FetchData.GetData(`${API.answers.filter}?token=${token}&${data}`),
    Details: async (id) => await FetchData.GetData(`${API.answers.detail}/${id}`),

    Create: async (token, data) => await FetchData.PostData(`${API.answers.create}?token=${token}`, data),

    Update: async (token, id, data) => await FetchData.PutData(`${API.answers.update}/${id}?token=${token}`, data),
    Delete: async (token, id) => await FetchData.DeleteData(`${API.answers.delete}/${id}?token=${token}`),

    //user
    FilterById: async (token, id) => await FetchData.GetData(`${API.answers.filterbyid}/${id}?token=${token}`),
};

export default AnswerAction;