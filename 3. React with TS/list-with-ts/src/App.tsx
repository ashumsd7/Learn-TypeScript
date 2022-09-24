import "./App.css";
import { FaHeart } from "react-icons/fa";
import Customer from "./components/Customer";

function App() {
  return (
  
      <div className="h-screen bg-gray-200">
        

        <Customer name='React' age={34} title='By Facebook'/>


      </div>
  
  );
}

export default App;
