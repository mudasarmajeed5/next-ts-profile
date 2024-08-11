// pages/index.tsx
'use client'
import { useRef } from 'react';
import Layout from './Components/Layout';
import Link from 'next/link';
import Button from './Components/AdditionalComponents/Button';
import Card from './Components/AdditionalComponents/Card';
import { useScroll, motion, useTransform } from 'framer-motion';
import "./globals.css"
import ScrollLine from './Components/AdditionalComponents/ScrollLine';
const Home: React.FC = () => {
  
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  // Set up scroll progress for each card
  const { scrollYProgress: scrollYProgress1 } = useScroll({ target: ref1, offset: ["0 1", "1.33 1"] });
  const { scrollYProgress: scrollYProgress2 } = useScroll({ target: ref2, offset: ["0 1", "1.33 1"] });
  const { scrollYProgress: scrollYProgress3 } = useScroll({ target: ref3, offset: ["0 1", "1.33 1"] });
  const { scrollYProgress: scrollYProgress4 } = useScroll({ target: ref4, offset: ["0 1", "1.33 1"] });
  const Card_Progress1 = useTransform(scrollYProgress1, [0, 1], [0.8, 1]);
  const Card_Progress2 = useTransform(scrollYProgress2, [0, 1], [0.8, 1]);
  const Card_Progress3 = useTransform(scrollYProgress3, [0, 1], [0.8, 1]);
  const Card_Progress4 = useTransform(scrollYProgress4, [0, 1], [0.8, 1]);

  return (
    <Layout>
      <div>
        <section className='w-4/5 lg:w-3/5 mx-auto'>
          <div className="hero_section ">
            <div className="flex items-start my-10 flex-col gap-8">
              <div className="name my-5 text-2xl">Hello! Mudassar Majeed here</div>
              <div className="flex md:flex-row flex-col gap-8">
                <div className='herodiv mx-auto'>
                  <img src="/svgs/HeroPage Vector.svg" className='m-5 heroimage' width={200} alt="" />
                </div>
                <div className="Profession flex flex-col gap-2">
                  <span className="text-xl" style={{ color: '#00ccff' }}>A full stack Web developer who</span>
                  <span className="text-md"> loves to create amazing Web Applications.</span>
                  <span className="text-md"> Currently mastering the MERN stack.</span>
                  <div className="flex gap-4 mt-5">
                    <Link href={"/projects"}>
                      <Button text="Get in Touch" ButtonStyle={"from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500"} />
                    </Link>
                    <Link href={"/projects"}>
                      <Button text="Projects" ButtonStyle={"from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500"} />
                    </Link>
                  </div>
                </div>
              </div>
              <p>
                Im a passionate developer with a knack for creating seamless user experiences and powerful backend solutions. Lets build something amazing together!
              </p>
            </div>
          </div>
        </section>
        <ScrollLine/>
        <section className='w-4/5 lg:w-3/5 mx-auto'>
          <div className='relative my-5'>
            <div className='circle_gradient'></div>

            <div className='flex gap-4 my-4 flex-col md:flex-row'>
              <motion.div ref={ref1} style={{ scale: Card_Progress1, opacity: Card_Progress1 }}>
                <Card title='CIB on the Mobile'
                  description='Take your client onboard seamlessly by our amazing
                tool of digital onboard process.'
                  ImageLink="/images/StackImages/code.png" />
              </motion.div>
              <motion.div ref={ref2} style={{ scale: Card_Progress2, opacity: Card_Progress2 }}>
                <Card title='CIB on the PC'
                  description='Take your client onboard seamlessly by our amazing
                tool of digital onboard process.'
                  ImageLink="/images/StackImages/coffee.png" />
              </motion.div>
            </div>

            <div className='flex gap-4 flex-col md:flex-row'>
              <motion.div ref={ref3} style={{ scale: Card_Progress3, opacity: Card_Progress3 }}>
                <Card title='CIB on the Mobile'
                  description='Take your client onboard seamlessly by our amazing
                tool of digital onboard process.'
                  ImageLink="/images/StackImages/Database.png" />
              </motion.div>
              <motion.div ref={ref4} style={{ scale: Card_Progress4, opacity: Card_Progress4 }}>
                <Card title='Turning Ideas into Realitites'
                  description='Take your client onboard seamlessly by our amazing
                tool of digital onboard process.'
                  ImageLink="/images/StackImages/Ideas.png" />
              </motion.div>
            </div>
          </div>
        </section>
        <section className='w-4/5 lg:w-3/5 mx-auto'>

        </section>
      </div>
    </Layout>
  );
};

export default Home;
