import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const VerticalTeleportText: React.FC<{ text: string }> = ({ text }) => {
  const textRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
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

      gsap.set(spans, { y: 100, opacity: 0, scale: 0.8, filter: 'blur(8px)' });

      const tl = gsap.timeline();

      tl.to(spans, {
        duration: 0.7,
        y: 0,
        opacity: 1,
        scale: 1,
        filter: 'blur(0px)',
        textShadow: '0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 0, 0, 0.5)',
        stagger: {
          amount: 0.5,
          from: 'random',
        },
        ease: 'power2.out',
      }).to(
        spans,
        {
          duration: 0.7,
          y: -100,
          opacity: 0,
          scale: 1.2,
          filter: 'blur(1px)',
          textShadow: '0 0 10px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 0, 0, 0.5)',
          stagger: {
            amount: 0.5,
            from: 'random',
          },
          ease: 'power2.in',
        },
        '+=1'
      );
    }
  }, []);

  return (
    <div className="containe absolute bottom-20 z-50">
      <div ref={textRef} className="teleport-text uppercase text-[#e8b923] font-bold">
        {text}
      </div>
    </div>
  );
};

export default VerticalTeleportText;
