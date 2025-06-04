import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function TwinklingStars({ count, ...props }) {
  const ref = useRef();
  
  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime() * props.speed;
      ref.current.rotation.x = Math.cos(t / 2) / 12;
      ref.current.rotation.y = Math.sin(t / 4) / 12;
    }
  });

  return <Stars ref={ref} count={count} {...props} />;
}

export default function StarBackground() {
  return (
    <div className="fixed inset-0 -z-20" style={{ background: '#000' }}>
      <Canvas>
        <TwinklingStars 
          radius={100}
          depth={50}
          count={2000}
          factor={8}
          saturation={1}
          fade
          speed={0.6}
        />
        <TwinklingStars 
          radius={90}
          depth={45}
          count={1500}
          factor={7}
          saturation={1}
          fade
          speed={0.8}
        />
        <TwinklingStars 
          radius={80}
          depth={40}
          count={1500}
          factor={6}
          saturation={0.8}
          fade
          speed={1}
        />
      </Canvas>
    </div>
  );
} 