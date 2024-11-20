import { ArrowRight, ChevronRight, Crown, Building } from 'lucide-react'

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center bg-gray-900 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-40 -left-4 w-96 h-96 bg-primary/30 rounded-full filter blur-[128px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full filter blur-[128px]" />

      <div className="relative container mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block animate-fade-in">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-primary text-sm font-semibold tracking-wider rounded-full border border-primary/20 bg-primary/5">
              <Building size={14} className="animate-pulse" />
              PARENT COMPANY
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="mt-8 text-5xl lg:text-7xl font-bold text-white leading-tight">
            Crafting Excellence Through{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">
              Premium Brands
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-6 text-xl text-gray-400 max-w-2xl">
            Home to distinguished brands in luxury jewelry and premium beverages, setting new standards of excellence in craftsmanship and innovation.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button 
              onClick={() => scrollToSection('brands')}
              className="group relative px-6 py-3 text-white font-semibold"
            >
              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span className="absolute inset-0 w-full h-full bg-gray-800 border-2 border-primary group-hover:bg-primary"></span>
              <span className="relative flex items-center gap-2">
                Discover Our Brands <ArrowRight className="w-4 h-4" />
              </span>
            </button>

            <button 
              onClick={() => scrollToSection('about')}
              className="group inline-flex items-center gap-2 px-6 py-3 text-gray-300 hover:text-white transition-colors"
            >
              About Us <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { label: 'Premium Brands', value: '2' },
              { label: 'Countries', value: '2' },
              { label: 'Years Experience', value: '10+' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white">{stat.value}</div>
                <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="absolute bottom-0 left-0 right-0 bg-gray-800/50 backdrop-blur-xl border-t border-gray-700/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Crown size={16} className="text-primary" />
              <span>Premium Quality</span>
            </div>
            <div className="w-2 h-2 rounded-full bg-gray-700" />
            <div className="flex items-center gap-2">
              <Building size={16} className="text-primary" />
              <span>Global Presence</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}