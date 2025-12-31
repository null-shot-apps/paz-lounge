'use client';

export default function Landing() {
  return (
    <div className="relative min-h-[100dvh] w-full overflow-x-hidden bg-black text-white">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
      
      {/* Hero Section */}
      <section className="relative z-10 min-h-[100dvh] flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Eye icon */}
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-red-600/20 flex items-center justify-center border-2 border-red-600/50">
              <svg className="w-10 h-10 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
          </div>

          <h1 className="text-[clamp(32px,7vw,72px)] font-bold tracking-tight leading-tight">
            They&apos;re Watching.<br />
            <span className="text-red-500">Everything.</span>
          </h1>
          
          <p className="text-[clamp(18px,3vw,24px)] text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Your phone. Your smart TV. Your home assistant. Big Tech has turned your devices into surveillance tools, tracking every move, every word, every moment.
          </p>

          <div className="pt-8">
            <a 
              href="https://x.com/securelegion" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/30"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Follow @securelegion
            </a>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[clamp(28px,5vw,48px)] font-bold text-center mb-16">
            How They <span className="text-red-500">Spy On You</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Your Phone</h3>
              <p className="text-gray-400 leading-relaxed">
                Every app, every search, every location. They know where you go, who you talk to, and what you&apos;re thinking about buying.
              </p>
            </div>

            {/* Smart Home */}
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Smart Devices</h3>
              <p className="text-gray-400 leading-relaxed">
                Your TV listens. Your doorbell watches. Your thermostat learns your schedule. Your home has become their data mine.
              </p>
            </div>

            {/* Voice Assistants */}
            <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-2xl p-8 hover:border-red-500/50 transition-all duration-300">
              <div className="w-16 h-16 bg-red-600/20 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Voice Assistants</h3>
              <p className="text-gray-400 leading-relaxed">
                Always listening. Always recording. Your private conversations become their training data and advertising gold.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="relative z-10 py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-green-600/20 flex items-center justify-center border-2 border-green-600/50">
              <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
          </div>

          <h2 className="text-[clamp(32px,6vw,56px)] font-bold leading-tight">
            Take Back Your Privacy with<br />
            <span className="text-green-500">Secure Legion</span>
          </h2>
          
          <p className="text-[clamp(18px,3vw,22px)] text-gray-300 max-w-2xl mx-auto leading-relaxed">
            True privacy isn&apos;t a dream. It&apos;s a right. Secure Legion protects you from Big Tech surveillance, giving you complete control over your digital life.
          </p>

          <div className="pt-8 space-y-4">
            <a 
              href="https://x.com/securelegion" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-semibold px-10 py-5 rounded-full text-xl transition-all duration-300 hover:scale-105 shadow-lg shadow-green-600/30"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Join the Privacy Revolution
            </a>
            <p className="text-gray-500 text-sm">Follow @securelegion on X</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2024 Secure Legion. Your privacy is your power.</p>
        </div>
      </footer>
    </div>
  );
}

