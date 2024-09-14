import FetchData from "@/helper/FetchData";
import API from "@/library/apis";

const QuestionAction = {

    GetAll: async (data) => await FetchData.GetData(`${API.questions.all}?${data}`),

    Filter: async (data) => await FetchData.GetData(`${API.questions.filter}?${data}`),
    Details: async (id) => await FetchData.GetData(`${API.questions.detail}/${id}`),

    Create: async (token, data) => await FetchData.PostData(`${API.questions.create}?token=${token}`, data),

    Update: async (token, id, data) => await FetchData.PutData(`${API.questions.update}/${id}?token=${token}`, data),
    Delete: async (token, id) => await FetchData.DeleteData(`${API.questions.delete}/${id}?token=${token}`),
};

export default QuestionAction;