import Header from "./components/header";
import Menu from "./pages/menu";
import ListarTarefa from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <div className="App">
      <Header />
      <Menu />
      <ListarTarefa />
    </div>
  );
}

export default App;
