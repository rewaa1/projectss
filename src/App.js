import logo from './logo.svg';
import './App.css';
import Card from './card';
import Nav from './nav';
import Card2 from './card2';
import Card3 from './card3';
import Learn from './learn';


function App() {
  return (
    <>
      <Nav/>
      <div className='border-2 h-screen flex flex-nowrap justify-evenly py-4 bg-stone-300'>
       <Card/><Card2/><Card3/>
      </div>
      <div>
        <Learn/>
      </div>
      
    </>
  );
}

export default App;
