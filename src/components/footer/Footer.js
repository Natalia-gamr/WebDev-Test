import mail from '../../resources/icons/mail-lime.svg'
import phone from '../../resources/icons/phone-lime.svg'
import facebook from '../../resources/icons/facebook.svg'
import vk from '../../resources/icons/vk.svg'
import inst from '../../resources/icons/inst.svg'
import twitter from '../../resources/icons/twitter.svg'

const Footer = () => {
    return (
        <div className="bg-blue">
            <div className="flex py-[35px] px-[80px] justify-between xs:flex-col xs:pt-0 xs:text-center">
                <h2 className="text-4xl text-white pt-5 xs:mb-4">LOGO</h2>
                <div className="text-white text-base xs:hidden">
                    <h3 className="font-bold mb-[10px] ">Company name</h3>
                    <p className="mb-[7px] ">Reg. nr: 437568</p>
                    <p className="w-[148px] mb-[7px] ">Peterburi tee 710 Tallinn Harjumaa 34235</p>
                </div>
                <div className="text-white text-base  xs:mb-5">
                    <h3 className="font-bold mb-[10px] xs:mb-[17px] xs:text-2xl">Свяжись с нами</h3>
                    <a href='#' className='flex items-center mb-[7px] xs:justify-center cursor-pointer'>
                        <img className='' src={phone} alt="" />
                        <p className="ml-2 block xs:text-xl "> +372 475685</p>
                    </a>
                    <a href='#' className='flex items-center mb-[7px] xs:justify-center cursor-pointer'>
                        <img className='' src={mail} alt="" />
                        <p className="ml-2 block xs:text-xl ">info@example.ee</p>
                    </a>                    
                </div>
                <div className="hidden xs:block text-white text-base  xs:mb-5">
                    <h3 className="font-bold mb-[10px] xs:text-2xl xs:mb-[17px]">Company name</h3>
                    <p className="mb-[7px] xs:text-xl">Reg. nr: 437568</p>
                    <p className="xs:w-[200px] xs:mx-auto xs:mb-[7px] xs:text-xl">Peterburi tee 710 Tallinn Harjumaa 34235</p>
                </div>
                <div className="text-white text-base  xs:mb-5">
                    <h3 className="font-bold mb-[10px] xs:mb-[17px] xs:text-2xl">Полезные ссылки</h3>
                    <a href='#' className="block mb-[7px] cursor-pointer xs:text-xl">О нас</a>
                    <a href='#' className="block mb-[7px] cursor-pointer xs:text-xl">Часто задаваемые вопросы</a>
                    <a href='#' className="block mb-[7px] cursor-pointer xs:text-xl">Контакты</a>
                </div>
                <div className='xs:flex items-center justify-center hidden'>
                    <div className='mr-5'><a href="#"><img className='h-[23px]' src={facebook} alt="" /></a></div>
                    <div className='mr-5'><a href="#"><img className='w-[23px]' src={vk} alt="" /></a></div>
                    <div className='mr-5'><a href="#"><img src={inst} alt="" /></a></div>
                    <div><a href="#"><img src={twitter} alt="" /></a></div>
                </div>
            </div>
            <div className="w-full h-14 bg-black"></div>
            
        </div>
    )
}

export default Footer;