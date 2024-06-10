"use client"
import { IoSearch } from "react-icons/io5";
const SearchBar: React.FC = () => (

    <div className='flex gap-2 items-center'>
        <IoSearch/>
    <input type='text' className='w-[10rem] h-full bg-transparent focus:outline-none focus:border-none px-4 text-gray-700' placeholder='Search...'/>
    </div>
);

export default SearchBar;