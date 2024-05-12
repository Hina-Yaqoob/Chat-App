import React from 'react'
		import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
	return (
		<form className='flex items-center  gap-2 mt-10' >
			<input type="text" placeholder="Type here" className=" input input-bordered input-success " />

			<button type='submit' className='btn btn-circle bg-blue-500 text-white'>
	
<FaSearch />
			</button>
		</form>
	);
};
export default SearchInput;