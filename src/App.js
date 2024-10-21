import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App(){
  const notify = ()=>{
    toast.success("clicked");
    toast.warn("warn")
  }

  
  return (
    <div className='Container'>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
  
}

export default App;
