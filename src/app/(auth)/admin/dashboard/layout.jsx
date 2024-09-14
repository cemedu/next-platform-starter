
import { admin_navigation } from '@/helper/navigations';
import './style.css';
import Sidebar from '@/components/sidebar/Sidebar';
import { GetSession } from '@/helper/GetSession';
import Actions from '@/actions/actions';
import EmptyState from '@/components/empty-state/EmptyState';


export default async function RootLayout({ children }) {

    const token = GetSession();
    const { success, data: user } = await Actions.User.Info(token)
    if (!success || user?.role === '' || user?.role !== 'admin') {
        return <EmptyState msg={"No page found!"} />
    };

    return (
        <>
            {
                success && user?.role === 'admin' ? (
                    <div className='relative'>
                        <div className='absolute top-0 left-0 hidden sm:block'>
                            <div className='max-h-[600px] overflow-y-auto no-scrollbar'>
                                <Sidebar navigation={admin_navigation} role='Admin' />
                                <br />
                                <br />
                                <br />
                                <br />
                            </div>
                        </div>
                        <div className="dashboard bg-[var(--th2)]">
                            <div></div>
                            <div className='min-h-screen overflow-x-auto'>
                                {children}
                            </div>
                        </div>
                    </div>
                ) : (<EmptyState msg={"No page found!"} />)
            }
        </>
    );
}
