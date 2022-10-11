import man from '../../resources/Illustration-2.png'
import auto from '../../resources/icon-auto.png'
import Carousel from '../carousel/Carousel';




const WhyUs = () => {
    return (
        <div className="max-w-[1024px] mx-auto flex xs:mx-5">
            <div className='relative -z-10 w-full h-[438px] max-w-[516px]'>
                <img className='absolute -z-10 h-[438px] max-w-[516px] xs:hidden' src={man} alt="man" />
            </div>
            <div className='block mx-auto my-5 mr-[66px]'>
                <div>
                    <img className='block mx-auto w-[69px] h-[69px]' src={auto} alt="auto" />
                </div>
                <div>
                    <p className="text-center mt-2 text-sm font-bold xs:w-[380px] xs:mx-auto">
                        Желаешь продать машину быстро, но не хочешь заниматься этим самостоятельно?
                        <br />
                        Доверь нам все проблемы, связанные с продажей машины!
                     </p>
                </div>
                <Carousel/>
            </div>
        </div>
    )
}
export default WhyUs;