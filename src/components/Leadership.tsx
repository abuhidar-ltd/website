import { LinkedinIcon, Mail, Rocket, Target, Heart } from 'lucide-react'

export default function Leadership() {
  const owners = [
    {
      name: "Mohammad Abuhidar",
      title: "Co-Founder",
      email: "owner.mohammad@abuhidar.com",
      description: "With a fresh perspective and ambitious vision, leading our premium brands towards innovation and excellence."
    },
    {
      name: "Hamza Issa",
      title: "Co-Founder",
      email: "owner.hamza@abuhidar.com",
      description: "With a fresh perspective and ambitious vision, leading our premium brands towards innovation and excellence."
    }
  ]

  return (
    <section id="about" className="relative py-24 bg-gray-900">
      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/20 rounded-full filter blur-[128px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full filter blur-[128px]" />

      <div className="container relative mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-primary text-sm font-semibold tracking-wider rounded-full border border-primary/20 bg-primary/5">
              <Rocket size={14} className="animate-pulse" />
              LEADERSHIP
            </span>
          </div>
          
          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-white">
            Leading with Purpose
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Building a future of premium brands and exceptional experiences
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {owners.map((owner, index) => (
            <div key={index} className="group relative h-full">
              {/* Animated border gradient */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-blue-500/50 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
              
              <div className="relative h-full p-8 rounded-2xl bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition duration-300">
                <div className="flex flex-col items-center text-center h-full">
                  {/* Image Container */}
                  <div className="relative w-32 h-32 rounded-xl overflow-hidden mb-6 group-hover:scale-[1.02] transition-transform duration-300">
                    {/* Add owner image here */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 justify-between">
                    <div className="group-hover:scale-[1.01] transition-transform duration-300">
                      <h3 className="text-2xl font-bold text-white">{owner.name}</h3>
                      <p className="mt-1 text-primary font-medium">{owner.title}</p>
                      
                      <p className="mt-4 text-gray-300 leading-relaxed">
                        {owner.description}
                      </p>
                    </div>

                    {/* Social Links */}
                    <div className="mt-6 flex items-center gap-4 justify-center">
                      <a href="#" className="p-2 rounded-lg bg-gray-700/50 hover:bg-primary/20 transition-colors">
                        <LinkedinIcon className="w-5 h-5 text-primary" />
                      </a>
                      <a href={`mailto:${owner.email}`} className="p-2 rounded-lg bg-gray-700/50 hover:bg-primary/20 transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Vision & Values */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="w-6 h-6 text-primary mb-2" />,
                title: 'Vision',
                description: 'To create brands that redefine luxury and innovation in their respective markets'
              },
              {
                icon: <Heart className="w-6 h-6 text-primary mb-2" />,
                title: 'Values',
                description: 'Commitment to quality, authenticity, and customer delight'
              },
              {
                icon: <Rocket className="w-6 h-6 text-primary mb-2" />,
                title: 'Ambition',
                description: 'Building global brands that set new standards in their industries'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                {item.icon}
                <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 italic">
            "Our journey is just beginning, but our commitment to excellence is unwavering."
          </p>
        </div>
      </div>
    </section>
  )
}