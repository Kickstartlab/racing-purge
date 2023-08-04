import React, { useEffect } from 'react'
import Footer from './Footer'
import Menu from './Menu'
import Slider from './Slider'
import top from '../assets/top.png';
import logo_1 from '../assets/logo_1.png';
import logo_2 from '../assets/logo_2.png';
import logo_3 from '../assets/logo_3.png';
import logo_4 from '../assets/logo_4.png';
import logo_5 from '../assets/logo_5.png';
import logo_6 from '../assets/logo_6.png';
import f_1 from '../assets/f_1.png';
import f_2 from '../assets/f_2.png';
import f_3 from '../assets/f_3.png';
import f_4 from '../assets/f_4.png';
import map from '../assets/map.png';
import car_1 from '../assets/car_1.png';
import car_2 from '../assets/car_2.png';
import feature from '../assets/feature.png';
import join from '../assets/join.png';
import token from '../assets/token.png';
import card_1 from '../assets/card_1.png';
import card_2 from '../assets/card_2.png';
import card_3 from '../assets/card_3.png';
import card_4 from '../assets/card_4.png';
import card_5 from '../assets/card_5.png';
import card_6 from '../assets/card_6.png';
import about from '../assets/about.png';
import left from '../assets/left.png';
import right from '../assets/right.png';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for style

