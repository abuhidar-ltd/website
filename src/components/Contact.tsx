import { Mail, MessageSquare, Send } from 'lucide-react'

export default function Contact() {
  return (
    <section className="relative py-24 bg-gray-900">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full filter blur-[128px]" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 rounded-full filter blur-[128px]" />

      <div className="container relative mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="inline-flex items-center gap-2 px-3 py-1 text-primary text-sm font-semibold tracking-wider rounded-full border border-primary/20 bg-primary/5">
                <MessageSquare size={14} className="animate-pulse" />
                GET IN TOUCH
              </span>
            </div>
            
            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-white">
              Let's Start a Conversation
            </h2>
            <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
              Ready to transform your business? We're here to help you achieve your goals.
            </p>
          </div>

          <div className="relative">
            {/* Animated border gradient */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-blue-500/50 rounded-2xl blur opacity-30"></div>
            
            <form className="relative p-8 rounded-2xl bg-gray-800/80 backdrop-blur-xl border border-gray-700/50">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white focus:border-primary focus:ring-1 focus:ring-primary outline-none transition"
                    placeholder="Your message..."
                  />
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button className="group relative px-6 py-3 text-white font-semibold">
                  <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-primary group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                  <span className="absolute inset-0 w-full h-full bg-gray-900 border-2 border-primary group-hover:bg-primary"></span>
                  <span className="relative flex items-center gap-2">
                    Send Message <Send className="w-4 h-4" />
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Alternative Contact */}
          <div className="mt-12 text-center">
            <p className="text-gray-400">Or reach us directly at</p>
            <a href="mailto:contact@abuhidar.com" className="mt-2 inline-flex items-center gap-2 text-primary hover:text-white transition-colors">
              <Mail size={16} />
              contact@abuhidar.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}