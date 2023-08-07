import React from 'react'
import './zen.css'



function Zen(){

return(

<div>

  <title>CSS Zen Garden: The Beauty of CSS Design</title>
  <div className="container">
    <header className="Top">
      <div className="block">
        <img className="img1" src="http://www.csszengarden.com/214/enso.svg" />
        <div className="headerText">        
          <h1>CSS ZEN Garden</h1>
          <h2 id='under-title'>The Beauty of <h2 className='dotted-underline'>CSS</h2> design.</h2>
        </div> 
      </div>        
    </header>
    <div className="nav">
      <h3>View All Designs</h3>
      <h3>►</h3>
    </div>
    <ul id="list1">
      <li className="line">
        <h3 href="#">Mid Century Modern</h3>
        <p>by <a href="#">Andrew Lohman</a></p>
      </li>
      <li className="line">
        <h3 href="#">Garments</h3>
        <p>by <a href="#">Dan Mall</a></p>
      </li>
      <li className="line">
        <h3 href="#">Steel </h3>
        <p>by<a href="#">Steffen Knoeller</a></p>
      </li>
      <li className="line">
        <h3 href="#">Apothecary</h3>
        <p>by<a href="#">Trent Walton</a></p>
      </li>
      <li className="line">
        <h3 href="#">Screen Filler</h3>
        <p>by<a href="#">Elliot Jay Stocks</a></p>
      </li>
      <li className="line">
        <h3 href="#">Fountain Kiss</h3>
        <p>by<a href="#">Jeremy Carlson</a></p>
      </li>
      <li className="line">
        <h3 href="#">A Robot Named Jimmy</h3>
        <p>by<a href="#">meltmedia</a></p>
      </li>
      <li className="none">
        <h3 href="#">Verde Moderna</h3>
        <p>by<a href="#">Dave Shea</a></p>
      </li>
    </ul>
    <div className="par1">
      <p>A demonstration of what can be accomplished through CSS-based design. Select any style sheet from the list to load it into this page.</p>
      <br />
      <p>Download the example<span className=" arrows"><span className="ab">⭳</span><a href="#">HTML FILE</a></span> and <span className="arrows"><span className="ab">⭳</span><a href="#">CSS FILE</a></span></p>
      <h3>The Road to Enlightenment</h3>
      <p>Littering a dark and dreary road lay the past relics of browser-specific tags, 
        incompatible DOMs, broken CSS support, and abandoned browsers.</p>
      <p> We must clear the mind of the past. Web enlightenment has been achieved thanks 
        to the tireless efforts of folk like the W3C, WaSP, and the major browser creators.</p>
      <p>The CSS Zen Garden invites you to relax and meditate on the important lessons of the masters. Begin to see with clarity. Learn to use 
        the time-honored techniques in new and invigorating fashion. Become one with the web</p>
      <h3>So What is This About?</h3>
      <p>There is a continuing need to show the power of CSS. The Zen Garden aims to excite, inspire, and encourage participation. To begin, view some of the existing designs in the list. 
        Clicking on any one will load the style sheet into this very page. The HTML remains the same, 
        the only thing that has changed is the external CSS file. Yes, really.</p>
      <p>CSS allows complete and total control over the style of a hypertext document. The only way this can be illustrated in a way that gets people excited is by demonstrating what it can truly be, once the reins are placed in the hands of those able to create beauty from structure. Designers 
        and coders alike have contributed to the beauty of the web; we can always push it further.</p>
    </div>
    <div className="backdrop2" />
    <div className="par3">
      <h3>Participation</h3>
      <p>Strong visual design has always been our focus. You are modifying this page, so strong CSS skills are necessary too, but the example files are commented well enough that even CSS novices can use them as starting points. 
        Please see the <span> <a href="#"> CSS Resource Guide</a></span> for advanced tutorials and tips on working with CSS.</p>
      <p>You may modify the style sheet in any way you wish, but not the HTML. This may seem daunting at first if you've never 
        worked this way before, but follow the listed links to learn more, and use the sample files as a guide.</p>
      <p>Download the sample <span><a href="#">HTML</a></span> and <span><a href="#">
            CSS</a></span> to work on a copy locally. Once you have completed your masterpiece (and please, don't submit half-finished work) upload your CSS file to a web server under your control. 
        <span><a href="#">Send us a link</a></span> to an archive of that file and all associated assets, and if we choose to use it we will download it and place it on our server   
      </p>
      <h3>Benefits</h3>
      <p>
        Why participate? For recognition, inspiration, and a resource we can all refer to showing people 
        how amazing CSS really can be. This site serves as equal parts inspiration for those working on the web today, 
        learning tool for those who will be tomorrow, and gallery of future techniques we can all look forward to.
      </p>
    </div>
    <div className="sideLinks">
      <div>
        <h3 id="linetop">VIEW THIS DESIGN’S CSS</h3>
      </div>
      <div>
        <h3>CSS RESOURCES</h3>
      </div>
      <div>
        <h3>FAQ</h3>
      </div>
      <div>
        <h3>SUBMIT A DESIGN</h3>
      </div>
      <div>
        <h3 className="last">TRANSLATIONS</h3>
      </div>
    </div>
    <div className="backdrop4" />
    <div className="par4">
      <h3>Requirements</h3>
      <p>Where possible, we would like to see mostly CSS 1 &amp; 2 usage. CSS 3 &amp; 4 should be limited to widely-supported elements only, or strong fallbacks should be provided. The CSS Zen Garden is about functional, practical CSS and not the latest bleeding-edge tricks 
        viewable by 2% of the browsing public. The only real requirement we have is that your CSS validates.</p>
      <p>Luckily, designing this way shows how well various browsers have implemented CSS by now. When sticking to the guidelines you should see fairly consistent results across most modern browsers. Due to the sheer number of user agents on the web these days — especially when you factor in mobile — pixel-perfect 
        layouts may not be possible across every platform. That's okay, 
        but do test in as many as you can. Your design should work in at least IE9+ and the latest Chrome, Firefox, iOS and Android browsers (run by over 90% of the population).</p>
      <p>We ask that you submit original artwork. Please respect copyright laws. Please keep objectionable material to a minimum, and try to incorporate unique 
        and interesting visual themes to your work. We’re well past the point of needing another garden-related design.</p>
      <p>This is a learning exercise as well as a demonstration. You retain full copyright on your graphics (with limited exceptions, <span><a href="#" target="_blank">submission guidelines</a></span>), but we ask you release your CSS under a Creative Commons 
        license identical to the one <span> <a href="#">one on this site</a></span> so that others may learn from your work</p>
    </div>
    <div className="par5">
      <h3>By <span><a href="#">Dave Shea</a></span>. Bandwidth graciously donated by <span><a href="#">mediatemple</a></span>. Now available: <span> <a href="#">Zen Garden,the book</a>
        </span>.</h3>
    </div>
    <footer>
      <div className="icons">
        <div> 
          <a href="#"><img className="img3" src="http://cdn.onlinewebfonts.com/svg/img_43757.png" /></a>
        </div>
        <div> 
          <a href="#"><img className="img3" src="https://cdn-icons-png.flaticon.com/512/25/25462.png" /></a>
        </div>
        <div> 
          <a href="#"><img className="img3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Cc.logo.circle.svg/1200px-Cc.logo.circle.svg.png" /></a> 
        </div>
        <div> 
          <a href="#"><img className="img3" src="https://cdn.icon-icons.com/icons2/2248/PNG/512/wheelchair_accessibility_icon_137024.png" /></a>
        </div>
        <div> 
          <a href="#"><img className="img3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png" /></a>
        </div>
      </div>
    </footer>
  </div>
</div>
  )
}
export default Zen

// img1"http://cdn.onlinewebfonts.com/svg/img_43757.png"
// img2"https://cdn-icons-png.flaticon.com/512/25/25462.png"
// img3"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Cc.logo.circle.svg/1200px-Cc.logo.circle.svg.png"
// img4"https://cdn.icon-icons.com/icons2/2248/PNG/512/wheelchair_accessibility_icon_137024.png"
// img5"https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/2048px-Octicons-mark-github.svg.png"