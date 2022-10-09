import man from '../../resources/Illustration-2.png'
import auto from '../../resources/icon-auto.png'
import Slider from '../slider/Slider';




const Advantage = () => {
    return (
        <div className="relative max-w-[1024px] mx-auto flex">
            <div className='relative -z-10 w-full h-[438px] max-w-[516px] w-full'>
                <img className='absolute -z-10 h-[438px] max-w-[516px]' src={man} alt="man" />
            </div>
            <div className='block mx-auto my-5'>
                <div>
                    <img className='block mx-auto w-[69px] h-[69px]' src={auto} alt="auto" />
                </div>
                <div>
                    <p className="text-center mt-2 text-sm font-bold">Желаешь продать машину быстро, но не хочешь заниматься этим самостоятельно? Доверь нам все проблемы, связанные с продажей машины!</p>
                </div>
                <Slider/>
            </div>
        </div>
    )
}
export default Advantage;