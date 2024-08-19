import { Button } from "@/components/ui/button";
import { Clock } from "lucide-react";
import Link from "next/link";
import { Login } from "./(auth)/login/Login";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Colored spots */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-300/70 rounded-full blur-[110px]" />
        <div className="absolute top-40 right-40 w-72 h-72 bg-pink-300/50 rounded-full blur-[110px]" />
        <div className="absolute left-1/4 bottom-0 w-96 h-96 bg-yellow-300/20 rounded-full blur-[110px]" />
        <div className="absolute top-1/2 right-1/4 w-80 h-80 bg-green-300/50 rounded-full blur-[100px]" />
      </div>

      <div className="max-h-screen flex flex-col">
        <header className="w-full flex justify-center z-10 fixed">
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
                <a href="/webcam" className="text-gray-800 hover:text-gray-600">
                  Testimonials
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </header>

          <Login />
      </div>
    </main>
  );
}