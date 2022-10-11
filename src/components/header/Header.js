import iconAuto from '../../resources/icon-auto.png'
import phone from '../../resources/icons/phone.svg'
import mail from '../../resources/icons/mail.svg'
import facebook from '../../resources/icons/facebook.svg'
import vk from '../../resources/icons/vk.svg'
import flag from '../../resources/icons/flag.svg'
import menu from '../../resources/icons/menu.svg'
import home from '../../resources/icons/home.svg'
import chatbox from '../../resources/icons/chatbox-ellipses.svg'
import help from '../../resources/icons/help-circle.svg'
import location from '../../resources/icons/location.svg'
import mailUnread from '../../resources/icons/mail-unread.svg'
import people from '../../resources/icons/people.svg'


const Header = () => {

    const toggleMenu = () => {
        const menu = document.querySelector('#menu')
        if (menu.classList.contains('block')) {
            menu.classList.remove('block')
            menu.classList.add('hidden')
        } else {
            menu.classList.remove('hidden')
            menu.classList.add('block')
        }
        
    }

    return (
        <div className='m-0'>
            <div className='flex'> 
                <div className='bg-lime h-20 rounded-bl-md flex-1 pl-20 pt-4 xs:pl-5 xs:h-16'>
                    <div className='text-base text-white font-bold mb-2 hidden xs:block'>Покупка авто по одному звонку!</div>
                    <a className='block text-white text-base font-bold flex mb-2 xs:text-xl' href="#">
                        <img className='mr-2' src={phone} alt="" />
                        +372 43675 476
                    </a>
                    <a className='block text-white text-base font-bold flex xs:hidden ' href="#">
                        <img className='mr-2 ' src={mail} alt="" />
                        info@example.ee
                    </a>
                </div>
                <div className='flex flex-col justify-between pb-2 pt-4 pr-5 pl-32 bg-blue rounded-bl-lg h-32 xs:h-20 absolute right-0 w-3/4 xs:w-1/4'>
                    <div className='flex justify-end  xs:hidden'>
                        <div className='basis-1/2'>
                            <img className='block' src={iconAuto} alt="" />
                        </div>            
                        <div className='flex justify-end basis-10 items-stretch'>
                            <a className='' href="#"><img src={facebook} alt="facebook" /></a>
                            <a className='pl-3' href="#"><img src={vk} alt="vk" /></a> 
                        </div>
                        
                    </div>
                    <nav className='flex list-none text-sm justify-between items-stretch pb-1  xs:hidden'>
                        <li className='text-white'><a className='pb-5 px-3 hover:before:block before:content-[""] before:absolute before:w-20 before:h-[3px] before:bg-lime before:hidden before:-bottom-2 mb-12 before:rounded-l-sm text-sm font-bold' href="#">ГЛАВНАЯ</a></li>
                        <li className='text-white'><a className='pb-5 px-3 hover:before:block before:content-[""] before:absolute before:w-16 before:h-[3px] before:bg-lime before:hidden before:-bottom-2 mb-12  before:rounded-l-sm text-sm font-bold' href="#">О НАС</a></li>
                        <li className='text-white'><a className='pb-5 px-3 hover:before:block before:content-[""] before:absolute before:w-56 before:h-[3px] before:bg-lime before:hidden before:-bottom-2 mb-12 before:rounded-l-sm text-sm font-bold' href="#">ОТПРАВЬТЕ НАМ ПРЕДЛОЖЕНИЕ</a> </li>
                        <li className='text-white'><a className='pb-5 px-3 hover:before:block before:content-[""] before:absolute before:w-12 before:h-[3px] before:bg-lime before:hidden before:-bottom-2 mb-12  before:rounded-l-sm text-sm font-bold' href="#">ЧЗВ</a></li>
                        <li className='text-white'><a className='pb-5 px-3 hover:before:block before:content-[""] before:absolute before:w-14 before:h-[3px] before:bg-lime before:hidden before:-bottom-2 mb-12 before:rounded-l-sm text-sm font-bold' href="#">БЛОГ</a></li>
                        <li className='text-white'><a className='pb-5 px-3 hover:before:block before:content-[""] before:absolute before:w-24 before:h-[3px] before:bg-lime before:hidden before:-bottom-2 mb-12 before:rounded-l-sm text-sm font-bold' href="#">КОНТАКТЫ</a></li>
                        <li><img src={flag} alt="" /></li>
                    </nav>
                    
                </div>
                <div className='hidden xs:block z-40 w-10 h-10' onClick={toggleMenu}>
                    <img className=' mt-4 -ml-6 ' src={menu} alt="" />
                </div>
                <div id='menu' className=' absolute top-0 right-0 h-full w-[372px] bg-blue z-30 text-white pl-8 hidden'>
                    <div>
                        <div className='text-4xl text-white pt-5 xs:mb-4'>LOGO</div>
                    </div>
                    <div className='mt-24'>
                        <a href='#' className='flex mb-14 font-bold text-2xl'>
                            <img className='mr-5' src={home} alt="" />
                            <p>ГЛАВНАЯ</p>
                        </a>
                        <a href='#' className='flex mb-14 font-bold text-xl'>
                            <img className='mr-5' src={people} alt="" />
                            <p>О НАС </p>
                        </a>
                        <a href='#' className='flex mb-14 font-bold text-xl'>
                            <img className='mr-5' src={mailUnread} alt="" />
                            <p>ОТПРАВЬТЕ НАМ ПРЕДЛОЖЕНИЕ</p>
                        </a>
                        <a href='#' className='flex mb-14 font-bold text-xl'>
                            <img className='mr-5' src={help} alt="" />
                            <p>ЧЗВ</p>
                        </a>
                        <a href='#' className='flex mb-14 font-bold text-xl'>
                            <img className='mr-5' src={chatbox} alt="" />
                            <p>БЛОГ</p>
                        </a>
                        <a href='#' className='flex mb-14 font-bold text-xl'>
                            <img className='mr-5' src={location} alt="" />
                            <p>КОНТАКТЫ</p>
                        </a>
                        <div className='flex mb-14 font-bold text-xl'>
                            <img className='mr-3 w-8' src={flag} alt="" />
                            <p>РУССКИЙ</p>
                        </div>
                        <div className='flex mb-14 font-bold text-xl'>
                            <img className='mr-5' src={facebook} alt="" />
                            <img src={vk} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

export default Header;