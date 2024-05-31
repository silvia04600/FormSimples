import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">

      <h2>Cadastro</h2>
      <div className="styles.container">
      <MyForm user={{ name: "Josias", email: "josias@hotmail.com" }} />
      </div>
      
    </div>
  );
}

export default App;
