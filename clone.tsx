import React, {useState} from "react";
import { Search, MapPin, Heart, Star, Clock } from "lucide-react";

// Zomato-like frontend single-file React component
// Drop this into a React + Tailwind project (e.g. Vite or Create React App)
// Requirements: TailwindCSS configured. lucide-react installed for icons (optional)

const SAMPLE_RESTAURANTS = [
  {
    id: 1,
    name: "Bombay Bites",
    cuisine: ["North Indian", "Street Food"],
    rating: 4.4,
    costForTwo: "₹600",
    deliveryTime: "30-40 min",
    image: "https://images.unsplash.com/photo-1604908177522-9a2c7b6b5b33?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1f6f9e0e2b2f1e9a6a9d6d1c9e9b7d1f",
    offers: ["20% off upto ₹100"],
    featured: true,
  },
  {
    id: 2,
    name: "Curry Corner",
    cuisine: ["South Indian", "Seafood"],
    rating: 4.1,
    costForTwo: "₹750",
    deliveryTime: "25-35 min",
    image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=2b2f9a1e3ef1b3a5c7d9f6b2a8c4e3d1",
    offers: [],
    featured: false,
  },
  {
    id: 3,
    name: "Pizza Planet",
    cuisine: ["Italian", "Pizzas"],
    rating: 4.6,
    costForTwo: "₹900",
    deliveryTime: "20-30 min",
    image: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=5b9b7e2d4f1a6f9c9a1d2b3c4e5f6a78",
    offers: ["Free Garlic Bread on orders above ₹500"],
    featured: true,
  },
  {
    id: 4,
    name: "Sushi Studio",
    cuisine: ["Japanese"],
    rating: 4.3,
    costForTwo: "₹1200",
    deliveryTime: "45-55 min",
    image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=8c6d5e4b3a2f1a9b7e6d5c4b3a2f1e6d",
    offers: [],
    featured: false,
  },
  {
    id: 5,
    name: "Green Bowl",
    cuisine: ["Healthy", "Salads"],
    rating: 4.0,
    costForTwo: "₹500",
    deliveryTime: "15-25 min",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=1a2b3c4d5e6f7a8b9c0d1e2f3a4b5c6d",
    offers: ["10% off with code HEALTHY10"],
    featured: false,
  },
  {
    id: 6,
    name: "Brew & Bite",
    cuisine: ["Cafe", "Desserts"],
    rating: 4.5,
    costForTwo: "₹650",
    deliveryTime: "20-30 min",
    image: "https://images.unsplash.com/photo-1508962914676-3a2b1f8f1f3a?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=77e6a2b4c3d2e1f0a9b8c7d6e5f4a3b2",
    offers: [],
    featured: false,
  },
];

function Header({location, setLocation}){
  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-extrabold text-rose-600">Zomato<span className="text-gray-600 font-light">Clone</span></div>
            <div className="hidden md:flex items-center gap-2 bg-gray-100 rounded-md px-3 py-1">
              <MapPin size={16} />
              <input value={location} onChange={(e)=>setLocation(e.target.value)} className="bg-transparent outline-none text-sm"/>
              <ChevronDownIcon />
            </div>
          </div>

          <div className="flex-1 mx-4">
            <div className="flex bg-gray-100 rounded-lg items-center px-3 py-2">
              <Search size={16} />
              <input placeholder="Search for restaurants, dishes or cuisine" className="ml-3 w-full bg-transparent outline-none" />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-block px-4 py-2 rounded-md bg-rose-600 text-white">Login</button>
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">A</div>
          </div>
        </div>
      </div>
    </header>
  );
}

function ChevronDownIcon(){ return <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg> }

