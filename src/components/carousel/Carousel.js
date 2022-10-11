
import clock from '../../resources/icons/clock.svg'
import ok from '../../resources/icons/ok.svg'
import euro from '../../resources/icons/euro.svg'

import {Swiper, SwiperSlide} from 'swiper/react'

import '../../style/swiper-bundle.css'


const Carousel = () => {

    const classesChange = (el, els, i) => {
        el.classList.remove( 'my-4','pt-4', 'h-[233px]', 'xs:-z-20','xs:z-20')
        el.classList.add('px-4', 'my-0','pt-8', 'h-[273px]','bg-transparent-lime','xs:z-20')
        switch (i) {
            case 0: 
                el.classList.remove('border-r-0', 'rounded-r-none',)
                el.classList.add( 'rounded-r-md', 'rounded-l-md')
                el.nextElementSibling.classList.remove( 'border-l-2','border-r-2', 'rounded-l-md', 'rounded-r-md')                
                el.nextElementSibling.classList.add( 'border-l-0', 'rounded-l-none', 'rounded-r-none')
                els[2].classList.remove('rounded-l-md')
                els[2].classList.add('rounded-l-none')
            break;
            case 1: 
                el.classList.remove( 'border-l-2','border-r-2', 'rounded-l-md', 'rounded-r-md', 'border-l-0', 'border-r-0', 'rounded-l-none', 'rounded-r-none')
                el.classList.add( 'rounded-md')
                el.previousElementSibling.classList.remove( 'rounded-m')
                el.previousElementSibling.classList.add( 'border-r-0', 'rounded-r-none')
                el.nextElementSibling.classList.remove( 'border-l-2','border-r-2', 'rounded-l-md', 'rounded-r-md', 'border-l-0', 'border-r-0')
                el.nextElementSibling.classList.add( 'border-l-0', 'rounded-r-md')
            break;
            case 2: 
                el.classList.remove( 'border-l-0', 'rounded-l-md')
                el.classList.add( 'border-l-2', 'rounded-l-md')
                el.previousElementSibling.classList.remove( 'border-r-2','border-r-2', 'rounded-l-md', 'rounded-r-md')
                el.previousElementSibling.classList.add( 'border-r-0', 'rounded-r-none', 'rounded-l-none')
                els[0].classList.remove( 'rounded-r-md')
                els[0].classList.add( 'rounded-r-none')
            break;
            default: return ;
        }
    }

    const handleClick = event => {
        const slide = event.currentTarget;
        const slides = [...slide.parentNode.childNodes];
        for (let i = 0; i < slides.length; i++) {
            if(slides[i] === slide) {
                classesChange(slide, slides, i)
            
            } else {
                slides[i].classList.remove( 'my-0','pt-8', 'h-[273px]','bg-transparent-lime', 'xs:z-20')
                slides[i].classList.add( 'my-4','pt-4', 'h-[233px]', 'xs:-z-20')
            }            
        }
    };

    return (
        <>
            <div id='slider' className='xs:hidden flex justify-between my-5'>
                <div id='slide' onClick={handleClick} className='flex items-center flex-col w-[183px] bg-white border-2 border-pale-lime cursor-pointer my-4 px-4 pt-4 border-r-0 rounded-l-md'  >
                    <div>
                        <img className='mb-3' src={clock} alt="" />
                    </div>
                    <div className="mb-2 font-bold text-2xl">Быстро</div>
                    <div className="text-sm font-normal">Наша цель помочь вам продать машину как можно быстрее, оформив все необходимые докуметы в ускоренном порядке, и мы сделаем для этого всё от себя зависящее.</div>
                </div>
                <div id='slide' onClick={handleClick} className='flex items-center flex-col w-[183px] h-[273px] bg-white border-2 border-pale-lime cursor-pointer px-4 pt-8 border-l-2 border-r-2 rounded-l-md my-0 rounded-r-md bg-transparent-lime' >
                    <div>
                        <img className='mb-3' src={ok} alt="" />
                    </div>
                    <div className="mb-2 font-bold text-2xl">Просто</div>
                    <div className="text-sm font-normal">Мы купим вашу машину при любом условии! Не важно есть ли на ней техосмотр, нуждается ли она в ремонте или имеет неисправности; Мы приобритём вашу машину без лишних задержек и вопросов.</div>
                </div>
                <div id='slide' onClick={handleClick} className='flex items-center flex-col w-[183px] bg-white  border-2 border-pale-lime cursor-pointer my-4  px-4 pt-4 border-l-0 border-r-2 rounded-r-md'>
                    <div>
                        <img className='mb-3' src={euro} alt="" />
                    </div>
                    <div className="mb-2 font-bold text-2xl">Прибыльно</div>
                    <div className="text-sm font-normal">Разумеется вы хотели бы продать свою машину с максимальной выгодой. Мы способны предложить вам за ваш автомобиль самую высокую цену на рынке.</div>
                </div>
            </div>

            <Swiper 
                navigation={false} 
                modules={[]}                  
                className='mySwiper justify-between my-5 w-[380px] h-[273px] hidden xs:block'
                slidesPerView={2}
                centeredSlides={true}
                slideActiveClass='swiper-slide-active z-50'
                slideNextClass='swiper-slide-next -z-50'
                slidePrevClass='swiper-slide-prev -z-50'
            >
                
                <SwiperSlide>
                    {({ isActive}) => (
                        <div>
                            <div className={`flex text-center ml-14 items-center flex-col w-[183px] bg-white  border-2 border-pale-lime rounded-md cursor-pointer ${isActive ? 'h-[273px] px-4 pt-8 my-0 bg-white' : 'h-[233px] my-4 px-4 pt-4 bg-[#E4E4E44D] '} `}>
                                <div>
                                    <img className='mb-3' src={clock} alt="" />
                                </div>
                                <div className="mb-2 font-bold text-2xl">Быстро</div>
                                <div className="text-sm font-normal">Наша цель помочь вам продать машину как можно быстрее, оформив все необходимые докуметы в ускоренном порядке, и мы сделаем для этого всё от себя зависящее.</div>
                            </div>
                        </div>
                        
                    )}                    
                </SwiperSlide>
                <SwiperSlide>
                    {({ isActive}) => (
                        <div className={`flex text-center items-center flex-col w-[183px] bg-white  border-2 border-pale-lime rounded-md cursor-pointer ${isActive ? 'h-[273px] px-4 pt-8 my-0 bg-white' : ' h-[233px] my-4 px-4 pt-4 bg-[#E4E4E44D]'} `}>
                            <div>
                                <img className='mb-3' src={ok} alt="" />
                            </div>
                            <div className="mb-2 font-bold text-2xl">Просто</div>
                            <div className="text-sm font-normal">Мы купим вашу машину при любом условии! Не важно есть ли на ней техосмотр, нуждается ли она в ремонте или имеет неисправности; Мы приобритём вашу машину без лишних задержек и вопросов.</div>
                        </div>
                    )}  
                    
                </SwiperSlide>
                <SwiperSlide >
                    {({ isActive}) => (
                        <div className={`flex text-center absolute items-center -ml-14 flex-col w-[183px] bg-white border-2 border-pale-lime rounded-md cursor-pointer ${isActive ? 'h-[273px] z-50 px-4 pt-8 my-0 bg-white' : 'h-[233px] my-4 px-4 pt-4 bg-[#E4E4E44D]'} `}>
                            <div>
                                <img className='mb-3' src={euro} alt="" />
                            </div>
                            <div className="mb-2 font-bold text-2xl">Прибыльно</div>
                            <div className="text-sm font-normal">Разумеется вы хотели бы продать свою машину с максимальной выгодой. Мы способны предложить вам за ваш автомобиль самую высокую цену на рынке.</div>
                        </div>
                    )}      
                    
                </SwiperSlide>
            </Swiper>
        </>
        
    )

}

export default Carousel