import React from 'react';
import './intro.css';
import profile from '../../assets/profile1.png';
import hireme from '../../assets/hireme.png';
import mobileBackground from '../../assets/codimg.png';
import { Link } from 'react-scroll';

const Intro = () => {
    return (
    
        <section id="intro">
            <br />
            <br /><br />
          
            <br />
            <br />
            <br />
            <div className="introContent">
                <span className="hello"> Hello,</span>
                <span className="introText"> I'm<span className="introName"> Yasser</span></span>
                Frontend Web Developer
                <p className="introPara">I'm Yasser Mohamud,  a multifaceted student passionate about design and coding. <br /> frontend technologies. Currently a student, I'm embarking on a journey to become a
                    <br />With a focus on web design, UX design, and graphic design, I blend creativity with technical skills to craft engaging digital experiences. My journey as a student is fueled by a love for design and a drive to innovate in the digital landscape.
<br />
    


                </p>
                <Link><button className='btn'><img src={hireme} alt="hireme" className='btnImg' />Hire Me</button></Link>
                <img src={profile} alt="profile" className='bg' />
                <img src={mobileBackground} alt="mobile-background" className='mobile-bg' />
            </div>
        </section>
    );
}

export { Intro };