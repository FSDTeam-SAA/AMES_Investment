import { BarChart3, ShieldCheck, Zap } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import process from "../../../public/img/process.png";

export default function FeaturesSection() {
  return (
    <div className="min-h-screen lg:h-[700px] bg-[#111111] text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        {/* Features Label */}
       
        <Badge  className="mb-6 border-[#44444A] text-white pr-[16px] py-1 pl-[8px] shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)] bg-gray-800 rounded-lg">
            <img className="mr-2" src={process} alt="" srcset="" />
            Features
        </Badge>

        {/* Heading and Description */}
        <div className="mb-16 max-w-6xl">
          <h1 className="mb-6 text-2xl font-bold tracking-tight md:text-3xl lg:text-[40px]">
            Why Ames Investment Systems?
          </h1>
          <p className="text-lg text-gray-400 md:text-xl">
            Discover the innovative features that set us apart in the world of investing. Built to empower you with
            simple smart tools making it possible for you to have the best return.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Algorithmic Investing */}
          <div className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 p-8 transition-all hover:bg-zinc-900/75">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110 shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)]  bg-gray-800 ">
              <BarChart3 className="h-6 w-6 " />
            </div>
            <h3 className="mb-4 text-2xl font-semibold">Algorithmic Investing</h3>
            <p className="text-gray-400">
              Advanced AI that analyzes market trends and executes smart trades automatically.
            </p>
          </div>

          {/* User Satisfaction */}
          <div className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 p-8 transition-all hover:bg-zinc-900/75">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl  transition-transform group-hover:scale-110 shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)]  bg-gray-800 ">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold">99% User Satisfaction</h3>
            <p className="text-gray-400">99% of our users report satisfaction with Ames Investment Systems.</p>
          </div>

          {/* Server Uptime */}
          <div className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 p-8 transition-all hover:bg-zinc-900/75">
            <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl  transition-transform group-hover:scale-110 shadow-[inset_0px_7.4px_18.5px_0px_rgba(255,255,255,0.11)]  bg-gray-800">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold">99.9% Server Up-time</h3>
            <p className="text-gray-400">The stability you need to stay ahead of market movements at all times.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

