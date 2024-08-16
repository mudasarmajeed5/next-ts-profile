// components/Layout.tsx
'use client'
import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './Footer';
import Socialicos from './AdditionalComponents/SocialIcos';
import Navbar from './Navbar';
import Cursor from './AdditionalComponents/Cursor';
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Cursor/>
      <Socialicos/>
      <Navbar/>
      <div>
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.4 }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
      <Footer/>
    </div>
  );
};

export default Layout;
