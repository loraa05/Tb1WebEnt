import React, { useState, useEffect, useRef } from 'react'

const Contact = () => {
  // Three animation states: 
  // 'initial' - showing just the text
  // 'shrinking' - text is shrinking
  // 'final' - CONTACT ME with the shrunk text on top
  const [animationState, setAnimationState] = useState('initial');
  const sectionRef = useRef(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // When section is visible, give a moment before starting animation
          setTimeout(() => {
            // Start shrinking
            setAnimationState('shrinking');
            
            // After 1 second of shrinking, show final state
            setTimeout(() => {
              setAnimationState('final');
            }, 1000);
          }, 1000);
        } else {
          // Reset when scrolled away
          setAnimationState('initial');
        }
      },
      { threshold: 0.5 } // Trigger when half of the section is visible
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden" id="contact">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 text-center relative">
        {/* Show the text in initial and shrinking states */}
        {animationState !== 'final' && (
          <div className={`
            transition-all duration-1000 ease-in-out
            ${animationState === 'shrinking' ? 'scale-50' : 'scale-100'}
          `}>
            <div className="inline-block rounded-full border border-gray-300 px-12 py-4">
              <p className="text-2xl md:text-3xl">Got project in mind? dont hesitate to</p>
            </div>
          </div>
        )}
        
        {/* Show CONTACT ME with the shrunk text on top in final state */}
        {animationState === 'final' && (
          <div className="relative">
            {/* The shrunken text positioned to appear above CONTACT ME */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-12 z-10">
              <div className="inline-block rounded-full border border-gray-300 px-4 py-1 bg-white">
                <p className="text-xs md:text-sm">Got project in mind? dont hesitate to</p>
              </div>
            </div>
            
            {/* CONTACT ME that slides up from bottom */}
            <div className="animate-slideUp">
              <h1 className="text-7xl md:text-9xl font-black uppercase">
                CONTACT ME
              </h1>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default Contact