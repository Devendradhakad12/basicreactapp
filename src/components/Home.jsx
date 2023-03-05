import React from 'react'
import bg from "../assets/bg1.png"
import {AiFillGoogleCircle,AiFillAmazonCircle,AiFillYoutube,AiFillInstagram} from "react-icons/ai"
function Home() {
  return (
  <>
    <div className='home' id='home'>
     <main>
        <h1>
            Dev-Tech
        </h1>
        <p>solution to all your problems</p>
     </main>
    </div>
    <div className='home2'>
<img src={bg} alt="vg"/>
<div>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum, cumque.
        Lorem ipsum dolor sit amet.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, doloribus.
    </p>
</div>
    </div>

    <div className="home3" id='about'>
<div>
    <h1>Who we are?</h1>
    <p>

      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis error iste totam esse voluptatibus temporibus eligendi id, illum possimus atque animi, laudantium, aliquid nesciunt voluptates excepturi culpa porro nobis! Voluptate
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque iure ipsa debitis! Qui recusandae distinctio aliquam voluptates adipisci numquam, ducimus, provident delectus minima maxime voluptatum, totam illo natus aspernatur consequatur  
    </p>
</div>
    </div>

    <div className="home4" id='brand'>

        <div>
        <h1>
            Brands
        </h1>
        <article>
            <div style={{animationDelay:"0.3s"}}>
<AiFillGoogleCircle/>
<p>Google</p>
            </div>

            <div style={{animationDelay:"0.5s"}}>
<AiFillInstagram/>
<p>Instagram</p>
            </div>

            <div style={{animationDelay:"0.7s"}}>
<AiFillAmazonCircle/>
<p>Amazon</p>
            </div>

            <div style={{animationDelay:"1s"}}>
<AiFillYoutube/>
<p>Youtube</p>
            </div>
        </article>
        </div>
    </div>
  </>
  )
}

export default Home
