import React from 'react'
import Title from '../components/title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Ved is your go-to online destination for all things fashion. We bring together the latest trends, timeless pieces, and sustainable options to offer a curated selection that suits every style and occasion.</p>
          <p>Explore Ved and discover the perfect pieces that reflect your unique style.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Our mission at Ved is to inspire confidence and individuality through fashion. We are committed to providing stylish, high-quality, and affordable clothing that empowers you to express your unique personality. We strive to create a shopping experience that is inclusive, sustainable, and effortless, making fashion accessible to everyone.</p>
        </div>
      </div>
      <div className='text-2xl py-3'>
         <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Trendy and Timeless:</b>
            <p className='text-gray-600'>We offer a perfect mix of the latest fashion trends and timeless pieces that never go out of style.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Quality You Can Trust:</b>
            <p className='text-gray-600'>Our clothes are made from high-quality materials, ensuring durability and comfort.</p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
            <b>Affordable Fashion:</b>
            <p className='text-gray-600'>Style shouldn’t break the bank. We provide fashionable clothing at prices you’ll love.</p>
          </div>
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About