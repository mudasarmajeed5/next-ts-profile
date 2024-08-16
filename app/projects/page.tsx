// pages/projects.tsx
'use client'
import './projects.css'
import Layout from '@/Components/Layout';
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue
} from "framer-motion";


function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }: { id: number }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section id='imageid'>
      <div ref={ref}>
        <img className='object-cover object-top portfolio' src={`/projects/${id}.png`} alt="Portfolio" />
      </div>
      <motion.h2 className='text-5xl font-thin headingID' style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}
const Projects: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  return (
    <Layout>
      <div className="min-h-screen bg-[--background]">
      {[1, 2, 3, 4, 5].map((image) => (
        <Image key={image} id={image} />
      ))} 
      <motion.div className="progress" style={{ scaleX }} />
      </div>
    </Layout>
  );
};

export default Projects;
