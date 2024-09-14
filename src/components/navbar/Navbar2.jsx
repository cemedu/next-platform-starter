import Actions from '@/actions/actions';
import StoreAction from '@/context/context.action';
import { Context } from '@/context/StateProvider';
import { admin_navigation, user_navigation } from '@/helper/navigations';
import PageReload from '@/helper/PageReload';
import Icons from '@/library/icons';
import NavLink from '@/library/urls';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';


const Navbar2 = ({ user }) => {
    const [nav, setNav] = useState(false);
    const { dispatch, state } = useContext(Context);
    const [menu, setMenu] = useState(false);
    const router = useRouter();

    const LogOutHandler = async () => {
        try {
            setNav(!nav);
            const { success, error, message } = await Actions.User.Logout();

            if (success) {
                toast.success(message);
                dispatch({ type: StoreAction.logout, payload: {} });
                PageReload();
            } else {
                toast.error(error);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    function LogINHandler() {
        setNav(false);
        dispatch({ type: StoreAction.popup, payload: [true, 'login'] });
    }

    function SignupHandler() {
        setNav(false);
        dispatch({ type: StoreAction.popup, payload: [true, 'signup'] });
    }

    function Theme() {
        dispatch({ type: StoreAction.theme, payload: !state.theme });
    }

    const UserMenu = (link) => {
        setNav(!nav);
        setMenu(false);
        if (link) {
            router.push(link);
        }
    }

    function Nav(link) {
        setMenu(!menu);
        setNav(false);
        if (link) {
            router.push(link);
        }
    }

    const navada = user?.id && user.role === 'admin' ? admin_navigation : user_navigation;

    return (
        <>
            <div className='absolute top-[75px] sm:top-[27px] right-0 z-50 bg-[var(--bg1)]'>
                {nav && (
                    <div className="mx-auto max-h-[350px] overflow-y-auto no-scrollbar mt-4 bg-[var(--th2)] p-2 px-5 rounded-md border border-[var(--text1)] shadow-md">

                        {user?.id && navada.map((x) => (
                            <span key={x?.name} onClick={() => UserMenu(x?.url)} className="cp flex gap-2 items-center py-2" >{x.icon} {x.name}</span>
                        ))}
                        {user?.id && <span className="cp flex gap-2 items-center py-2" onClick={LogOutHandler}>{Icons.User} {"Logout"}</span>}
                        {!user?.id && <span className="cp flex gap-2 items-center py-2" onClick={LogINHandler}>{Icons.User} {"Login"}</span>}
                        {!user?.id && <span className="cp flex gap-2 items-center py-2" onClick={SignupHandler}>{Icons.User} {"Signup"}</span>}
                    </div>
                )}
            </div>

            <div className='absolute top-[75px] sm:top-[29px] right-0 z-50 bg-[var(--bg1)]'>
                {menu && <div className="mx-auto mt-4 bg-[var(--th2)] p-2 px-5 rounded-md border border-[var(--text1)] shadow-md">
                    <span onClick={() => Nav(NavLink?.pricing)} className="cp flex gap-2 items-center py-2">{Icons.Payment} {'Pricing'}</span>
                    <span onClick={() => Nav(NavLink?.questions)} className="cp flex gap-2 items-center py-2">{Icons.Faq} {'Questions'}</span>
                    <span onClick={() => Nav(NavLink?.courses)} className="cp flex gap-2 items-center py-2">{Icons.BcryptJs} {"Courses"}</span>
                    <span onClick={() => Nav(NavLink?.projects)} className="cp flex gap-2 items-center py-2">{Icons.Project} {'Projects'}</span>
                    <span onClick={() => Nav(NavLink?.contact)} className="cp flex gap-2 items-center py-2">{Icons.Message} {'Contact us'}</span>
                </div>
                }
            </div>

            <div className='flex gap-3 justify-around items-center'>
                <span className='cp' onClick={Theme}>{Icons.Light}</span>
                <div className="cp flex gap-2 items-center py-2 cp" onClick={() => UserMenu(null)}>
                    <span>{nav ? Icons.User : Icons.UserPlus} </span>
                    <span className='user_name'>{user?.name || "User"}</span>
                </div>
                <span className='cp text-[20px]' onClick={() => Nav(null)}>{Icons.Menu}</span>
            </div>
        </>
    )
}

export default Navbar2;