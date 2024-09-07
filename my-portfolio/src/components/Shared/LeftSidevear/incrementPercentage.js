"use client"
import * as React from 'react';

const IncrementPercentage = (value) => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + 1;
          
          if (newProgress >= value) {
            clearInterval(timer);
          }
          return newProgress;
        });
      }, 50); // Adjust the interval to control the speed of the animation
  
      return () => {
        clearInterval(timer);
      };
    }, [value]);
    return  progress;
};

export default IncrementPercentage;