function RestaurantCard({r, onToggleFavorite}){
  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition relative">
      <div className="relative">
        <img src={r.image} alt={r.name} className="w-full h-40 object-cover" />
        <button onClick={()=>onToggleFavorite(r.id)} className="absolute top-3 right-3 bg-white/80 rounded-full p-2">
          <Heart className="w-4 h-4 text-rose-500" />
        </button>
        {r.featured && <span className="absolute left-3 top-3 bg-rose-600 text-white text-xs px-2 py-1 rounded">Featured</span>}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold text-lg">{r.name}</h3>
            <p className="text-sm text-gray-500">{r.cuisine.join(" • ")}</p>
          </div>
          <div className="text-right">
            <div className="inline-flex items-center gap-1 bg-green-600 text-white text-sm px-2 py-1 rounded">
              <Star className="w-3 h-3" /> {r.rating}
            </div>
            <div className="text-xs text-gray-500">{r.costForTwo}</div>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center gap-2"><Clock className="w-4 h-4" /> {r.deliveryTime}</div>
          <div>{r.offers.length > 0 ? r.offers[0] : ""}</div>
        </div>
      </div>
    </div>
  );
}

export default function ZomatoClone(){
  const [location, setLocation] = useState("Mumbai");
  const [favorites, setFavorites] = useState([]);
  const [cuisineFilter, setCuisineFilter] = useState(null);
  const [sortBy, setSortBy] = useState("relevance");

  const cuisines = Array.from(new Set(SAMPLE_RESTAURANTS.flatMap(r=>r.cuisine)));

  function toggleFavorite(id){
    setFavorites(prev => prev.includes(id) ? prev.filter(x=>x!==id) : [...prev, id]);
  }

  let filtered = SAMPLE_RESTAURANTS.filter(r => !cuisineFilter || r.cuisine.includes(cuisineFilter));
  if(sortBy === "rating") filtered = filtered.slice().sort((a,b)=>b.rating - a.rating);
  if(sortBy === "time") filtered = filtered.slice().sort((a,b)=>parseInt(a.deliveryTime) - parseInt(b.deliveryTime));

  return (
    <div className="min-h-screen bg-gray-50">
      <Header location={location} setLocation={setLocation} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <aside className="lg:col-span-1">
            <div className="bg-white p-4 rounded-xl shadow-sm">
              <h4 className="font-semibold mb-3">Filters</h4>

              <div className="mb-4">
                <h5 className="text-sm font-medium mb-2">Cuisine</h5>
                <div className="flex flex-wrap gap-2">
                  <button onClick={()=>setCuisineFilter(null)} className={`px-3 py-1 rounded-full text-sm ${cuisineFilter===null? 'bg-rose-600 text-white' : 'bg-gray-100'}`}>All</button>
                  {cuisines.map(c=> (
                    <button key={c} onClick={()=>setCuisineFilter(c)} className={`px-3 py-1 rounded-full text-sm ${cuisineFilter===c? 'bg-rose-600 text-white' : 'bg-gray-100'}`}>{c}</button>
                  ))}
                </div>
              </div>

              <div className="mb-4">
                <h5 className="text-sm font-medium mb-2">Sort</h5>
                <select value={sortBy} onChange={(e)=>setSortBy(e.target.value)} className="w-full rounded-md border-gray-200 p-2">
                  <option value="relevance">Relevance</option>
                  <option value="rating">Rating</option>
                  <option value="time">Delivery Time</option>
                </select>
              </div>

              <div>
                <h5 className="text-sm font-medium mb-2">Quick Links</h5>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>Pure Veg</li>
                  <li>Under ₹500</li>
                  <li>Top Rated</li>
                </ul>
              </div>
            </div>
          </aside>

          <section className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl font-bold">Restaurants near {location}</h2>
              <div className="text-sm text-gray-600">{filtered.length} places</div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map(r=> (
                <RestaurantCard key={r.id} r={{...r, isFav: favorites.includes(r.id)}} onToggleFavorite={toggleFavorite} />
              ))}
            </div>

          </section>
        </div>
      </main>

      <footer className="text-center text-sm text-gray-500 py-6">This is a UI clone for learning/demo purposes only.</footer>
    </div>
  );
}
