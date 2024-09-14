import FetchData from "@/helper/FetchData";
import API from "@/library/apis";


const CoursesAction = {

    GetAll: async (search) => await FetchData.GetData(`${API.courses.all}?${search}`),
    Details: async (id) => await FetchData.GetData(`${API.courses.detail}/${id}`),

    Create: async (token, data) => await FetchData.PostData(`${API.courses.create}?token=${token}`, data),

    Update: async (token, id, data) => await FetchData.PutData(`${API.courses.update}/${id}?token=${token}`, data),
    Delete: async (token, id) => await FetchData.DeleteData(`${API.courses.delete}/${id}?token=${token}`),

    //user
    FilterById: async (token, id) => await FetchData.GetData(`${API.courses.filter}/${id}?token=${token}`),
};

export default CoursesAction;