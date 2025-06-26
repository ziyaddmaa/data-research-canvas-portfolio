
import { useEffect, useState } from 'react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-gradient-start/20 via-transparent to-blue-gradient-end/20 animate-gradient-shift bg-[length:400%_400%]" />
      
      {/* Content */}
      <div className={`w-full max-w-7xl mx-auto px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Profile Photo */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img 
                src="/lovable-uploads/dfb4d622-acff-4ce6-bcc1-9cdfdfd3d80b.png" 
                alt="Zeyad Mohamed Ali" 
                className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-blue-gradient-end/30 shadow-2xl hover-glow transition-all duration-300"
              />
              <div className="absolute inset-0 rounded-full bg-blue-gradient opacity-20"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left flex-1">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Hi, I'm{' '}
              <span className="text-gradient">Zeyad Mohamed Ali</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl leading-relaxed">
              Blending educational research with creative{' '}
              <span className="text-blue-gradient-end font-semibold">data storytelling</span>
            </p>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-blue-gradient rounded-full opacity-70 animate-pulse" />
      <div className="absolute bottom-32 right-16 w-3 h-3 bg-blue-gradient-end rounded-full opacity-50 animate-pulse delay-1000" />
      <div className="absolute top-1/3 right-20 w-2 h-2 bg-blue-gradient-start rounded-full opacity-60 animate-pulse delay-500" />
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
