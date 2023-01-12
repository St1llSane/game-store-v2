import React from "react"
import ContentLoader from "react-content-loader"

const HomeItemSkeleton = (props) => (
  <ContentLoader 
    speed={1.7}
    width={290}
    height={366}
    viewBox="0 0 290 366"
    backgroundColor="#35383a"
    foregroundColor="#2d2f31"
    {...props}
  >
    <rect x="0" y="0" rx="20" ry="20" width="290" height="162" /> 
    <rect x="164" y="310" rx="20" ry="20" width="111" height="35" /> 
    <rect x="14" y="316" rx="15" ry="15" width="100" height="24" /> 
    <rect x="15" y="175" rx="10" ry="10" width="260" height="28" /> 
    <rect x="15" y="215" rx="10" ry="10" width="80" height="20" />
    <rect x="105" y="215" rx="10" ry="10" width="80" height="20" />
    <rect x="195" y="215" rx="10" ry="10" width="80" height="20" />
  </ContentLoader>
)

export default HomeItemSkeleton