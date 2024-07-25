import Home from "./pages/Main";
import "../public/styles.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    const name = localStorage.getItem("userData").split('"');
    const favicon = document.getElementById("favicon");
    const avatar = localStorage.getItem("avatar").split('"');
    document.title = `${name[1]}'s LinkTree`;
    favicon.setAttribute("href", `${avatar[1]}`);
  });
  return (
    <>
      <Home />
    </>
  );
}

export default App;
