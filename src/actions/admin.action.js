import FetchData from "@/helper/FetchData";
import API from "@/library/apis";


const AdminAction = {

    Users: async (data) => await FetchData.GetData(`${API.admin.users}`),
    Courses: async (data) => await FetchData.GetData(`${API.admin.courses}`),
    Questions: async (data) => await FetchData.GetData(`${API.admin.questions}`),
    Notifications: async (data) => await FetchData.GetData(`${API.admin.notifications}`),
    Messages: async (data) => await FetchData.GetData(`${API.admin.messages}`),
    Blogs: async (data) => await FetchData.GetData(`${API.admin.blogs}`),
    Projects: async (data) => await FetchData.GetData(`${API.admin.projects}`),
    Comments: async (data) => await FetchData.GetData(`${API.admin.comments}`),
    Payments: async (data) => await FetchData.GetData(`${API.admin.payments}`),
    Answers: async (data) => await FetchData.GetData(`${API.admin.answers}`),
    Counts: async (token) => await FetchData.GetData(`${API.admin.counts}?token=${token}`),
};

export default AdminAction;