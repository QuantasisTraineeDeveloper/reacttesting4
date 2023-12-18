import "antd/dist/antd.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "../src/style/common.css";
import AllRouts from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import "./style/toastStyle.scss";

function App() {
  return (
    <>
      <div className='App'>
        <AllRouts />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
