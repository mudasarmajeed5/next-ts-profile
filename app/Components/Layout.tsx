// components/Layout.tsx
'use client'
import { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from './Footer';
import Socialicons from './AdditionalComponents/Socialicons';
import Navbar from './Navbar';
import Cursor from './AdditionalComponents/Cursor';
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Cursor/>
      <Socialicons/>
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
