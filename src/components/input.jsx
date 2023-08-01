
const InputType = ({holder, name,label,handleChange, text}) => {
   
    return ( 
        <div className="w-full flex flex-col p-5 ">
            <label htmlFor="" className="text-gray-800 pb-2">{label}</label>
            <input type="text" name={name} placeholder={holder} className="rounded outline-none border-0 px-5 py-2 bg-gray-200" value ={text} onChange={(e)=>handleChange(text, e)}/>
        </div>
     );
}
 
export default InputType;