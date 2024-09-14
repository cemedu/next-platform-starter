import { Categories } from '@/data/data';
import NavLink from '@/library/urls';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';

const SearchBarCard = () => {
    const route = useRouter();
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState(null);

    function SearchAction(e) {
        e.preventDefault();
        if (category) {
            route.push(`${NavLink.questions}/${category}/${search}`)
        } else {
            route.push(`${NavLink.questions}/${search}`)
        }
    }
    return (
        <>

            <form action="" onSubmit={SearchAction}>
                <div className="flex items-center justify-center space-x-2 mb-4">
                    <input
                        style={{ padding: "12px" }}
                        type="text"
                        placeholder="Search..."
                        className=" bg-[#1110] text-[var(--text1)] rounded-l-md focus:outline-none"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <select
                        style={{ padding: "12px" }}
                        onChange={e => setCategory(e.target.value)}
                        className="bg-[#1110] hidden md:block text-[var(--text1)] outline-none rounded-r-md"
                    >
                        <option value="">--Select Language--</option>
                        {Categories?.map((x, i) => (
                            <option key={i} value={x.language}>{x.language}</option>
                        ))}
                    </select>
                    <button type='submit' className="p-2 bg-[#1110] text-[var(--text1)] rounded-md flex items-center">
                        <FaSearch size={25} />
                    </button>
                </div>
            </form>


        </>
    )
}

export default React.memo(SearchBarCard)