import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-tight">Fashion Cart</h1>
        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition">
          Cart ({count})
        </button>
      </header>

      {/* Hero Section */}
      <section className="text-center py-16 px-4 bg-gradient-to-r from-pink-100 via-rose-100 to-purple-100">
        <h2 className="text-4xl font-extrabold mb-4">Elevate Your Style</h2>
        <p className="text-lg mb-6">Trendy collections for all seasons. Discover now.</p>
        <button className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition">
          Shop Now
        </button>
      </section>

      {/* Product Grid */}
      <section className="px-6 py-12">
        <h3 className="text-2xl font-semibold mb-6">Featured Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((product) => (
            <div
              key={product}
              className="bg-white shadow-sm rounded-lg overflow-hidden hover:shadow-md transition"
            >
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <span className="text-gray-400">Product Image</span>
              </div>
              <div className="p-4">
                <h4 className="text-lg font-semibold">Stylish Outfit #{product}</h4>
                <p className="text-sm text-gray-600 mt-1">₹999.00</p>
                <button
                  onClick={() => setCount((count) => count + 1)}
                  className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
