/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";


const ResponsiveText = ({ 
    text, 
    breakpoints = { lg: 50, md: 40, sm: 20, default: 30 },
    defaultLength = 30,
    className = ""
  }) => {
    const [substringLength, setSubstringLength] = useState(defaultLength);

    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        if (width >= 1024) {
          setSubstringLength(breakpoints.lg || defaultLength); 
        } else if (width >= 768 && width < 1024) {
          setSubstringLength(breakpoints.md || defaultLength); 
        } else if (width < 640) {
          setSubstringLength(breakpoints.sm || defaultLength); 
        } else {
          setSubstringLength(breakpoints.default || defaultLength); 
        }
      };
  
      handleResize();
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, [breakpoints, defaultLength]);
    return (
        <p className={`break-words ${className}`}>
          {text.substring(0, substringLength)} . . .
        </p>
      );
    };

export default ResponsiveText;