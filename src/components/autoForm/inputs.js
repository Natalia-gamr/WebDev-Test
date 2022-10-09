import { useFormik } from "formik"

const MyInput = ({formik, inputCN, labelCN, label,...props}) => {
    return (
        <>
            <label className={`absolute -top-1 left-1 z-20 bg-white text-dark-blue text-xs font-bold px-1 ${labelCN}`} htmlFor={props.name}>{label}</label>
            <input 
                {...props}
                className={`border border-gray -z-10 rounded-sm w-24 h-5 text-sm ${inputCN}`}
            />  
        </>
    )
}  

export default MyInput