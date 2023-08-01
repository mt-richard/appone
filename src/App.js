import './App.css';
import {Modal} from './components/modal';
import { useSelector, useDispatch } from 'react-redux';
import {closeModal, openModal} from './redux/reducers/modalSlice'
import { getInputText } from './redux/reducers/textSlice'
import InputType from './components/input';
import MyStudents from './components/students';

function App() {

const {ismodalOpen} = useSelector((state)=>state.modal)
const text = useSelector((state)=> state.inputtext.text)
const dispatch = useDispatch();

const handleOpenModal = () =>{
  dispatch(openModal())
}

const handleCloseMOdal = () => {
  dispatch(closeModal())
}

const handleOnchange = (e) => {
  const newVal = e.target.value;
  dispatch(getInputText(newVal))
}

const geMyText = () => {
  console.log(dispatch(getInputText(text)))
  alert(text)
}


  return (
    <div className="px-10 py-20">
      <h2 className='text-green-500'>Welcome to page</h2>
      <button onClick={handleOpenModal} className='bg-gray-400 text-white p-2 w-40 rounded my-3'>OpenModal</button>
      {ismodalOpen && <Modal close={handleCloseMOdal}/>}

      <div>
        <button className='bg-gray-400 text-white p-2 w-40 rounded my-3' onClick={geMyText}>Get Field Text</button>
        <InputType label={"Names"} name={"name"} holder={"Enter your Names"} text={text} newValue={handleOnchange}/>
      </div>

      {/* Students List */}

      <MyStudents />
    </div>
  );
}

export default App;
