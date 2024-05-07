import logo from "./logo.svg";
import "./App.css";
import { useLocation } from "react-router-dom";
function App() {
  const location = useLocation();
  const { formData } = location.state;

  return (
    <div className="App">
      <header className="App-header">
        <h1>App</h1>
        <p>{formData.name}</p>
        <p>{formData.email}</p>
        <p>{formData.phone}</p>
        <p>{formData.address}</p>
        <p>{formData.area}</p>
        <p>{formData.governorate}</p>
        <p>{formData.type}</p>
      </header>
    </div>
  );
}

export default App;
