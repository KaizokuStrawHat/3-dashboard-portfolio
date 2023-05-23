import React, { useState, useEffect, useRef } from 'react'
import './App.css';

/*

Welcome Page -- 'click sidebar elements'

Sidebar element #1 - Project and Skills:
-display of known tech AND grid project overview
-github profile
-resume history
-MARKET MYSELF AS I AM A PRODUCT: personal skills, work experience, active on online communities () = up to date with latest tech

Sidebar element #2 - Myles Gideon Prospero
-- Self-study journey
-- react.js own notes -- copy roadmap.sh and do scroll for scroll 
-- project showcase in cards + carousel format -- when project card click = show description and date 
-- have coming soon cards
-- I am licensed insurance broker with Greatway Financial Inc. {currently inactive}
-- my history of self-studying programming (highschool - uni - self)

Sidebar element #3 - Page Stats
-- unique visitors
-- total visits
-- 'you are the _th unique visitor on my website'

Sidebar element #4 - MORE ABOUT ME
-- playground | wave water clipart w/ white crisp to it
-- mbti, big 5, hobbies
-- born and lived in Manila for 13 years, moved to Canada and been living here for 7 years
- me and internet
- shaped me who I am: hobbies, mindset (some markettable mindset to employers), 

Sidebar element #5 - Socials -- hovers = shows icons and handle name -- can be clickable to direct to website


TO DO:

! use react-router for project grid

! make container - 3 items - centre 

! Project carousel -- weatherapi project -- unknown1 -- unknown2
! When projects are clicked -- new page 

! Carousel -- toggles between -- testimonials and project
! Home button -- show welcome page -- show that its selected through borders
! Dark / Light theme mode -- library/packages or vanilla?
! Toggle button -- between library OR vanilla  
can toggle any part of website and still stay on that website
list what components can vanilla and library -- only render those components on button toggle
icons are ice cream and package/library

! change weather api project -- loading icon -- then only display when data is received
! put a plain html code when data is missing from my data formatted -- 'something is wrong -- please contact the developer'

! Plan content layout for sidebar element #1 -- replace divs with names
! Plan content layout sidebar element #2 -- replace divs with names

! Third Party integration -- discord / linkedin
-- show instagram video -- show notion learning journey -- show github 

! Google Analytics -- page stats
! Trello -- my step by step on developing this website
! Newsletter subscription service -- find which ones best: MailChimp, Sendinblue, GetResponse

! Why put so much in a personal portfolio -- because I need to compensate for lack of projects











* keyboard shortcuts
left and right for sidebar navigation
up and down for main content navigation
detect if user is on mobile or pc 

* Calendly --
* ChatBot -- but not a chatbot service -- my manual flowchart idea




? Enable infinite scrolling on main
* NPM -- showcase open source contributions
* Search functionality - Conditional rendering -- if user types: show no result OR show results
-- but how do I make grid items appear, in order? in what order? alphabetical + does it fit due to row-column spanning?
-- user can click on grid items: directs them to the sidebar page and changes directory name
-- but how do I make sure grid items do not conflict each other due to their row-column spanning?


* Radial charts
* Integrate Instagram to show my dance posts
* Integrate LinkedIn and Instagram 
* Circle Progress Bar Animation -- use vanilla css 
* Circle Progress Bar Animation 2 -- use material UI
* Version tracker -- old to current -- ask user if they are here for quick overview of portfolio or not
* Collapse Component
* Masonry Grid
* Dropdown -- the options detaches and flys away from dropdown button
* Conditional rendering -- collapse/accordions
* Conditional rendering -- on main content: switch between normal grid or  masonry grid
* Conditional rendering -- infinite scrolling for react.js self study
* ? When projects are clicked instead of directing users into a different tab / page -- it instead becomes responsive and shows on personal portfolio
* Customizable Dashboard 
* Reloading first time in a session -- show something like animation 
have cooldowns to reset to ordinary website





*/

export default function App()
{
  const [ButtonClicked, setButtonClicked] = useState(null);
  const handleClick = (index) => {
    setButtonClicked(index);
  }
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.cu)
    console.log('test1')
  }, [ButtonClicked])

  return (
    <div className='outer-layer'>
      <div className='sidebar'>
        <button className={`sidebar-element ${ButtonClicked === 0 ? 'sidebar-element-clicked': ''}`} onClick={() => handleClick(0)}>
           <div className='sidebar-icon'></div>
           <p className='sidebar-text'>GIDEON PROSPERO</p> 
        </button>
        <button className={`sidebar-element ${ButtonClicked === 1 ? 'sidebar-element-clicked': ''}`} onClick={() => handleClick(1)}>
           <div className='sidebar-icon'></div>
           <p className='sidebar-text'>MORE ABOUT ME</p>
        </button>
        <button className={`sidebar-element ${ButtonClicked === 2 ? 'sidebar-element-clicked': ''}`} onClick={() => handleClick(2)}>
           <div className='sidebar-icon'></div>
           <p className='sidebar-text'>PAGE STATS</p>
        </button>
        <button className={`sidebar-element ${ButtonClicked === 3 ? 'sidebar-element-clicked': ''}`} onClick={() => handleClick(3)}>
           <div className='sidebar-icon'></div>
           <p className='sidebar-text'>SOCIALS</p>
        </button>
        
      </div>
      <div className='main'>
        { ButtonClicked === 1 ? (<div className='content-grid'>
          <div className='grid-item grid-item-1'></div>
          <div className='grid-item grid-item-2'></div>
          <div className='grid-item grid-item-3'></div>
          <div className='grid-item grid-item-4'></div>
          <div className='grid-item grid-item-5'></div>
          <div className='grid-item grid-item-6'></div>
          <div className='grid-item grid-item-7'></div>
          <div className='grid-item grid-item-8'></div>
          <div className='grid-item grid-item-9'></div>
          <div className='grid-item grid-item-10'></div>
          <div className='grid-item grid-item-11'></div>
          <div className='grid-item grid-item-12'></div>
          <div className='grid-item grid-item-13'></div>
          <div className='grid-item grid-item-14'></div>
        </div>) : <div></div>}
        { ButtonClicked === 2 ? (<div className='content-grid content-grid-carousel'>
            <button className='carousel-item'>Weather API</button>
            <button className='carousel-item'>LOCKED</button>
            <button className='carousel-item'>LOCKED</button>
        </div>) : <div></div>}
      </div>
    </div>
  )
}
