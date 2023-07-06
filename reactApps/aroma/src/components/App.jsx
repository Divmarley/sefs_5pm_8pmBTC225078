/** @format */

import Header from './Header';
import HeroBanner from './HeroBanner';
import HeroCarousel from './HeroCarousel';
import Main from './Main';
import TrendingProduct from './TrendingProduct';
import BlogSection from './BlogSection';
import SubscribeSection from './SubscribeSection';
import Footer from './Footer';
export default function App() {
  return (
    <>
      <Header />
      <Main>
        <HeroBanner />
        <HeroCarousel />
        <TrendingProduct />
        <BlogSection />
        <SubscribeSection />
      </Main> 
      <Footer />
    </>
  );
}
