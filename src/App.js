import './App.css';
import Imgprofile from './component/profile/ProfilePhoto';
import Fullname from './component/profile/FullName'
import Adresse from './component/profile/Address'

function App() {
  return (
    <>
    
    <div className="App">
      <div className="cart">
     <div className="profilepic">
     <Imgprofile />
     </div>
     <div className="profileinfo">

     <Fullname /> 
    <Adresse />
    </div>

    </div>
    </div>
    </>
  );
}

export default App;

