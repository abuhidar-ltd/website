import { Crown, Gem, Sparkles, Timer, Trophy, Wine } from 'lucide-react'

export default function Companies() {
  const parentCompanies = [
    {
      name: 'Kennzell',
      description: 'Premium Handcrafted Jewelry',
      tagline: 'Where Luxury Meets Artistry',
      status: 'ESTABLISHED',
      icon: <Gem className="w-8 h-8 text-primary" />,
      features: [
        'Handcrafted Excellence',
        'Premium Materials',
        'Bespoke Designs'
      ]
    },
    {
      name: 'DRNK',
      description: 'Premium Non-Alcoholic Beverages',
      tagline: 'Redefining Refreshment',
      status: 'COMING SOON',
      icon: <Wine className="w-8 h-8 text-primary" />,
      features: [
        'Innovative Flavors',
        'Zero Alcohol',
        'Premium Experience'
      ]
    }
  ]

  return (
    <section id="brands" className="relative py-24 bg-gray-900/50 backdrop-blur-xl border-y border-gray-800">
      {/* Gradient Orbs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/20 rounded-full filter blur-[128px]" />
      
      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-primary text-sm font-semibold tracking-wider rounded-full border border-primary/20 bg-primary/5">
              <Crown size={14} className="animate-pulse" />
              PREMIUM BRANDS
            </span>
          </div>
          
          <h2 className="mt-6 text-3xl lg:text-4xl font-bold text-white">
            Our Parent Companies
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Crafting excellence in jewelry and beverages
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {parentCompanies.map((company, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Animated border gradient */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-blue-500/50 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              
              <div className="relative p-8 rounded-2xl bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition duration-300">
                <div className="flex flex-col items-center text-center">
                  {/* Status Badge */}
                  <div className="mb-6">
                    <span className={`inline-flex items-center gap-2 px-3 py-1 text-sm font-semibold tracking-wider rounded-full border ${
                      company.status === 'COMING SOON' 
                        ? 'text-blue-400 border-blue-400/20 bg-blue-400/5' 
                        : 'text-primary border-primary/20 bg-primary/5'
                    }`}>
                      {company.status === 'COMING SOON' ? <Timer size={14} className="animate-pulse" /> : <Sparkles size={14} />}
                      {company.status}
                    </span>
                  </div>

                  {/* Company Icon */}
                  <div className="mb-4 p-4 rounded-full bg-gray-700/30">
                    {company.icon}
                  </div>
                  
                  {/* Company Name & Description */}
                  <h3 className="text-3xl font-bold text-white mb-2">{company.name}</h3>
                  <p className="text-gray-300 font-medium mb-2">{company.description}</p>
                  <p className="text-gray-400 italic mb-6">{company.tagline}</p>
                  
                  {/* Features */}
                  <div className="w-full space-y-3 pt-6 border-t border-gray-700/50">
                    {company.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center justify-center gap-2 text-gray-300">
                        <Sparkles size={14} className="text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            {
              icon: <Crown className="w-6 h-6 text-primary" />,
              title: 'Premium Quality',
              description: 'Uncompromising excellence in every detail'
            },
            {
              icon: <Sparkles className="w-6 h-6 text-primary" />,
              title: 'Innovative Design',
              description: 'Pushing boundaries in creativity'
            },
            {
              icon: <Trophy className="w-6 h-6 text-primary" />,
              title: 'Luxury Experience',
              description: 'Exceptional products and service'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl bg-gray-800/30 border border-gray-700/50 hover:bg-gray-800/50 transition duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-gray-700/50 group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}