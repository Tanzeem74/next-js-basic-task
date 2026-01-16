import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🌿</span>
              <h3 className="text-xl font-bold">GreenParadise</h3>
            </div>
            <p className="text-gray-400 text-sm">
              Your trusted source for premium plants and trees. Transform your space naturally.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <Link href="/" className="block text-gray-400 hover:text-white transition">Home</Link>
              <Link href="/items" className="block text-gray-400 hover:text-white transition">Shop</Link>
              <Link href="/login" className="block text-gray-400 hover:text-white transition">Login</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Categories</h4>
            <div className="space-y-2 text-sm">
              <Link href="/items" className="block text-gray-400 hover:text-white transition">Fruit Trees</Link>
              <Link href="/items" className="block text-gray-400 hover:text-white transition">Flowering Trees</Link>
              <Link href="/items" className="block text-gray-400 hover:text-white transition">Medicinal Trees</Link>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p>📧 info@greenparadise.com</p>
              <p>📞 +88 01XXXXXXXXX</p>
              <p>📍 Sylhet,Bangladesh</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2026 GreenParadise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
