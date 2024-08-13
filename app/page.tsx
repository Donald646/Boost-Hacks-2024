import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Colored spots */}
      <div className="fixed inset-0 ">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300 rounded-full  blur-[100px]" />
        <div className="absolute top-40 right-40 w-72 h-72 bg-pink-300 rounded-full  blur-[100px]" />
        <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-yellow-300/50 rounded-full  blur-[100px]" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-green-300/70 rounded-full  blur-[100px]" />
      </div>

      <div className="min-h-screen">
        <header className="fixed w-full flex justify-center z-10">
          <div className="border rounded-lg px-6 mt-4 py-3 md:w-3/5 bg-white/80 backdrop-blur-sm">
            <div className="flex justify-between items-center">
              <div>
                <a href="#" className=" flex flex-row items-center gap-2 text-xl font-bold text-gray-800">
                  <Clock/>
                  Timekeeper
                </a>
              </div>
              <div className="flex space-x-4 text-sm font-semibold">
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Features
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Pricing
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Testimonials
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="flex items-center justify-center h-screen">
          <div className="text-center relative z-10">
            <h1 className="text-7xl font-bold text-gray-800">Maximize Your Time, <br/> Minimize Your Stress</h1>
            <p className="mt-4 text-2xl text-gray-600">Effortless scheduling for busy professionals</p>
            <Link href="/login">
              <Button size={"lg"} className="mt-8 px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700">
                Start Free Trial
              </Button>
            </Link>
          </div>
        </main>
      </div>
    </main>
  );
}