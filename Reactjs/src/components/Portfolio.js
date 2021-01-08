import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Portfolio = () =>{

  const [portfolio, setPortfolio] = useState([]);
  
  
  useEffect(
   ()=>{
    axios.get('http://localhost/web-api/api/portfolio').then((r)=>{
      setPortfolio(r.data)
      
    })
   }
  )
  
  return (
    <div>
<div id="breadcrumb">
  <div className="container">
    <div className="breadcrumb">
      <li><a href="index.html">Home</a></li>
      <li>Portfolio</li>
    </div>
  </div>
</div>
<section id="portfolio">
  <div className="container">
    <div className="center">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt</p>
    </div>
    <ul className="portfolio-filter text-center">
      <li><a className="btn btn-default active" href="#" data-filter="*">All Works</a></li>
      <li><a className="btn btn-default" href="#" data-filter=".bootstrap">Creative</a></li>
      <li><a className="btn btn-default" href="#" data-filter=".html">Photography</a></li>
      <li><a className="btn btn-default" href="#" data-filter=".wordpress">Web Development</a></li>
    </ul>
    {/*/#portfolio-filter*/}
  </div>
  <div className="container">
    <div className>
      <div className="portfolio-items">



{portfolio.map((i)=>(
  <div className="portfolio-item apps col-xs-12 col-sm-4 col-md-3">
  <div className="recent-work-wrap">
    <img className="img-responsive" src={"http://localhost/web-api/uploads/images/portfolio/full/"+i.photo} alt="" />
    <div className="overlay">
      <div className="recent-work-inner">
        <h3><a href="#">{i.title}</a></h3>
        <p>{i.description}</p>
        <a className="preview" href="images/portfolio/full/item1.png" rel="prettyPhoto"><i className="fa fa-eye" /> View</a>
      </div>
    </div>
  </div>
</div>

  
))}

        

        
        {/*/.portfolio-item*/}
        
        {/*/.portfolio-item*/}
      
        {/*/.portfolio-item*/}
      </div>
    </div>
  </div>
</section>
{/*/#portfolio-item*/}
<footer>
  <div className="footer">
    <div className="container">
      <div className="social-icon">
        <div className="col-md-4">
          <ul className="social-network">
            <li><a href="#" className="fb tool-tip" title="Facebook"><i className="fa fa-facebook" /></a></li>
            <li><a href="#" className="twitter tool-tip" title="Twitter"><i className="fa fa-twitter" /></a></li>
            <li><a href="#" className="gplus tool-tip" title="Google Plus"><i className="fa fa-google-plus" /></a></li>
            <li><a href="#" className="linkedin tool-tip" title="Linkedin"><i className="fa fa-linkedin" /></a></li>
            <li><a href="#" className="ytube tool-tip" title="You Tube"><i className="fa fa-youtube-play" /></a></li>
          </ul>
        </div>
      </div>
      <div className="col-md-4 col-md-offset-4">
        <div className="copyright">
          © Company Theme. All Rights Reserved.
          <div className="credits">
            {/*
        All the links in the footer should remain intact.
        You can delete the links only if you purchased the pro version.
        Licensing information: https://bootstrapmade.com/license/
        Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=Company
      */}
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a></div>
        </div>
      </div>
    </div>
    <div className="pull-right">
      <a href="#home" className="scrollup"><i className="fa fa-angle-up fa-3x" /></a>
    </div>
  </div>
</footer>
</div>

)
}

export default Portfolio
