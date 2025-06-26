
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
      <div className={`text-center z-10 px-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Profile Photo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/dfb4d622-acff-4ce6-bcc1-9cdfdfd3d80b.png" 
              alt="Zeyad Mohamed Ali" 
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-blue-gradient-end/30 shadow-2xl hover-glow transition-all duration-300"
            />
            <div className="absolute inset-0 rounded-full bg-blue-gradient opacity-20"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Hi, I'm{' '}
          <span className="text-gradient">Zeyad Mohamed Ali</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
          Blending educational research with creative{' '}
          <span className="text-blue-gradient-end font-semibold">data storytelling</span>
        </p>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-blue-gradient rounded-full opacity-70 animate-pulse" />
        <div className="absolute bottom-32 right-16 w-3 h-3 bg-blue-gradient-end rounded-full opacity-50 animate-pulse delay-1000" />
        <div className="absolute top-1/3 right-20 w-2 h-2 bg-blue-gradient-start rounded-full opacity-60 animate-pulse delay-500" />
      </div>
      
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
