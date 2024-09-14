import FetchData from "@/helper/FetchData";
import API from "@/library/apis";


//login user..........
const CookieSetter = async (data) => {
    const res = await fetch(`/api/session`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    });
    return await res.json();
};

//login user..........
const CookieDelete = async () => {
    const res = await fetch(`/api/logout`, { cache: 'no-cache' });
    return await res.json();
};


const UserAction = {

    Login: async (data) => {
        const res = await FetchData.PostData(`${API.users.login}`, data);
        await CookieSetter(res);
        return res;
    },

    Logout: async (data) => {
        try {
            await FetchData.PostData(`${API.users.logout}`);
            return await CookieDelete();
        } catch (error) {
            console.log(error);
        }
    },

    Create: async (data) => await FetchData.PostData(`${API.users.create}`, data),

    GetAll: async (data) => await FetchData.GetData(`${API.users.all}?${data}`),
    Info: async (token) => await FetchData.GetData(`${API.users.info}?token=${token}`),
    Details: async (token, id) => await FetchData.GetData(`${API.users.detail}?token=${token}`),
    Update: async (token, id, data) => await FetchData.PutData(`${API.users.update}/${id}?token=${token}`, data),
    Delete: async (token, id) => await FetchData.DeleteData(`${API.users.delete}/${id}?token=${token}`),
    Verify: async (token, id, data) => await FetchData.PutData(`${API.users.verify}/${id}?token=${token}`, data),
    Reset: async (token, id, data) => await FetchData.PutData(`${API.users.reset}/${id}?token=${token}`, data),
    Forgot: async (token, id, data) => await FetchData.PutData(`${API.users.forgot}/${id}?token=${token}`, data),
};

export default UserAction;