import iconAuto from '../../resources/icon-auto.png'
import phone from '../../resources/icons/phone.svg'
import mail from '../../resources/icons/mail.svg'
import facebook from '../../resources/icons/facebook.svg'
import vk from '../../resources/icons/vk.svg'
import flag from '../../resources/icons/flag.svg'


const Header = () => {
    return (
        <div>
            <div className='flex'> 
                <div className='bg-lime h-20 rounded-bl-md flex-1 pl-20 pt-4'>
                    <a className='block text-white text-base font-bold flex mb-2' href="">
                        <img className='mr-2' src={phone} alt="" />
                        +372 43675 476
                    </a>
                    <a className='block text-white text-base font-bold flex' href="">
                        <img className='mr-2' src={mail} alt="" />
                        info@example.ee
                    </a>
                </div>
                <div className='flex flex-col justify-between pb-2 pt-4 pr-5 pl-32 bg-blue rounded-bl-lg h-32 absolute right-0 w-3/4'>
                    <div className='flex justify-end'>
                        <div className='basis-1/2'>
                            <img className='block' src={iconAuto} alt="" />
                        </div>            
                        <div className='flex justify-end basis-10 items-stretch'>
                            <a className='' href=""><img src={facebook} alt="facebook" /></a>
                            <a className='pl-3' href=""><img src={vk} alt="vk" /></a> 
                        </div>
                        
                    </div>
                    <nav className='flex list-none text-sm justify-between items-stretch pb-1'>
                        <li className='text-white'><a className='pb-5 px-3 hover:before:block before:content-[""] before:absolute before:w-20 before:h-[3px] before:bg-lime before:hidden before:-bottom-2 mb-12 before:rounded-l-sm text-sm font-bold' href="#">ГЛАВНАЯ</a></li>
                        <li className='text-white'><a className='pb-5 px-3 hover:before:block before:content-[""] before:absolute before:w-16 before:h-[3px] before:bg-lime before:hidden before:-bottom-2 mb-12  before:rounded-l-sm text-sm font-bold' href="#">О НАС</a></li>
                        <li className='text-white'><a className='pb-5 px-3 hover:before:block before:content-[""] before:absolute before:w-56 before:h-[3px] before:bg-lime before:hidden before:-bottom-2 mb-12 before:rounded-l-sm text-sm font-bold' href="#">ОТПРАВЬТЕ НАМ ПРЕДЛОЖЕНИЕ</a> </li>
                        <li className='text-white'><a className='pb-5 px-3 hover:before:block before:content-[""] before:absolute before:w-12 before:h-[3px] before:bg-lime before:hidden before:-bottom-2 mb-12  before:rounded-l-sm text-sm font-bold' href="#">ЧЗВ</a></li>
                        <li className='text-white'><a className='pb-5 px-3 hover:before:block before:content-[""] before:absolute before:w-14 before:h-[3px] before:bg-lime before:hidden before:-bottom-2 mb-12 before:rounded-l-sm text-sm font-bold' href="#">БЛОГ</a></li>
                        <li className='text-white'><a className='pb-5 px-3 hover:before:block before:content-[""] before:absolute before:w-24 before:h-[3px] before:bg-lime before:hidden before:-bottom-2 mb-12 before:rounded-l-sm text-sm font-bold' href="#">КОНТАКТЫ</a></li>
                        <li><img src={flag} alt="" /></li>
                    </nav>
                </div>
            </div>
            
            
        </div>
    )
}

export default Header;