import "./App.css";
import MyForm from "./components/MyForm";

function App() {
  return (
    <div className="App">

      <h2>Cadastre-se</h2>
      <div className="styles.container">
      <MyForm user={{ name: "Josias", email: "josias@hotmail.com", bio: "https://form-simples.vercel.app/ ////https://zv-8c30p4to6-silvia-franciscas-projects.vercel.app/",}} />
      </div>
      
    </div>
  );
}

export default App;
