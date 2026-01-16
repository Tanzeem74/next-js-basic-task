import items from "../data/items.json";
import ItemCard from "../components/ItemCard.jsx";

export default function ItemsPage() {
  const categories = [...new Set(items.map(item => item.category))];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-slate-900 via-green-900 to-emerald-950 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-block mb-4">
            <span className="bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 px-6 py-2 rounded-full text-emerald-300 text-sm font-medium tracking-wide">
              Premium Collection
            </span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4 tracking-tight">
            Our Plant Collection
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">
            Discover our handpicked selection of premium plants and trees
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-3">
            <button className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-full font-medium text-sm hover:shadow-lg transition-all">
              All Plants
            </button>
            {categories.map((category, index) => (
              <button 
                key={index}
                className="px-6 py-2 bg-slate-100 text-slate-700 rounded-full font-medium text-sm hover:bg-slate-200 transition-all"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Items Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <p className="text-slate-600">
              Showing <span className="font-semibold text-slate-900">{items.length}</span> plants
            </p>
            <select className="px-4 py-2 bg-white border border-slate-300 rounded-lg text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Name: A to Z</option>
            </select>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {items.map(item => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
