import { Building2, Scale, Shield, Globe2 } from 'lucide-react'

export default function CompanyInfo() {
  return (
    <section className="relative py-32 bg-gray-900 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-primary/30 rounded-full filter blur-[128px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full filter blur-[128px]" />

      <div className="container relative mx-auto px-6">
        <div className="mb-20 text-center">
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-primary text-sm font-semibold tracking-wider rounded-full border border-primary/20 bg-primary/5">
              <Shield size={14} className="animate-pulse" />
              LEGAL ENTITIES
            </span>
          </div>
          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-white">
            Global Corporate Structure
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Operating through strategically positioned entities in key financial centers, 
            ensuring optimal operational efficiency and regulatory compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* UK Company */}
          <div className="group relative">
            {/* Animated border gradient */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-blue-500/50 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative p-8 rounded-2xl bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-gray-700/50 group-hover:bg-primary/20 transition-colors">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">United Kingdom</h3>
                  <p className="text-gray-400 text-sm">European Operations Hub</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase">Legal Name</span>
                  <span className="text-white font-medium">ABUHIDAR LTD</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase">Company Number</span>
                  <span className="text-white font-medium">15990878</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase">Jurisdiction</span>
                  <span className="text-white font-medium">England and Wales</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase">Incorporation Date</span>
                  <span className="text-white font-medium">1st October 2024</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase">Company Type</span>
                  <span className="text-white font-medium">Private Limited Company</span>
                </div>
              </div>
            </div>
          </div>

          {/* US Company */}
          <div className="group relative">
            {/* Animated border gradient */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/50 to-primary/50 rounded-2xl blur opacity-30 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative p-8 rounded-2xl bg-gray-800/80 backdrop-blur-xl border border-gray-700/50 hover:border-gray-600/50 transition duration-300">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-gray-700/50 group-hover:bg-primary/20 transition-colors">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">United States</h3>
                  <p className="text-gray-400 text-sm">American Operations Hub</p>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase">Legal Name</span>
                  <span className="text-white font-medium">ABUHIDAR, LLC</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase">Filing ID</span>
                  <span className="text-white font-medium">2024-001556014</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase">Jurisdiction</span>
                  <span className="text-white font-medium">Wyoming</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase">Incorporation Date</span>
                  <span className="text-white font-medium">November 19, 2024</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-gray-500 uppercase">Company Type</span>
                  <span className="text-white font-medium">Limited Liability Company</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <Globe2 size={16} className="text-primary" />
            <span>Global Operations</span>
          </div>
          <div className="w-2 h-2 rounded-full bg-gray-700" />
          <div className="flex items-center gap-2">
            <Shield size={16} className="text-primary" />
            <span>Regulatory Compliant</span>
          </div>
        </div>
      </div>
    </section>
  )
}
