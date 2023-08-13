import './App.css';
import Listing from './components/Listing/Listing';
import productsData from './data/etsy.json';

function App() {  
  return (   
   <div className='container'>
      <Listing items={productsData}/>
    </div>
  );
}

export default App;
