import iconAuto from '../../resources/icon-auto.png'
import phone from '../../resources/phone.svg'
import mail from '../../resources/mail.svg'
import facebook from '../../resources/facebook.svg'
import vk from '../../resources/vk.svg'
import flag from '../../resources/flag.svg'


const Header = () => {
    return (
        <div>
            <div className='flex'> 
                <div className='bg-lime h-20 rounded-bl-md flex-1 pl-20 pt-4'>
                    <a className='block text-white text-base font-bold flex mb-2' href="">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        +372 43675 476
                    </a>
                    <a className='block text-white text-base font-bold flex' href="">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-4 h-4 mr-2">
                            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                        </svg>
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
                        <li className='text-white'><a className='pb-5 px-3 hover:border-b-4 border-lime text-sm font-bold' href="">ГЛАВНАЯ</a></li>
                        <li className='text-white'><a className='pb-5 px-3 hover:border-b-4 border-lime text-sm font-bold' href="">О НАС</a></li>
                        <li className='text-white'><a className='pb-5 px-3 hover:border-b-4 border-lime text-sm font-bold' href="">ОТПРАВЬТЕ НАМ ПРЕДЛОЖЕНИЕ</a> </li>
                        <li className='text-white'><a className='pb-5 px-3 hover:border-b-4 border-lime text-sm font-bold' href="">ЧЗВ</a></li>
                        <li className='text-white'><a className='pb-5 px-3 hover:border-b-4 border-lime text-sm font-bold' href="">БЛОГ</a></li>
                        <li className='text-white'><a className='pb-5 px-3 hover:border-b-4 border-lime text-sm font-bold' href="">КОНТАКТЫ</a></li>
                        <li><img src={flag} alt="" /></li>
                    </nav>
                </div>
            </div>
            
            
        </div>
    )
}

export default Header;