import Footer from '@/components/Footer/Footer'
import Nav from '@/components/Nav/Nav'
import GeneralInfo from '@/components/profile/GeneralInfo/GeneralInfo'
import Notifications from '@/components/profile/Notifications/Notifications'
import ProfileCard from '@/components/profile/ProfileCard/ProfileCard'
import Projects from '@/components/profile/Projects/Projects'
import StorageCard from '@/components/profile/StorageCard/StorageCard'
import Uploader from '@/components/profile/Uploader/Uploader'
 
function Profile() {
  return (
    <div className='w-full  '>
        <Nav page={"Profile"}/>
        <div className='flex items-center justify-between flex-wrap px-8 mt-32 gap-8'>
      <ProfileCard/>
      <StorageCard/>
      <Uploader/>
      <Projects/>
      <GeneralInfo/>
      <Notifications/>
      <Footer/>
        </div>
     
    </div>
  )
}

export default Profile