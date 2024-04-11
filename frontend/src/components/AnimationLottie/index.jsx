import Lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

const AnimationLottie = ({animationData}) => {
  const lottieContainer = useRef(null);

  useEffect(() => {
    const instance = Lottie.loadAnimation({
      container: lottieContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData,
    });

    return () => instance.destroy();
  }, []);

  return <div ref={lottieContainer} style={{ width: '100%', height: '100%' }} />;
};

export default AnimationLottie;