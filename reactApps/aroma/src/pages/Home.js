import React from 'react'
import  Main from '../components/Main'
import  HeroBanner from '../components/HeroBanner'
import  HeroCarousel from '../components/HeroCarousel'
import  TrendingProduct from '../components/TrendingProduct'
import  BlogSection from '../components/BlogSection'
import  SubscribeSection from '../components/SubscribeSection'
export default function Home() {
  return (
    <Main>
        <HeroBanner />
        <HeroCarousel />
        <TrendingProduct />
        <BlogSection />
        <SubscribeSection />
      </Main> 
  )
}
