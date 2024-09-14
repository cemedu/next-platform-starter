
const FetchData = {

    GetData: async (url, data) => {
        try {
            const res = await fetch(url, { cache: 'no-cache' }, {
                method: 'get',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer null"
                },
            });

            return await res.json();
        } catch (error) {
            console.log(error);
        }
    },

    PostData: async (url, data) => {
        try {
            const res = await fetch(url, {
                method: 'post',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            return await res.json();
        } catch (error) {
            console.log(error);
        }
    },

    PutData: async (url, data) => {
        try {
            const res = await fetch(url, {
                method: 'put',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            return await res.json();
        } catch (error) {
            console.log(error);
        }
    },

    DeleteData: async (url, data) => {
        try {
            const res = await fetch(url, {
                method: 'delete',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data)
            });

            return await res.json();
        } catch (error) {
            console.log(error);
        }
    }
};

export default FetchData;