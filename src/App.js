import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">

      <h2>Cadastre-se</h2>
      <div className="styles.container">
      <MyForm user={{ name: "Josias", email: "josias@hotmail.com" }} />
      </div>
      
    </div>
  );
}

export default App;
