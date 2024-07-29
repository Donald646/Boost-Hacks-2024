import Image from "next/image";

export default function Home() {
  return (
    <main >
       <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-3">
          <div className="flex justify-between items-center">
            <div>
              <a href="#" className="text-xl font-bold text-gray-800">
                BrandName
              </a>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Home
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                About
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Services
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Contact
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-image.jpg)' }}>
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">Welcome to BrandName</h1>
          <p className="mt-4 text-xl text-gray-200">Your solution for amazing services</p>
          <button className="mt-8 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </main>
    </div>
    </main>
  );
}

