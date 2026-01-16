import Link from "next/link";

export default function Home() {
  return (
    <main className="overflow-hidden bg-neutral-50">
      {/* 1. Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-green-900 to-emerald-950">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(5,150,105,0.1),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="max-w-5xl mx-auto text-center space-y-12">
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              <span className="text-emerald-100 text-sm font-medium tracking-wide">Premium Plant Collection 2026</span>
            </div>
            
            <h1 className="text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.95] tracking-tight">
              <span className="block text-white mb-4">Elevate Your</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400">
                Living Space
              </span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
              Curated collection of rare and exotic plants. Handpicked by experts, delivered with care, grown with passion.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-8 justify-center">
              <Link 
                href="/items" 
                className="group relative px-12 py-5 bg-white text-slate-900 rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
              >
                <span className="relative z-10">Explore Collection</span>
              </Link>
              <button className="px-12 py-5 border-2 border-white/20 backdrop-blur-xl text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all">
                Watch Story
              </button>
            </div>

            <div className="grid grid-cols-3 gap-12 pt-16 max-w-3xl mx-auto">
              <div className="space-y-2">
                <div className="text-5xl font-bold text-white">30+</div>
                <div className="text-emerald-200 text-sm uppercase tracking-wider">Rare Species</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-white">5K+</div>
                <div className="text-emerald-200 text-sm uppercase tracking-wider">Plant Lovers</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl font-bold text-white">100%</div>
                <div className="text-emerald-200 text-sm uppercase tracking-wider">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Features Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-emerald-600 font-medium text-sm uppercase tracking-[0.2em]">Our Promise</span>
            </div>
            <h2 className="text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">Why Choose Us</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">Excellence isn't just a goal, it's our standard</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {[
              { 
                title: 'Certified Quality', 
                desc: 'Every plant undergoes rigorous quality checks and comes with authenticity certification',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                )
              },
              { 
                title: 'Expert Guidance', 
                desc: 'Lifetime access to our team of botanists and horticulture specialists',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                )
              },
              { 
                title: 'Premium Packaging', 
                desc: 'Climate-controlled delivery with biodegradable, eco-friendly materials',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                )
              },
              { 
                title: 'Lifetime Warranty', 
                desc: 'Comprehensive care support and replacement guarantee for peace of mind',
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                )
              }
            ].map((feature, i) => (
              <div key={i} className="group relative bg-slate-50 rounded-3xl p-10 hover:bg-white hover:shadow-xl transition-all">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/20 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How It Works */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-emerald-600 font-medium text-sm uppercase tracking-[0.2em]">Simple Process</span>
            </div>
            <h2 className="text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">How It Works</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">From selection to delivery, we've perfected every step</p>
          </div>

          <div className="grid lg:grid-cols-4 gap-12">
            {[
              { step: '01', title: 'Discover', desc: 'Browse our curated collection of premium plants', color: 'from-blue-500 to-cyan-500' },
              { step: '02', title: 'Select', desc: 'Choose plants that match your space and style', color: 'from-purple-500 to-pink-500' },
              { step: '03', title: 'Checkout', desc: 'Secure payment with multiple options', color: 'from-orange-500 to-red-500' },
              { step: '04', title: 'Receive', desc: 'Get your plants delivered with care', color: 'from-emerald-500 to-green-500' }
            ].map((item, i) => (
              <div key={i} className="relative group">
                <div className="space-y-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform`}>
                    <span className="text-3xl font-bold text-white">{item.step}</span>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
                {i < 3 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-slate-300 to-transparent"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Stats Section */}
      <section className="py-32 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="text-emerald-600 font-medium text-sm uppercase tracking-[0.2em]">Our Impact</span>
            </div>
            <h2 className="text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">Trusted Worldwide</h2>
          </div>

          <div className="grid lg:grid-cols-4 gap-16">
            {[
              { number: '5,000+', label: 'Satisfied Customers', sublabel: 'Across 50+ cities' },
              { number: '30+', label: 'Plant Varieties', sublabel: 'Rare & exotic species' },
              { number: '98%', label: 'Success Rate', sublabel: 'Plant survival guarantee' },
              { number: '24/7', label: 'Expert Support', sublabel: 'Always here to help' }
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-4">
                <div className="text-6xl lg:text-7xl font-bold bg-gradient-to-br from-emerald-600 to-green-700 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="space-y-1">
                  <div className="text-xl font-semibold text-slate-900">{stat.label}</div>
                  <div className="text-sm text-slate-600">{stat.sublabel}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Benefits Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-block mb-4">
                <span className="text-emerald-600 font-medium text-sm uppercase tracking-[0.2em]">Benefits</span>
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">Transform Your Space Naturally</h2>
              <p className="text-xl text-slate-600 leading-relaxed font-light">
                Experience the joy of nurturing life while creating a healthier, more beautiful environment for you and your loved ones.
              </p>
              
              <div className="space-y-6 pt-4">
                {[
                  { title: 'Improve Air Quality', desc: 'Natural air purification for healthier living' },
                  { title: 'Reduce Stress', desc: 'Create a calming, peaceful atmosphere' },
                  { title: 'Boost Productivity', desc: 'Enhance focus and creativity naturally' },
                  { title: 'Aesthetic Appeal', desc: 'Elevate your interior design effortlessly' }
                ].map((benefit, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{benefit.title}</h3>
                      <p className="text-slate-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="h-64 bg-gradient-to-br from-emerald-400 to-green-500 rounded-3xl"></div>
                <div className="h-48 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl"></div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="h-48 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-3xl"></div>
                <div className="h-64 bg-gradient-to-br from-purple-400 to-pink-500 rounded-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Testimonials */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-emerald-600 font-medium text-sm uppercase tracking-[0.2em]">Testimonials</span>
            </div>
            <h2 className="text-6xl lg:text-7xl font-bold text-slate-900 mb-6 tracking-tight">Loved by Many</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-light">Real stories from our community of plant enthusiasts</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { 
                name: 'Rajesh Sharma', 
                role: 'Interior Designer', 
                location: 'Mumbai', 
                text: 'The quality is unmatched. Every plant arrived in perfect condition and has been thriving in my projects. Truly premium service.',
                gradient: 'from-blue-500 to-cyan-500'
              },
              { 
                name: 'Priya Kumar', 
                role: 'Landscape Architect', 
                location: 'Bangalore', 
                text: 'Professional, knowledgeable, and passionate. The expert guidance helped me create stunning outdoor spaces for my clients.',
                gradient: 'from-purple-500 to-pink-500'
              },
              { 
                name: 'Amit Mehta', 
                role: 'Plant Enthusiast', 
                location: 'Delhi', 
                text: 'From rare species to common favorites, their collection is impressive. The care instructions and support are exceptional.',
                gradient: 'from-orange-500 to-red-500'
              }
            ].map((review, i) => (
              <div key={i} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-3xl shadow-xl group-hover:shadow-2xl transition-shadow"></div>
                <div className="relative p-10 space-y-8">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-lg text-slate-700 leading-relaxed">"{review.text}"</p>
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                    <div className={`w-14 h-14 bg-gradient-to-br ${review.gradient} rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">{review.name}</div>
                      <div className="text-sm text-slate-600">{review.role} • {review.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CTA Section */}
      <section className="relative py-40 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(5,150,105,0.15),transparent_50%)]"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 bg-emerald-500/10 backdrop-blur-xl border border-emerald-500/20 px-6 py-3 rounded-full mb-12">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
            <span className="text-emerald-300 text-sm font-medium tracking-wide">Limited Time Offer</span>
          </div>
          
          <h2 className="text-6xl lg:text-8xl font-bold text-white mb-8 tracking-tight leading-[0.95]">
            Begin Your
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              Green Journey
            </span>
          </h2>
          
          <p className="text-2xl text-slate-300 mb-16 max-w-3xl mx-auto font-light leading-relaxed">
            Join thousands of plant lovers who have transformed their spaces with our premium collection
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
            <Link 
              href="/items" 
              className="group relative px-12 py-5 bg-white text-slate-900 rounded-full font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/20"
            >
              <span className="relative z-10">Explore Collection</span>
            </Link>
            <Link 
              href="/login" 
              className="px-12 py-5 border-2 border-white/20 backdrop-blur-xl text-white rounded-full font-semibold text-lg hover:bg-white/10 hover:border-white/40 transition-all"
            >
              Create Account
            </Link>
          </div>

          <div className="grid grid-cols-3 gap-16 max-w-3xl mx-auto pt-12 border-t border-white/10">
            <div className="space-y-2">
              <div className="text-5xl font-bold text-white">5000+</div>
              <div className="text-emerald-300 text-sm uppercase tracking-wider">Happy Customers</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-white">30+</div>
              <div className="text-emerald-300 text-sm uppercase tracking-wider">Plant Varieties</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-white">100%</div>
              <div className="text-emerald-300 text-sm uppercase tracking-wider">Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
