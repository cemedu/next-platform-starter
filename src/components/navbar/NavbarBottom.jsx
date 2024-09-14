import { Categories } from '@/data/data';
import Icons from '@/library/icons';
import NavLink from '@/library/urls';
import Link from 'next/link'

const NavbarBottom = () => {
    function Scroll(left, right) {
        if (left) {
            document.getElementById("dsfffs").scrollLeft -= 50;
        }
        if (right) {
            document.getElementById("dsfffs").scrollLeft += 50;
        }
    }
    return (
        <div className='relative'>
            <div className='flex gap-[20px] px-[40px] overflow-x-auto mt-[10px] no-scrollbar' id='dsfffs'>
                {Categories.map((x, i) => (
                    <div key={i}>
                        <Link className='nowrap text-[13px] cp' href={`${NavLink?.questions}/${x.language}`}>
                            <span className='flex items-center justify-center gap-1'>{x.Icon}{x.language.toLocaleUpperCase()}</span>
                        </Link>
                    </div>
                ))}
            </div>

            <div className='hidden md:block'>
                <span
                    onClick={() => Scroll(true, null)}
                    className='bg-[#1111119a] p-1 rounded-full cp absolute -top-1 left-0 '
                >{Icons.Left}</span>
                <span
                    onClick={() => Scroll(null, true)}
                    className='bg-[#1111119a] p-1 rounded-full cp absolute -top-1 right-0'
                >
                    {Icons.Right}
                </span>
            </div>
        </div>
    )
}

export default NavbarBottom;