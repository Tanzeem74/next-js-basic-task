"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in by checking cookie
    const checkAuth = () => {
      const cookies = document.cookie.split(';');
      const authCookie = cookies.find(cookie => cookie.trim().startsWith('auth='));
      setIsLoggedIn(authCookie ? authCookie.split('=')[1] === 'true' : false);
    };
    
    checkAuth();
    // Check auth status on every route change
    const interval = setInterval(checkAuth, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    document.cookie = "auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <nav className="bg-white/95 backdrop-blur-lg shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-3xl group-hover:scale-110 transition-transform">🌿</span>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
            GreenParadise
          </h1>
        </Link>

        <div className="flex items-center gap-10">
          <Link href="/" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
            Home
          </Link>
          <Link href="/items" className="text-slate-700 hover:text-emerald-600 font-medium transition-colors">
            Shop
          </Link>
          
          {isLoggedIn ? (
            <button 
              onClick={handleLogout}
              className="px-8 py-3 bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-700 hover:to-rose-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Logout
            </button>
          ) : (
            <Link 
              href="/login" 
              className="px-8 py-3 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white rounded-full font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
