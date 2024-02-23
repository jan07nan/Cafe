import React from 'react'
import '../Components/Home.css'
import SideNav from './SideNav'
import Center from './Center'
import Corner from './Corner'

function Home() {
  return (
    <div className='main-div'>
      <div className='div1'><SideNav/></div>
      <div className='div2'><Center/></div>
      <div className='div3'><Corner/></div>
    </div>
  )
}

export default Home
