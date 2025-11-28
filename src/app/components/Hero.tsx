"use client";

export default function Hero() {
  const scrollToCallToAction = () => {
    const callToActionElement = document.getElementById('callToAction');
    if (callToActionElement) {
      callToActionElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes runningBorder {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        
        .running-border-btn {
          position: relative;
          background: linear-gradient(45deg, rgb(180, 83, 9), rgb(251, 146, 60), rgb(180, 83, 9), rgb(251, 146, 60));
          background-size: 300% 100%;
          animation: runningBorder 2s linear infinite;
          padding: 4px;
          border-radius: 9999px;
        }
        
        .running-border-btn .btn-inner {
          background: black;
          color: white;
          border-radius: 9999px;
          padding: 12px 32px;
          font-weight: 500;
          font-size: 1.125rem;
          display: block;
          width: 100%;
          height: 100%;
        }
      `}</style>
      
      <section
        id="hero"
        className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 relative overflow-hidden px-6 py-20"
      >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-200 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-orange-100 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto text-center relative z-10">
        
        {/* Beta Launch Badge */}
        <div className="mb-6 mt-10 relative z-10 flex justify-center opacity-0 animate-[fadeInDown_0.8s_ease-out_0.2s_forwards]" style={{animationFillMode: 'forwards'}}>
          <div className="bg-white/80 backdrop-blur-sm border border-orange-200/50 rounded-full px-4 py-2 shadow-lg inline-block hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-700 ease-in-out cursor-pointer">
            <span className="text-sm font-medium text-gray-700">We just launched our infrastructure solutions 🎉</span>
          </div>
        </div>
        
        {/* Primary Tagline */}
        <div className="mb-0 opacity-0 animate-[fadeInLeft_0.8s_ease-out_0.4s_forwards]" style={{animationFillMode: 'forwards'}}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif text-gray-900 leading-snug" style={{fontFamily: 'Times New Roman, serif'}}>
            Your Partner for
          </h1>
        </div>

        {/* Highlighted Tagline */}
        <div className="mb-4 opacity-0 animate-[fadeInRight_0.8s_ease-out_0.6s_forwards]" style={{animationFillMode: 'forwards'}}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium font-serif italic leading-none" style={{fontFamily: 'Times New Roman, serif', color: 'rgb(180, 83, 9)'}}>
            One Stop Infrastructure Solution
          </h2>
        </div>

        {/* Supporting Text */}
        <div className="mb-8 max-w-3xl mx-auto opacity-0 animate-[fadeInLeft_0.8s_ease-out_0.8s_forwards]" style={{animationFillMode: 'forwards'}}>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-medium">
            Your trusted partner for comprehensive infrastructure development—always here to 
            build, innovate, and create lasting foundations with confidence.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-3 sm:gap-4 justify-center items-center opacity-0 animate-[fadeInUp_0.8s_ease-out_1.0s_forwards]" style={{animationFillMode: 'forwards'}}>
          <button 
            className="running-border-btn shadow-lg"
            onClick={scrollToCallToAction}
          >
            <span className="btn-inner">
              Start Your Project
            </span>
          </button>
          <button className="w-12 h-12 sm:w-16 sm:h-16 bg-white/80 hover:bg-white border border-gray-300 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
            <svg className="w-6 h-6 text-orange-600 ml-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        {/* Video Card */}
         {/* <div className="mt-12 sm:mt-16 max-w-4xl mx-auto opacity-0 animate-[fadeInUp_0.8s_ease-out_1.2s_forwards]" style={{animationFillMode: 'forwards'}}>
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 border border-orange-100/50 transition-all duration-700 ease-in-out hover:scale-[1.02] group" style={{boxShadow: '0 25px 50px -12px rgba(251, 146, 60, 0.4), 0 -10px 25px -8px rgba(251, 146, 60, 0.15), -15px 0 30px -10px rgba(251, 146, 60, 0.2), 15px 0 30px -10px rgba(251, 146, 60, 0.2), 0 10px 25px -3px rgba(251, 146, 60, 0.25)'}}>
            
            <div className="relative w-full aspect-video rounded-xl lg:rounded-2xl overflow-hidden bg-gray-100 transition-all duration-500" style={{boxShadow: '0 20px 40px -8px rgba(251, 146, 60, 0.3), 0 -8px 20px -6px rgba(251, 146, 60, 0.1), -12px 0 25px -8px rgba(251, 146, 60, 0.15), 12px 0 25px -8px rgba(251, 146, 60, 0.15), 0 8px 20px -2px rgba(251, 146, 60, 0.2)'}}>
              <video
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 block"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                style={{border: 'none', outline: 'none'}}
              >
                <source src="/bg_vid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="bg-white/25 backdrop-blur-lg rounded-lg px-3 py-2 border border-white/30 transition-all duration-500 group-hover:scale-90">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-xs sm:text-sm font-medium serif text-amber-100" style={{fontFamily: 'Times New Roman, serif'}}>Infrastructure Excellence</h3>
                        <p className="text-xs opacity-90 serif text-orange-200" style={{fontFamily: 'Times New Roman, serif'}}>Building Tomorrow's Foundations</p>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse"></div>
                        <span className="text-xs font-medium serif text-orange-300" style={{fontFamily: 'Times New Roman, serif'}}>LIVE</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 w-8 h-8 bg-orange-500/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
    </>
  );
}
