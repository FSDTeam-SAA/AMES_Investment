import MainLayout from "@/Layouts/MainLayout"
import "./DashBoard.css"
import DashboardLayoutAndContent from "./Home/DashboardLayoutAndContent"

import bgLines from "../../../../public/img/BgLines.png"
import vector2 from "../../../../public/img/Vector 2.png"
import {  usePage } from "@inertiajs/react";
import { useEffect, useState } from "react"
import { CloudCog } from "lucide-react"
import PaymentSuccess from "./payment/payment-succes"
import PaymentFailed from "./payment/PaymentFaild"

const Dashboard = () => {

      const {success,cancel } = usePage().props;
      console.log("message from success:", success);
      console.log("message from failed:", cancel);
      
      // const [isOpen, setIsOpen] = useState(false);

      const [isOpen, setIsOpen] = useState(success);
      const [isFailed, setIsFailed] = useState(cancel);

      
      console.log("Dashboard open for success",isOpen)
      console.log("Dashboard open for fail",isFailed)

  return (
    <MainLayout>
      {isOpen && <PaymentSuccess open={isOpen} />}
      {isFailed && <PaymentFailed failed={isFailed} />}

      <div className="relative ">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 flex justify-center items-center">
            <img
              src={vector2 || "/placeholder.svg"}
              alt="vector2"
              className="w-full h-full object-cover blur-[130px]"
            />
          </div>
          <div className="absolute inset-0 flex justify-center items-center opacity-80 translate-y-[-250px]">
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

