import "./App.css";
import Router from "./components/Router/Router";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router />
      <Toaster />
    </>
  );
}

export default App;
