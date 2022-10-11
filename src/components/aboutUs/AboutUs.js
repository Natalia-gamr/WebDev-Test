import mans from '../../resources/Illustration-4.png'
import crown from '../../resources/icons/crown.svg'
import document from '../../resources/icons/document.svg'
import like from '../../resources/icons/like.svg'

const AboutUs = () => {
    return (
        <div className="max-w-[1024px] my-[37px] xl:mx-auto md:ml-[110px] mx-auto flex xs:w-full xs:mx-5 xs:flex-col">
            <div className="max-w-[542px]">
                <h2 className='relative font-bold text-3xl uppercase max-w-[80px] before:content-[""] before:absolute before:w-20 before:h-[3px] before:bg-lime before:-bottom-2 mb-12'>О нас</h2>
                <p className="font-bold text-2xl my-5">Мы действуем на рынке автомобилей уже много лет и знаем как оформить сделку быстро и без проблем.</p>
                <p className="font-normal text-sm xs:w-[400px]">Первое, что следует сделать заинтересованному в продаже машины человеку – связаться с нами, заполнив контактную форму на сайте или позвонив по телефону. На основании полученного со слов описания машины мы назовем предварительную стоимость. Точное ценовое предложение станет известно после проведения оценки, которую выполнит наш специалист, выехав для этого в удобное для клиента место.</p>
                <div className="max-w-[320px] xs:flex xs:flex-row xs:justify-between xs:max-w-full xs:mr-10  xs:max-w-[400px]">
                    <div className="flex mt-12 items-center xs:w-[112px] xs:flex-col">
                        <img className="mr-4 xs:mr:0 xs:mb-2 xs:h-[33px]" src={crown} alt="" />
                        <p className="text-xl font-bold xs:text-center xs:text-base">Предлагаем самые высокие цены</p>
                    </div>
                    <div className="flex xs:hidden mt-12 items-center xs:w-[112px] xs:flex-col">
                        <img className="mr-4 xs:mr:0 xs:mb-2 xs:h-[33px]" src={document} alt="" />
                        <p className="text-xl font-bold xs:text-center xs:text-base">Оформляем документы прямо на месте</p>
                    </div>
                    <div className="flex mt-12 items-center xs:w-[112px] xs:flex-col">
                        <img className="mr-4  xs:mr:0 xs:mb-2 xs:h-[33px]" src={like} alt="" />
                        <p className="text-xl font-bold xs:text-center  xs:text-base">Выкупаем машины в любом состоянии</p>
                    </div>
                    <div className="hidden xs:flex mt-12 items-center xs:w-[112px] xs:flex-col">
                        <img className="mr-4 xs:mr:0 xs:mb-2 xs:h-[33px]" src={document} alt="" />
                        <p className="text-xl font-bold xs:text-center xs:text-base">Оформляем документы прямо на месте</p>
                    </div>
                </div>

            </div>
            <div className="relative w-full h-full ">
                <img className="absolute xs:mx-5 xs:-my-16 xs:relative right-0 top-24 -z-10 h-[517px] max-w-[791px] xs:h-[237px] xs:max-w-[397px] xs:-scale-x-100" src={mans} alt="" />
            </div>
        </div>
    )
}

export default AboutUs