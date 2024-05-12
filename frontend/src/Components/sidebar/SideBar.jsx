import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const SideBar = () => {
  return (
    <div className='border-r border-gray-900 p-4 flex flex-col'>
<SearchInput/>
 <Conversations/>
<LogoutButton/> 

    </div>
  )
}

export default SideBar