import city from '../../resources/city21.png'
import { useFormik } from 'formik';
import MyInput from './inputs';



const AutoForm = () => {

    const clearInputs = () => {
        const inputs = document.querySelectorAll('input')
        setTimeout(() => {
            inputs.forEach(input => {
                input.value = '';
                if (input.type === 'checkbox') {
                    input.checked = false
                }
            })
        }, 3000)
        
    }
    const formik = useFormik ({
        initialValues: {
            brand:'',
            model:'',
            motor:'',
            year:'',
            fuel:'',
            gearbox:'',
            mileage:'',
            inspection:'',
            price:'',
            photo:'',
            name:'',
            email:'',
            phone:'',
            city:'',
            message:'',

        },
        onSubmit: values => {
            console.log(values);            
            clearInputs()            
        },
    })
    

    return (
        <div className="py-24 flex justify-between xl:mx-auto md:ml-[110px] max-w-[1024px] flex-row xs:flex-col">
            <div className="">
                    <form id='form' onSubmit={formik.handleSubmit} encType="multipart/form-data">
                        <div className="max-w-lg">
                            <h2 className="text-2xl font-normal text-center mb-7">Данные автомобиля</h2>
                            <div className="flex flex-wrap mb-6 w-[521px] xs:w-full xs:mx-5">
                                <div className="relative mr-8 my-2 xs:mr-4">
                                    <MyInput                                    
                                        name='brand'
                                        type='text'
                                        value={formik.values.brand}
                                        label='Марка'
                                        onChange={formik.handleChange}
                                        inputCN='w-24 h-5 xs:w-28'
                                    />
                                </div>
                                <div className="relative mr-8 my-2 xs:mr-4">
                                    <MyInput
                                        name='model'
                                        type='text'
                                        label='Модель'
                                        value={formik.values.model}
                                        onChange={formik.handleChange}
                                        inputCN='w-24 h-55 xs:w-28' 
                                    />
                                </div>
                                <div className="relative mr-8 my-2  xs:mr-4">
                                    <MyInput
                                            name='motor'
                                            type='text'
                                            label='Мотор'
                                            value={formik.values.motor}
                                            onChange={formik.handleChange} 
                                            inputCN='w-24 h-55 xs:w-28'
                                        />
                                </div>
                                <div className="relative mr-8 my-2  xs:mr-4">
                                    <MyInput
                                        name='year'
                                        type='number'
                                        label='Год'
                                        value={formik.values.year}
                                        onChange={formik.handleChange} 
                                        inputCN='w-24 h-55 xs:w-28'
                                    /> 
                                </div>
                                <div className="relative mr-8 my-2 xs:mr-4">
                                    <MyInput
                                        name='fuel'
                                        type='text'
                                        label='Топливо'
                                        value={formik.values.fuel}
                                        onChange={formik.handleChange} 
                                        inputCN='w-24 h-55 xs:w-28'
                                    />  
                                </div>
                                <div className="relative mr-8 my-2 xs:mr-4">
                                    <MyInput
                                        name='gearbox'
                                        type='text'
                                        label='КПП'
                                        value={formik.values.gearbox}
                                        onChange={formik.handleChange} 
                                        inputCN='w-24 h-55 xs:w-28'
                                    />  
                                </div>
                                <div className="relative mr-8 my-2 xs:mr-4">
                                    <MyInput
                                        name='mileage'
                                        type='number'
                                        label='Пробег'
                                        value={formik.values.mileage}
                                        onChange={formik.handleChange} 
                                        inputCN='w-24 h-55 xs:w-28'
                                    />  
                                </div>
                                <div className="relative mr-8 my-2 xs:mr-4">
                                    <MyInput
                                        name='inspection'
                                        type='text'
                                        label='Техосмотр'
                                        value={formik.values.inspection}
                                        onChange={formik.handleChange} 
                                        inputCN='w-24 h-55 xs:w-28'
                                    />                                 
                                </div>
                                <div className="relative mr-8 my-2  xs:mr-4">
                                    <MyInput
                                        name='price'
                                        type='number'
                                        label='Желаемая цена'
                                        value={formik.values.price}
                                        labelCN='after:content-[""] after:bg-dark-lime after:border-2 after:border-dark-lime after:rounded-sm after:absolute after:-right-1'
                                        required
                                        onChange={formik.handleChange}
                                        inputCN='w-24 h-55 xs:w-28'
                                    />  
                                </div>        
                                <div className="my-2 mr-8">
                                    <label htmlFor="photo" className='relative block text-center pt-2 bg-dark-lime rounded-sm text-xs font-bold text-white w-[352px] xs:w-[370px] h-7 text-sm'>Добавить фото
                                        <input className='absolute top-0 right-0 w-[352px] h-7 opacity-0'  type="file" accept='image/*' name='photo'
                                        onChange={(e) =>formik.setFieldValue('photo', e.currentTarget.files[0])} value={formik.values.model}
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="max-w-sm mt-8 ">
                            <h2 className="text-2xl font-normal text-center mb-7">Другие данные</h2>
                            <div className="flex flex-wrap mb-6 justify-start  xs:w-full xs:mx-5">
                                <div className="relative basis-1/2 my-2">
                                    <MyInput
                                        name='name'
                                        type='text'
                                        label='Имя'
                                        value={formik.values.name}
                                        inputCN='w-44 h-5'
                                        onChange={formik.handleChange}
                                    />                                         
                                </div>
                                <div className="relative basis-1/2 my-2">
                                    <MyInput
                                        name='email'
                                        type='email'
                                        label='Почта'
                                        value={formik.values.email}
                                        inputCN='w-44  h-5'
                                        onChange={formik.handleChange} 
                                    />
                                </div>
                                <div className="relative basis-1/2 my-2">
                                    <MyInput
                                        name='phone'
                                        type='tel'
                                        label='Телефон'
                                        value={formik.values.phone}
                                        labelCN='after:absolute after:-right-1 after:border-2 after:border-dark-lime after:rounded-md after:bg-dark-lime'
                                        inputCN='w-44  h-5'
                                        required
                                        onChange={formik.handleChange} 
                                    /> 
                                </div>
                                <div className="relative basis-1/2 my-2">
                                    <MyInput
                                        name='city'
                                        type='text'
                                        label='Город'
                                        value={formik.values.city}
                                        inputCN='w-44  h-5'
                                        onChange={formik.handleChange} 
                                    /> 
                                </div>
                                <div className="relative basis-full w-full my-2">
                                    <MyInput
                                        name='message'
                                        type='text'
                                        label='Сообщение'
                                        value={formik.values.message}
                                        inputCN='h-20 w-[370px]'
                                        onChange={formik.handleChange} 
                                    />  
                                </div>
                                <div className=" flex items-center basis-full my-2">
                                    <div className='block -mt-3'>
                                        <input 
                                            id="checkbox" 
                                            type="checkbox" 
                                            name='checkbox'
                                            className="top-3 border-gray rounded-sm"
                                            required
                                            onChange={formik.handleChange} 
                                        /> 
                                    </div> 
                                    <label className=" mx-auto text-xs text-dark-blue text-center font-bold pl-2" htmlFor="checkbox">Я согласен(на), что фирма использует мои личные данные на основе <span className='
                                    block mx-auto text-dark-lime'>Политики конфедициальности</span>  </label>
                                </div>
                                <button className='bg-dark-lime block mx-auto w-[190px] text-white text-xs font-bold h-[22px] rounded-sm' type='submit'>Отправить</button>
                            </div>
                        </div>           
                    </form>
            </div>
            <div className="relative">
                <img className="block absolute xs:relative right-0 mt-20 md:min-w-[444px]" src={city} alt="city" />
            </div>
            
        </div>
        

    )
}
 export default AutoForm;