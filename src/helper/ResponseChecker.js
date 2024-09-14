import EmptyState from "@/components/empty-state/EmptyState";

const ResponseChecker = async (res) => {
    try {
        if (res?.success) {

            if (res?.data.length < 1) {
                return { empty: <EmptyState msg={"No data found!"} /> };
            } else {
                return { data: res?.data };
            }

        } else {
            return { empty: <EmptyState msg={res?.error} /> };
        }
    } catch (error) {
        return { empty: <EmptyState msg2={error.message} /> };
    }
}

export default ResponseChecker;