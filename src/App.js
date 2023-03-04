import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Records from './components/Records';
import TableResult from './components/TableResult';

function App() {
  return (
    <div className='flex flex-col'>
      <div className='h-[90px] bg-[#3854a0] shadow-lg flex justify-center items-center w-[100%]'>
        <Header />
      </div>
      <div className=' flex mx-4 mt-4'>
        <div className='w-[30%] mr-4'>
        <Navbar />
        </div>
        <div className='w-[80%] ml-4'>
        <TableResult />
        <Records />
        </div>
      </div>
    </div>
  );
}

export default App;
