// pages/index.tsx
import Layout from './Components/Layout';
import Link from 'next/link';
import "./globals.css"
const Home: React.FC = () => {
  return (
    <Layout>
      <div className='min-h-[80vh]'>
        <div className="hero_section w-4/5 lg:w-3/5 mx-auto">
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
                  <Link href={"/contact"} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500  group-hover:from-purple-600 group-hover:to-blue-500">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-white bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Get in Touch
                    </span>
                  </Link>
                  <Link href={"/projects"} className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500">
                    <span className="relative px-5 py-2.5 transition-all ease-in duration-75 text-white bg-gray-900 rounded-md group-hover:bg-opacity-0">
                      Projects
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <p>
              Im a passionate developer with a knack for creating seamless user experiences and powerful backend solutions. Lets build something amazing together!
            </p>

          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
