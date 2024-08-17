// pages/index.tsx
'use client'
import { useRef } from 'react';
import Layout from './Components/Layout';
import Link from 'next/link';
import Button from './Components/AdditionalComponents/Button';
import Card from './Components/AdditionalComponents/Card';
import { useScroll, motion, useTransform } from 'framer-motion';
import "./globals.css"
import Projects from './Components/AdditionalComponents/Projects';
const Home: React.FC = () => {
  const lineStyle: React.CSSProperties = {
    width: `100%`,
    height: '2px',
    boxShadow: '0px 0px 5px var(--accent)',
    backgroundColor: 'var(--sky)',
    transition: 'width 0.3s ease-out',
    margin: '70px 0',
  };
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
        <div style={lineStyle}></div>
        <section className='w-4/5 lg:w-4/5 2xl:w-3/5 mx-auto'>
          <div className='relative my-5'>
            <div className='circle_gradient'></div>

            <div className='flex gap-4 my-4 flex-col md:flex-row'>
              <motion.div className='w-full' ref={ref1} style={{ scale: Card_Progress1, opacity: Card_Progress1 }}>
                <Card title='My Journey!'
                  description='My coding journey started with curiosity and has grown into a deep passion for solving complex problems through code.'
                  ImageLink="/images/StackImages/code.png" />
              </motion.div>
              <motion.div className='w-full' ref={ref2} style={{ scale: Card_Progress2, opacity: Card_Progress2 }}>
                <Card title='Designs? We have your Back.'
                  description='Futuristic designs and ideas inspire me to push boundaries and innovate with technology for a better tomorrow.'
                  ImageLink="/images/StackImages/coffee.png" />
              </motion.div>
            </div>

            <div className='flex gap-4 flex-col md:flex-row'>
              <motion.div className='w-full' ref={ref3} style={{ scale: Card_Progress3, opacity: Card_Progress3 }}>
                <Card title='MONGODB in the Backend'
                  description='I have 1 year of solid experience in MongoDB with Next.js, enabling smooth integration of databases into modern web applications.'
                  ImageLink="/images/StackImages/Database.png" />
              </motion.div>
              <motion.div className='w-full' ref={ref4} style={{ scale: Card_Progress4, opacity: Card_Progress4 }}>
                <Card title='Turning Ideas into Realities'
                  description='I have developed the frontend for DHA Gujranwala and created an engaging E-commerce website called EcoGlow'
                  ImageLink="/images/StackImages/Ideas.png" />
              </motion.div>
            </div>
          </div>
        </section>
        <section className='w-4/5 lg:w-4/5 2xl:w-3/5 mx-auto'>
          <Projects/>
          <Link href={"/about"}>About us</Link>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
