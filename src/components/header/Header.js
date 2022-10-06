import iconAuto from '../../resources/icon-auto.png'
import phone from '../../resources/phone.svg'
import mail from '../../resources/mail.svg'
import facebook from '../../resources/facebook.svg'
import vk from '../../resources/vk.svg'
import flag from '../../resources/flag.svg'


const Header = () => {
    return (
        <div className="lg">
            <div className='flex'> 
                <div className='bg-lime h-20 rounded-bl-md flex-1 pl-24 pt-4'>
                    <a className='block text-white text-sm flex' href="">
                        <img className='pr-4' src={phone} alt="phone" />
                        +372 43675 476
                    </a>
                    <a className='block text-white text-sm flex' href="">
                        <img className='pr-4' src={mail} alt="mail" />
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
                    <nav className='flex list-none text-sm justify-between items-stretch'>
                        <li className='text-white'><a className='pb-6 px-4 hover:border-b-4 border-lime' href="">ГЛАВНАЯ</a></li>
                        <li className='text-white'><a className='pb-6 px-4 hover:border-b-4 border-lime' href="">О НАС</a></li>
                        <li className='text-white'><a className='pb-6 px-4 hover:border-b-4 border-lime' href="">ОТПРАВЬТЕ НАМ ПРЕДЛОЖЕНИЕ</a> </li>
                        <li className='text-white'><a className='pb-6 px-4 hover:border-b-4 border-lime' href="">ЧЗВ</a></li>
                        <li className='text-white'><a className='pb-6 px-4 hover:border-b-4 border-lime' href="">БЛОГ</a></li>
                        <li className='text-white'><a className='pb-6 px-4 hover:border-b-4 border-lime' href="">КОНТАКТЫ</a></li>
                        <li><img src={flag} alt="" /></li>
                    </nav>
                </div>
            </div>
            
            
        </div>
    )
}

export default Header;