import Home from "./pages/Main";
import "../public/styles.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
function App() {
  const auth = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (auth) {
      const name = localStorage.getItem("userData")?.split('"');
      const favicon = document.getElementById("favicon");
      const avatar = localStorage.getItem("avatar")?.split('"');
      document.title = `${name[1]}'s LinkTree`;
      favicon.setAttribute("href", `${avatar[1]}`);
    }
  }, []);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
