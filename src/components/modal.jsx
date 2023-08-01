import InputType from "./input";

export const Modal = ({close}) => {
    return (  
        <div className="p-5 rounded w-80 bg-gray-100 border ">
            <h1 className="font-semibold pb-2">My Modal</h1>
            <p className="font-thin">Llooks good and working</p>
            <div className="flex gap-5 pt-3 justify-center">
                <button className="p-2 rounded text-xl text-white w-1/3 bg-red-500">Ok</button>
                <button className="p-2 rounded text-xl text-white w-1/3 bg-gray-500" onClick={close}>Cancel</button>
            </div>
        </div>
    );
}
 
export const InsertModal = ({close, save, handleChange}) => {
    return(
        <div>
            <h1 className="font-semibold pb-2">My Modal</h1>
            <div className="bg-gray-100 border p-5">
                <h3 className="text-2xl font-bold">Add New Student</h3>
                <InputType label={"Enter Your Names"} name={'name'} holder={"Enter Your names"} handleChange={handleChange}/>
                <InputType label={"Enter Your Regno"} name={'regno'} holder={"Enter Your Regno"} handleChange={handleChange} />
                <InputType label={"Enter Your marks"} name={'marks'} holder={"Enter Your marks"} handleChange={handleChange}/>
                <div className="flex gap-5 pt-3 justify-center">
                    <button className="p-2 rounded text-xl text-white w-1/3 bg-blue-500 hover:bg-blue-700" onClick={save}>Save</button>
                    <button className="p-2 rounded text-xl text-white w-1/3 bg-gray-500 hover:bg-gray-700" onClick={close}>Cancel</button>
                </div>
            </div>
        </div>
    )
}