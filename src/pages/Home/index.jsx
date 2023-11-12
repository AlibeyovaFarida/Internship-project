import React from 'react'
import Header from '../../layout/Header'
import Navbar from '../../layout/Navbar'
import Contact from '../../components/Contact'
import HomePreview from '../../components/HomePreview'
import Products from '../../components/Products'
import Advertisements from '../../components/Advertisements'
import SkinCareRoutine from '../../components/SkinCareRoutine'
import Banners from '../../components/Banners'
import Advantages from '../../components/Advantages'
import Footer from '../../layout/Footer'
import OpenBar from '../../components/OpenBar'
const Home = ({ isShowMenu, setIsShowMenu, isOpenBar, setIsOpenBar }) => {
  return (
    <div>
      <Header isOpenBar={isOpenBar} setIsOpenBar={setIsOpenBar} />
      <OpenBar isOpenBar={isOpenBar} setIsOpenBar={setIsOpenBar} />
      <Navbar isShowMenu={isShowMenu} setIsShowMenu={setIsShowMenu} />
      <Contact />
      <HomePreview />
      <Products />
      <Advertisements />
      <Banners />
      <SkinCareRoutine />
      <Advantages />
      <Footer />
    </div>
  );
};

export default Home