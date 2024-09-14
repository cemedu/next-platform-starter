import FetchData from "@/helper/FetchData";
import API from "@/library/apis";


const ProjectAction = {

    GetAll: async (data) => await FetchData.GetData(`${API.projects.all}?${data}`),
    Details: async (id) => await FetchData.GetData(`${API.projects.detail}/${id}`),

    Create: async (token, data) => await FetchData.PostData(`${API.projects.create}?token=${token}`, data),

    Update: async (token, id, data) => await FetchData.PutData(`${API.projects.update}/${id}?token=${token}`, data),
    Delete: async (token, id) => await FetchData.DeleteData(`${API.projects.delete}/${id}?token=${token}`),

    //user
    FilterById: async (token, id) => await FetchData.GetData(`${API.projects.filter}/${id}?token=${token}`),
};

export default ProjectAction;