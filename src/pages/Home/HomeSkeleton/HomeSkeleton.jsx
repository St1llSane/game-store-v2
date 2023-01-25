import React from 'react'
import ContentLoader from 'react-content-loader'
import './homeskeleton.scss'

const HomeSkeleton = (props) => (
  <ContentLoader
    className="home-skeleton"
    speed={1.7}
    width={290}
    height={366}
    backgroundColor="#35383a"
    foregroundColor="#2d2f31"
    {...props}
  >
    <rect className='home-skeleton__pic' x="0" y="0" rx="20" ry="20" width="290" height="162" />
    <rect className='home-skeleton__title' x="15" y="175" rx="10" ry="10" width="260" height="28" />
    <rect className='home-skeleton__genre' x="15" y="215" rx="10" ry="10" width="80" height="20" />
    <rect className='home-skeleton__genre' x="105" y="215" rx="10" ry="10" width="80" height="20" />
    <rect className='home-skeleton__genre' x="195" y="215" rx="10" ry="10" width="80" height="20" />
    <rect className='home-skeleton__price' x="14" y="316" rx="15" ry="15" width="100" height="24" />
    <rect className='home-skeleton__buy' x="164" y="310" rx="20" ry="20" width="111" height="35" />
  </ContentLoader>
)

export default HomeSkeleton
