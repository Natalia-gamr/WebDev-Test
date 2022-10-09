const Footer = () => {
    return (
        <div className="bg-blue">
            <div className="flex items-center py-[35px] px-[80px] justify-between">
                <h2 className="text-4xl text-white">LOGO</h2>
                <div className="text-white text-base">
                    <h3 className="font-bold mb-[10px]">Company name</h3>
                    <div className="mb-[7px]">Reg. nr: 437568</div>
                    <div className="w-[148px] mb-[7px]">Peterburi tee 710 Tallinn Harjumaa 34235</div>
                </div>
                <div className="text-white text-base">
                    <h3 className="font-bold mb-[10px]">Свяжись с нами</h3>
                    <a className="block mb-[7px]"> +372 475685</a>
                    <a className="block mb-[7px]">info@example.ee</a>
                </div>
                <div className="text-white text-base">
                    <h3 className="font-bold mb-[10px]">Полезные ссылки</h3>
                    <a className="block mb-[7px]">О нас</a>
                    <a className="block mb-[7px]">Часто задаваемые вопросы</a>
                    <a className="block mb-[7px]">Контакты</a>
                </div>
            </div>
            <div className="w-full h-14 bg-black"></div>
            
        </div>
    )
}

export default Footer;