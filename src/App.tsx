import "./App.css";
import Header from "./components/header/header";
import { AppRoutes } from "./routes/routes";

function App() {
  return (
    <main className="ladding">
      <Header></Header>
      <div className="landing-container">
        <AppRoutes />
      </div>
    </main>
  );
}

export default App;
