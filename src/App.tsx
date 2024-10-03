import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/shared/Layout";
import Dashoard from "./components/Dashoard";
import Products from "./components/Products";
import GanttSample from "./page/gantt/GanttSample";
import GanttSampleSync from "./page/ganttSync/GanttSampleSync";
import DisplayData from "./page/ganttSync/DisplayData";
import Gantt from "./page/ganttSync/Gantt";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Dashoard />}></Route>
          <Route path="products" element={<Products />}></Route>
        </Route>
        <Route path="login" element={<div>this is login page</div>}></Route> */}
        <Route path="/" element={<Gantt />} />
        {/* <Route path="/" element={<DisplayData />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
