import MainLayout from "@/Layouts/MainLayout"
import "./DashBoard.css"
import DashboardLayoutAndContent from "./Home/DashboardLayoutAndContent"

import bgLines from "../../../../public/img/BgLines.png"
import vector2 from "../../../../public/img/Vector 2.png"

const Dashboard = () => {
  return (
    <MainLayout>
      <div className="relative ">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src={vector2 || "/placeholder.svg"}
              alt="vector2"
              className="w-full h-full object-cover blur-[130px]"
            />
          </div>
          <div className="absolute inset-0 flex justify-center items-center opacity-80">
            <img src={bgLines || "/placeholder.svg"} alt="" className="w-[80%] h-[40%] object-contain" />
          </div>
        </div>
        <div className="relative z-10">
          <DashboardLayoutAndContent />
        </div>
      </div>
    </MainLayout>
  )
}

export default Dashboard

