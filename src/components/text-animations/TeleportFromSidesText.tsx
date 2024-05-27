import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const TeleportFromSidesText: React.FC = () => {
  const youRef = useRef<HTMLDivElement | null>(null);
  const winRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const animateText = (
      textRef: React.RefObject<HTMLDivElement>,
      direction: 'left' | 'right',
      entranceStagger: 'start' | 'end',
      exitStagger: 'start' | 'end'
    ) => {
      if (textRef.current) {
        const textElement = textRef.current;
        const letters = textElement.innerText.split('');
        textElement.innerText = '';

        letters.forEach(letter => {
          const span = document.createElement('span');
          span.innerText = letter;
          textElement.appendChild(span);
        });

        const spans = textElement.querySelectorAll('span');

        gsap.set(spans, {
          x: direction === 'left' ? -100 : 100,
          opacity: 0,
          scale: 0.8,
          filter: 'blur(8px)',
        });

        const tl = gsap.timeline();

        tl.to(spans, {
          duration: 0.5,
          x: 0,
          opacity: 1,
          scale: 1,
          filter: 'blur(0px)',
          textShadow: '0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 0, 0, 0.5)',
          stagger: {
            amount: 0.5,
            from: entranceStagger,
          },
          ease: 'power2.out',
        }).to(
          spans,
          {
            duration: 0.5,
            x: direction === 'left' ? -100 : 100,
            opacity: 0,
            scale: 1.2,
            filter: 'blur(1px)',
            textShadow: '0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 0, 0, 0.5)',
            stagger: {
              amount: 0.5,
              from: exitStagger,
            },
            ease: 'power2.in',
          },
          '+=1'
        );
      }
    };

    animateText(youRef, 'left', 'end', 'start');
    animateText(winRef, 'right', 'start', 'end');
  }, []);

  return (
    <div className="absolute container flex gap-4 bottom-20">
      <div ref={youRef} className="teleport-text text-[#e8b923] font-bold">
        YOU
      </div>
      <div ref={winRef} className="teleport-text text-[#e8b923] font-bold">
        WIN
      </div>
    </div>
  );
};

export default TeleportFromSidesText;
