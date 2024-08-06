// pages/projects.tsx
import Layout from '../Components/Layout';
import Link from 'next/link';
const Projects: React.FC = () => {
  return (
    <Layout>
      <div className='flex justify-center items-center min-h-[80vh] gap-4'>
        <h1>Projects Page</h1>
        <p>Check out these awesome projects!</p>
        <Link className='px-2 py-1 gap-2 bg-[#693B93]' href={"/about"}>About Me</Link>
      </div>
    </Layout>
  );
};

export default Projects;
