import { BsThreeDots } from "react-icons/bs";
import { Switch } from "antd";
function Notifications() {
    const data = [
        "Item update notifications",
        "Item comment notifications",
        "Buyer review notifications",
        "Rating reminders notifications",
        "Meetups near you notifications",
        "Company news notifications",
        "New launches and projects",
        "Monthly product changes",
        "Subscribe to newsletter",
        "Email me when someone follows me"
      ];
      
  return (
    <div className="w-full min-h-[600px] rounded-lg p-8 bg-white">
        <div className="w-full flex items-center justify-between px-4 ">
            <h2 className="text-2xl text-custom_blue font-bold font-sans ">Notifications</h2>
<BsThreeDots className="text-custom_blue text-2xl"/>
        </div>
        <div className="w-full flex items-start justify-start px-4 py-12 flex-col gap-6">
{data.map((text:string,i:number)=>{
    return <div className="w-full flex gap-4">
    <Switch />
    <h3 className="text-custom_blue font-semibold">{text}</h3>
    </div>
})}
        </div>
    </div>
  )
}

export default Notifications