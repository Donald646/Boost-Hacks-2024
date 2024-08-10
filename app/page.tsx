import Image from "next/image";
export default function Home() {
  return (
    <main className="bg-gray-200"> {/* Apply background color here */}
      <div className="min-h-screen">
        <header className="bg-white shadow">
          <div className="container mx-auto px-6 py-3">
            <div className="flex justify-between items-center">
              <div>
                <a href="#" className="text-xl font-bold text-gray-800">
                  Timekeeper
                </a>
              </div>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Home
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Features
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  Pricing
                </a>
                <a href="#" className="text-gray-800 hover:text-gray-600">
                  About Us
                </a>
              </div>
            </div>
          </div>
        </header>

        <main className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900">Welcome to Timekeeper</h1>
            <p className="mt-4 text-xl text-gray-800">Your solution for managing meetings</p>
            <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
              Get Started
            </button>
          </div>
        </main>
      </div>
    </main>
  );
}

