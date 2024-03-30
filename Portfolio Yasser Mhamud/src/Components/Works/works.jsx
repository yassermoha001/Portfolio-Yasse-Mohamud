import React from 'react';
import './works.css';
import UIdesign from "../../assets/ui-design.png";
import Currencyconverter from "../../assets/currencyconverter.png";
import temperatureconverter from "../../assets/temperatureconverter.png";
import productlandingpage from "../../assets/productlandingpage.png";
import productlandingpage2 from "../../assets/product-landing-page2.png";
import TodoList from "../../assets/TodoListNext.png";
import cottoncanva from "../../assets/cottoncanva.jpg";
import cottoncanva1 from "../../assets/cottoncanva1.png";
import Restro from "../../assets/Restro.png";

const Portfolio = () => {
    return (
        <section id='portfolio'>

            <h5>My Recent Work</h5>
            <h2>Projects</h2>

            <div className="portfolio_container">


                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={Restro} alt="Currencyconverter" className='project_img' />
                    </div>
                    <h3>Restaurant App</h3>
                    <button className='btnTools'>MERN</button>
                    <button className='btnTools'>Vercel</button>
                    <button className='btnTools'>Render</button> <br />
                    <button className='btn1'>
                        <a href="" target='_blank'>Live Demo</a>
                    </button>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={Currencyconverter} alt="Currencyconverter" className='project_img' />
                    </div>
                    <h3>Currency Converter</h3>
                    <button className='btnTools'>React</button>
                    <button className='btnTools'>Web App</button>
                    <button className='btnTools'>Tailwind CSS</button> <br />
                    <button className='btn1'>
                        <a href="" target='_blank'>Live Demo</a>
                    </button>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={temperatureconverter} alt="" className='project_img' />
                    </div>
                    <h3>Temperature Converter</h3>
                    <button className='btnTools'>React</button>
                    <button className='btnTools'>Web App</button>
                    <button className='btnTools'>Tailwind CSS</button> <br />
                    <button className='btn1'>
                        <a href="" target='_blank'>Live Demo</a>
                    </button>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={productlandingpage} alt="" className='project_img' />
                    </div>
                    <h3>Product Landing Page</h3>
                    <button className='btnTools'>React</button>
                    <button className='btnTools'>Web App</button> <br />
                    <button className='btn1'>
                        <a href="" target='_blank'>Live Demo</a>
                    </button>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={productlandingpage2} alt="" className='project_img' />
                    </div>
                    <h3>Product Landing Page 2</h3>
                    <button className='btnTools'>React</button>
                    <button className='btnTools'>Web App</button> <br />
                    <button className='btn1'>
                        <a href="" target='_blank'>Live Demo</a>
                    </button>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={TodoList} alt="" className='project_img' />
                    </div>
                    <h3>Todo List App</h3>
                    <button className='btnTools'>Typescript</button>
                    <button className='btnTools'>Tailwind CSS</button>
                    <button className='btnTools'>Next.js</button>
                    <button className='btnTools'>Web App</button> <br />
                    <button className='btn1'>
                        <a href="" target='_blank'>Live Demo</a>
                    </button>
                </article>

                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={cottoncanva1} alt="" className='project_img' />
                    </div>
                    <h3>cottoncanva</h3>
                    <button className='btnTools'>Wordpress</button>
                    <button className='btnTools'>Ecommerce App</button>
                    <button className='btnTools'>CMS</button> <br />
                    <button className='btn1'>
                        <a href="" target='_blank'>Live Demo</a>
                    </button>
                </article>
            </div>
        </section>
    )
}
export default Portfolio;