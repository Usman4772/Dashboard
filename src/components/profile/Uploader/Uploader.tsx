import { Button } from "antd"
import UploadComp from "./UploadComp"

function Uploader() {
  return (
    <div className="w-[25vw] min-h-[400px] bg-white rounded-lg flex items-center justify-center flex-col gap-4 px-8">
<UploadComp/>
<h2 className="w-full text-start font-bold text-custom_blue text-2xl font-sans">Complete your profile</h2>
<p className="w-full text-gray-400 text-sm">Stay on the pulse of distributed  projects with an anline whiteboard to plan , coordinate and discuss.</p>
<Button className="px-8 py-5 bg-blue-800 rounded-3xl flex items-center justify-center text-white font-semibold mt-2"> Publish now</Button>
    </div>
  )
}

export default Uploader