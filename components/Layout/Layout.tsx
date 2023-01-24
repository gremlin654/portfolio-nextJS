import { FC } from 'react';

import Footer from './Footer/Footer';
import Header from './Header/Header';

interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">{children}</main>
      <Footer />
      <div className="background-animation">
        <div id="ball-one"></div>
        <div id="ball-two"></div>
        <div id="ball-three"></div>
      </div>
    </>
  );
};

export default Layout;
