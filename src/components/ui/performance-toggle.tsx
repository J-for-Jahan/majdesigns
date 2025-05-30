import React, { useState, useEffect } from 'react';
import { Settings } from 'lucide-react';

const PerformanceToggle = () => {
  const [reduceMotion, setReduceMotion] = useState(() => {
    return localStorage.getItem('reduce-motion') === 'true';
  });

  useEffect(() => {
    if (reduceMotion) {
      document.body.classList.add('reduce-motion');
      localStorage.setItem('reduce-motion', 'true');
    } else {
      document.body.classList.remove('reduce-motion');
      localStorage.setItem('reduce-motion', 'false');
    }
  }, [reduceMotion]);

  return (
    <button
      onClick={() => setReduceMotion(!reduceMotion)}
      className="fixed bottom-4 right-4 z-50 p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10 hover:bg-blue/20 transition-colors"
      title={reduceMotion ? "Enable animations" : "Reduce animations"}
    >
      <Settings size={18} />
      <span className="sr-only">
        {reduceMotion ? "Enable animations" : "Reduce animations"}
      </span>
    </button>
  );
};

export default PerformanceToggle;