
import { GetSession } from '@/helper/GetSession';
import Actions from '@/actions/actions';
import EmptyState from '@/components/empty-state/EmptyState';


export default async function RootLayout({ children }) {

        const token = GetSession();
        const { success, data: user } = await Actions.User.Info(token)
        if (!success || user?.role === '' || user?.role !== 'user') {
                return <EmptyState msg={"No page found!"} />
        };

        return (
                <>
                        <div className='min-h-screen overflow-x-auto'>
                                {children}
                        </div>
                </>
        );
}
