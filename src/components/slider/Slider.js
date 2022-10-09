
import clock from '../../resources/icons/clock.svg'
import ok from '../../resources/icons/ok.svg'
import euro from '../../resources/icons/euro.svg'



const Slider = (prop) => {

    // const slider = document.querySelector('#slider');
    // const slide = slider.querySelectorAll('a')



    return (
        <div id='slider' className='flex justify-between my-5 h-[273px]'>
            <div className='flex items-center flex-col w-[183px] border-2 border-pale-lime px-4 py-4 my-4 hover:my-0 hover:pt-8 hover:h-full rounded-sm'>
                <div>
                    <img className='mb-3' src={clock} alt="" />
                </div>
                <div className="mb-2 font-bold text-2xl">Быстро</div>
                <div className="text-sm font-normal">Наша цель помочь вам продать машину как можно быстрее, оформив все необходимые докуметы в ускоренном порядке, и мы сделаем для этого всё от себя зависящее.</div>
            </div>
            <div className='flex items-center flex-col w-[183px] border-2 border-pale-lime px-4 py-4 my-4 hover:my-0 hover:pt-8 hover:h-full rounded-sm'>
                <div>
                    <img className='mb-3' src={ok} alt="" />
                </div>
                <div className="mb-2 font-bold text-2xl">Просто</div>
                <div className="text-sm font-normal">Мы купим вашу машину при любом условии! Не важно есть ли на ней техосмотр, нуждается ли она в ремонте или имеет неисправности; Мы приобритём вашу машину без лишних задержек и вопросов.</div>
            </div>
            <div className='flex items-center flex-col w-[183px] border-2 border-pale-lime px-4 py-4 my-4 hover:my-0 hover:pt-8 hover:h-full rounded-sm'>
                <div>
                    <img className='mb-3' src={euro} alt="" />
                </div>
                <div className="mb-2 font-bold text-2xl">Прибыльно</div>
                <div className="text-sm font-normal">Разумеется вы хотели бы продать свою машину с максимальной выгодой. Мы способны предложить вам за ваш автомобиль самую высокую цену на рынке.</div>
            </div>
        </div>
    )
}

export default Slider