import gsap from 'gsap';
import { useEffect } from 'react';
import { useRef } from 'react';

const GsapAnimationDirection = ({ children, from, to, duration }) => {
  const container = useRef(null);

  const animation = () =>{
    gsap.fromTo(
      container.current,
      from,
      {
        ...to,
        ease:"back.inOut",
        duration,
      }
    );
  }

  useEffect(()=>{
    animation()
  },[])

  return <div ref={container}>{children}</div>;
};

export default GsapAnimationDirection;