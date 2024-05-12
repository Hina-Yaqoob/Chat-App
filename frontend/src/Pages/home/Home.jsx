import React from 'react'
import SideBar from '../../Components/sidebar/SideBar'
import MessageContainer from '../../Components/messages/MessageContainer'


const Home = () => {
  return (
    <div className='flex sm:h-[450px] md:h-[550px] rounded-lg    bg-gray-400 bg-clip-padding backdrop-filter  '>
     {/* bg-opacity-0  */}
     
    	<SideBar/> 
			<MessageContainer /> 
		</div>
  )
}

export default Home