export default function Home() {

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            easing: 'ease',
        });
        AOS.refresh();
    }, [])

    return (
        <div data-aos='fade-out' className="bg-black-100 text-white-100 font-exo overflow-hidden">

            {/* top section */}

            <img data-aos='fade-in' src={left} alt="Logo" className='absolute top-0 left-0 lg:block hidden' />

            <div className="lg:px-20 px-5 container mx-auto">
                <Menu />

                <div className="flex flex-col justify-center items-center lg:py-20 py-8 gap-y-6">

                    <div className='space-y-6'>
                        <h1 data-aos='fade-down' className='lg:text-4xl text-2xl font-semibold text-center'>
                            Get Yourself Ready to Feel The Rush
                        </h1>
                        <h3 className='lg:text-2xl text-xl font-semibold text-center'>
                            Porsche Mission E
                        </h3>
                        <div className='text-black-50 flex items-center justify-center gap-x-2'>
                            <svg width="14" height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.83337 8.33334H13.6667L6.16671 19.1667V11.6667H0.333374L7.83337 0.833344V8.33334Z" fill="#4177DC" />
                            </svg>
                            Special Edition
                        </div>
                    </div>

                    <img data-aos='zoom-in' src={top} alt='car'></img>

                    <div className='lg:flex flex-wrap items-end justify-center gap-x-12 lg:space-y-0 space-y-6'>

                        <div data-aos='fade-right' className='text-center space-y-2'>
                            <img src={f_1} alt='car' className='flex mx-auto pb-3'></img>

                            <h4 className='lg:text-xl text-lg font-semibold text-center'>
                                High Stakes
                            </h4>
                            <p className='text-black-50 text-sm'>TEMPERATURE</p>
                        </div>

                        <div data-aos='fade-right' className='text-center space-y-2'>
                            <img src={f_2} alt='car' className='flex mx-auto pb-3'></img>

                            <h4 className='lg:text-xl text-lg font-semibold text-center'>
                                All In
                            </h4>
                            <p className='text-black-50 text-sm'>MILEAGE</p>
                        </div>

                        <div data-aos='fade-left' className='text-center space-y-2'>
                            <img src={f_3} alt='car' className='flex mx-auto pb-3'></img>

                            <h4 className='lg:text-xl text-lg font-semibold text-center'>
                                Energetic
                            </h4>
                            <p className='text-black-50 text-sm'>AMBIANCE</p>
                        </div>

                        <div data-aos='fade-left' className='text-center space-y-2'>
                            <img src={f_4} alt='car' className='flex mx-auto pb-3'></img>

                            <h4 className='lg:text-xl text-lg font-semibold text-center'>
                                Win Big
                            </h4>
                            <p className='text-black-50 text-sm'>PLAY BIG</p>
                        </div>

                    </div>
                </div>

                <img data-aos='fade-in' src={right} alt="Logo" className='absolute right-0 lg:block hidden top-1/2' />

            </div>

            {/* about section */}

            <div id='about' className='lg:px-20 px-5 lg:pb-20 pb-6 container mx-auto'>
                <div className='lg:flex items-center justify-between space-y-6'>

                    <div data-aos='fade-right' className='lg:w-1/2'>
                        <img src={about} alt='about'></img>
                    </div>

                    <div data-aos='fade-left' className='lg:w-1/2'>
                        <h3 className='lg:text-4xl text-2xl font-semibold'>
                            What is Car Games?
                        </h3>
                        <p className='text-black-50 mb-6'>
                            Car Games is a multiplayer car racing game on Ethereum where randomly selected players compete against each other. The winner is paid out in ETH-the funds will come from the marketing wallet
                            Participants will be able to exit the game at any time
                        </p>
                        <a href='https://docs.cargame.tech/'>
                            <button className="bg-blue-100 hover:bg-black-100 border-2 border-blue-100 hover:text-blue-100 cursor-pointer py-3 px-6 rounded-sm">
                                Know more
                            </button>
                        </a>
                    </div>

                </div>
            </div>

            {/* slider section */}

            <div id='cars' className='lg:px-20 px-5 lg:pb-20 pb-6 container mx-auto'>

                <h3 className='lg:text-4xl text-2xl font-semibold text-center lg:mb-16 mb-6'>
                    Choose Your Favorite Car
                </h3>

                <Slider />

            </div>

            {/* tokenomics */}

            <div className='lg:px-20 px-5 lg:pb-20 pb-6 container mx-auto'>
                <h3 className='lg:text-4xl text-2xl font-semibold text-center'>
                    Tokenomics
                </h3>


                <div className='grid lg:grid-cols-3 grid-cols-1 items-center justify-between lg:mt-16 mt-6 lg:gap-36 gap-6'>

                    <div data-aos='slide-up' className='space-y-10'>
                        <div className='bg-blue-200 p-6 rounded-3xl lg:text-2xl text-xl font-semibold text-center'>
                            Total <br></br>
                            supply 100B
                        </div>

                        <div className='space-y-8'>
                            <p>90B of the total supply will
                                be supplied to uniswap
                            </p>

                            <p>
                                The remaining 10B tokens will be
                                used for Cex listings
                            </p>
                        </div>
                    </div>

                    <div data-aos='slide-down' className='space-y-10'>
                        <div className='bg-blue-200 p-6 rounded-3xl lg:text-2xl text-xl font-semibold text-center'>
                            TAXES:<br></br>
                            5/5
                        </div>

                        <div className='space-y-8'>
                            <p>
                                To prevent bots, the tax will be 30% in the first couple of minutes during the launch
                            </p>

                            <p>

                                Liquidity will be locked shortly after launch, and the contract will be renounced.
                            </p>
                        </div>
                    </div>

                    <div data-aos='slide-up' className='space-y-10'>
                        <div className='bg-blue-200 p-6 rounded-3xl lg:text-2xl text-xl font-semibold text-center'>
                            Token <br></br>
                            use case
                        </div>

                        <div className='space-y-8'>
                            <p>
                                Users will need to hold 0.1eth worth of $CRE to play the game
                            </p>

                            <p>
                                Staking (paid in eth)
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            <div className='lg:flex items-center justify-between lg:pl-20 pl-5'>

                <div data-aos='slide-up'>
                    <h4 className='lg:text-3xl text-xl font-semibold'>
                        What is planned?
                    </h4>

                    <div className='space-y-10 mt-8'>
                        <div className='flex items-center gap-x-2'>
                            <svg width="46" height="35" viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 17.505L15.3378 31L44 2" stroke="#4177DC" stroke-width="5" />
                            </svg>
                            <p className='lg:text-3xl text-lg'>Additional maps and more car models</p>
                        </div>

                        <div className='flex items-center gap-x-2'>
                            <svg width="46" height="35" viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 17.505L15.3378 31L44 2" stroke="#4177DC" stroke-width="5" />
                            </svg>
                            <p className='lg:text-3xl text-lg'>Audit</p>
                        </div>

                        <div className='flex items-center gap-x-2'>
                            <svg width="46" height="35" viewBox="0 0 46 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 17.505L15.3378 31L44 2" stroke="#4177DC" stroke-width="5" />
                            </svg>
                            <p className='lg:text-3xl text-lg'>Staking (paid in eth)</p>
                        </div>
                    </div>

                </div>

                <div data-aos='slide-left'>
                    <img src={token} alt='token' className=''></img>
                </div>

            </div>

            <p className='lg:w-9/12 px-5 text-center flex mx-auto mb-6 lg:text-lg'>In the near future, we will implement a risk-to-earn model where the protocol will collect a 10% fee from the players, which will be paid to stakers as a real yield.</p>

            {/* More Features */}

            <div className='lg:px-20 px-5 lg:pb-20 pb-6 container mx-auto'>
                <h3 className='lg:text-4xl text-2xl font-semibold text-center'>
                    More Features
                </h3>

                <div className='pt-12'>
                    <img data-aos='zoom-in' src={map} alt="map" className='lg:flex mx-auto absolute right-0 left-0 -mt-12 hidden' />

                    <div data-aos='slide-up' animation-delay='500' className='relative z-20 lg:mt-28'>
                        <img src={feature} alt="map" className='flex mx-auto' />
                    </div>
                </div>
            </div>

            {/* Featured Super Cars */}

            <div className='lg:px-20 px-5 lg:pb-20 pb-6 container mx-auto'>
                <h3 className='lg:text-4xl text-2xl font-semibold text-center'>
                    Featured Super Cars
                </h3>


                <div className='grid lg:grid-cols-3 grid-cols-1 lg:grid-rows-2 grid-rows-1 gap-8 items-center justify-items-center justify-center lg:mt-12 mt-6'>
                    <div data-aos='slide-down' className=''>
                        <img src={card_1} alt='card' className=''></img>
                        <img src={car_1} alt='card' className='absolute -mt-52 ml-6'></img>
                    </div>
                    <div data-aos='slide-down' className=''>
                        <img src={card_2} alt='card' className=''></img>
                    </div>
                    <div data-aos='slide-down'>
                        <img src={card_3} alt='card' className=''></img>
                    </div>
                    <div data-aos='slide-up'>
                        <img src={card_4} alt='card' className=''></img>
                    </div>
                    <div data-aos='slide-up'>
                        <img src={card_5} alt='card' className=''></img>
                    </div>
                    <div data-aos='slide-up' className=''>
                        <img src={card_6} alt='card' className=''></img>
                        <img src={car_2} alt='card' className='absolute -mt-52 ml-6'></img>
                    </div>
                </div>
            </div>

            {/* Join the Risk To win Big */}

            <div className='bg-join'>

                <div className='lg:px-20 px-5 lg:py-20 py-6 container mx-auto'>
                    <div className='lg:flex items-center justify-center gap-x-24 space-y-6'>
                        <div data-aos='fade-right' className='lg:w-1/3 space-y-8'>
                            <h3 className='lg:text-3xl text-xl font-semibold'>
                                Join the Risk To win Big
                            </h3>

                            <p className='text-black-50'>
                                Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis
                            </p>

                            <button className="bg-blue-100 hover:bg-black-100 border-2 border-blue-100 hover:text-blue-100 cursor-pointer py-3 px-6 rounded-sm">
                                Play Now
                            </button>
                        </div>

                        <div data-aos='slide-left' className=''>
                            <img src={join} alt='car'></img>
                        </div>
                    </div>
                </div>

            </div>

            {/*  */}

            <div data-aos='fade-up' className='lg:px-20 px-5 lg:py-16 py-6 container mx-auto'>
                <div className='flex flex-wrap items-center justify-center gap-x-12 space-y-4'>
                    <img src={logo_1} alt='logo'></img>
                    <img src={logo_2} alt='logo'></img>
                    <img src={logo_3} alt='logo'></img>
                    <img src={logo_4} alt='logo'></img>
                    <img src={logo_5} alt='logo'></img>
                    <img src={logo_6} alt='logo'></img>
                </div>
            </div>

            <Footer />
        </div>
    )
}
