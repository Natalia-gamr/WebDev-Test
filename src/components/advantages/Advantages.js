import clock from '../../resources/icons/clock.svg'
import reward from '../../resources/icons/reward.svg'
import hands from '../../resources/icons/hands.svg'
import ok from '../../resources/icons/ok.svg'

const Advantages = () => {
    return (
        <div className="max-w-[1024px] xl:mx-auto md:ml-[110px]  mt-[200px] mx-auto flex justify-between mb-20">
            <div className='max-w-[430px]'>
                <h2 className='relative text-3xl font-bold before:content-[""] before:absolute before:w-28 before:h-[3px] before:bg-lime before:-bottom-2 mb-12 '>COMPANY NAME</h2>
                <p className='text-lg mb-12'>Каждый автовладелец хотя бы раз сталкивался с необходимостью продать машину. Конечно же, вы хотите селать это быстрее и с максимальной выгодой. Наши специалисты возьмут на себя все проблемы! Нам можно полностью доверять. 
                <br />
                Мы не являемся кредитной организацией или омбардом. Мы покупаем ваши машины, в любом виде и состоянии. Да, так просто! 
                <br />
                Наша цель - купить вашу машину максимально быстро, просто и выгодно для вас.</p>
                <div className='flex justify-between mr-4'>
                    <div className='shadow-md w-28 h-28 p-4 rounded-md'>
                        <img className='mx-auto mb-4' src={clock} alt="" />
                        <p className='block mx-auto text-xl font-bold'>Быстро</p>
                    </div>
                    <div className='shadow-md w-28 h-28 p-4 rounded-md'>
                        <img className='mx-auto mb-4' src={reward} alt="" />
                        <p className='block mx-auto text-xl font-bold'>Качественно</p>
                    </div>
                    <div className='shadow-md w-28 h-28 p-4 rounded-md'>
                        <img className='mx-auto mb-4' src={hands} alt="" />
                        <p className='block mx-auto text-xl font-bold'>Надежно</p>
                    </div>
                </div>
            </div>
            <div className='w-[400px] mr-12 mt-4'>
                <div className='flex items-center mb-[23px]'>
                    <div className='flex border mr-4 border-lime rounded-lg w-[22px] h-[22px]'>
                        <img className='block m-auto bg-none w-[10px] h-[10px]' src={ok} alt="" />
                    </div>                    
                    <p className='text-xl font-bold max-w-[295px]'>Машину не надо подготавливать к продаже</p>
                </div>
                <div className='flex items-center mb-[23px]'>
                    <div className='flex border mr-4 border-lime rounded-lg w-[22px] h-[22px]'>
                        <img className='block m-auto bg-none w-[10px] h-[10px]' src={ok} alt="" />
                    </div>                      
                    <p className='text-xl font-bold  max-w-[362px]'>Покупаем машины любого года выпуска и в любом состоянии</p>
                </div>
                <div className='flex items-center mb-[23px]'>
                    <div className='flex border mr-4 border-lime rounded-lg w-[22px] h-[22px]'>
                        <img className='block m-auto bg-none w-[10px] h-[10px]' src={ok} alt="" />
                    </div>                      
                    <p className='text-xl font-bold  max-w-[362px]'>Покупаем машины без техосмотра и страховки</p>
                </div>
                <div className='flex items-center mb-[23px]'>
                    <div className='flex border mr-4 border-lime rounded-lg w-[22px] h-[22px]'>
                        <img className='block m-auto bg-none w-[10px] h-[10px]' src={ok} alt="" />
                    </div>                     
                    <p className='text-xl font-bold  max-w-[362px]'>Покупаем машины не работающие и нуждающиеся в ремонте</p>
                </div>
                <div className='flex items-center mb-[23px]'>
                    <div className='flex border mr-4 border-lime rounded-lg w-[22px] h-[22px]'>
                        <img className='block m-auto bg-none w-[10px] h-[10px]' src={ok} alt="" />
                    </div>                  
                    <p className='text-xl font-bold  max-w-[362px]'>Предложим за вашу машину больше остальных</p>
                </div>
                <div className='flex items-center mb-[23px]'>
                    <div className='flex border mr-4 border-lime rounded-lg w-[22px] h-[22px]'>
                        <img className='block m-auto bg-none w-[10px] h-[10px]' src={ok} alt="" />
                    </div>                     
                    <p className='text-xl font-bold  max-w-[240px]'>Сразу же выплачиваем деньги</p>
                </div>
                <div className='flex items-center mb-[23px]'>
                    <div className='flex border mr-4 border-lime rounded-lg w-[22px] h-[22px]'>
                        <img className='block m-auto bg-none w-[10px] h-[10px]' src={ok} alt="" />
                    </div>                   
                    <p className='text-xl font-bold  max-w-[350px]'>Работаем по всей Эстонии и сами выезжаем на место</p>
                </div>
            </div>
        </div>
    )
}
export default Advantages;