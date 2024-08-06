// pages/index.tsx
import Layout from './Components/Layout';
import Link from 'next/link';
const Home: React.FC = () => {
  return (
    <Layout>
      <div className='min-h-[80vh] border gap-4 border-transparent flex justify-center items-center'>
        <h1>Contact Page</h1>
        <p>Check out these awesome projects!</p>
        <Link className='px-2 py-1 gap-2 bg-[#693B93]' href={"/projects"}>Go to Projects</Link>
      </div>
    </Layout>
  );
};

export default Home;
