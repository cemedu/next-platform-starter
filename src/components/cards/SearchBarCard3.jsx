import { Categories } from '@/data/data';
import Icons from '@/library/icons';
import NavLink from '@/library/urls';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';

const SearchBarCard3 = () => {
    const route = useRouter();
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState(null);


    function SearchAction(e) {
        e.preventDefault();
        if (category) {
            route.push(`${NavLink.questions}/${category}?query=${search}`)
        } else {
            route.push(`${NavLink.questions}?query=${search}`)
        }
    }

    return (
        <>

            <form action="" onSubmit={SearchAction}>
                <div className="flex items-center justify-center space-x-0">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-[var(--bg1)] xl:min-w-full text-[var(--text1)] p-[6px] border-[0.1px] border-[var(--icon)] rounded-l-md focus:outline-none"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <select
                        onChange={e => setCategory(e.target.value)}
                        className="bg-[var(--bg1)] text-[var(--text1)] p-[6px] w-[125px] border-[0.1px] border-[var(--icon)] focus:outline-none"
                    >
                        <option value="">-languages-</option>
                        {Categories?.map((x, i) => (
                            <option className='text-[var(--text1)] bg-slate-700' key={i} value={x.language}>{x.language}</option>
                        ))}
                    </select>
                    <button type='submit' className="p-[10px] bg-[#fff0] flex border-[0.1px] hover:bg-slate-600 border-[var(--icon)] rounded-r-md items-center">
                        {Icons.Search}
                    </button>
                </div>
            </form>
        </>
    )
}

export default React.memo(SearchBarCard3);