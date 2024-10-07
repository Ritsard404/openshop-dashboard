import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Gantt2 from "./page/ganttSync/Gantt2";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Layout />}>
          <Route index element={<Dashoard />}></Route>
          <Route path="products" element={<Products />}></Route>
        </Route>
        <Route path="login" element={<div>this is login page</div>}></Route> */}
        {/* <Route path="/" element={<GanttSampleSync />} /> */}
        {/* <Route path="/" element={<Gantt />} /> */}
        <Route path="/" element={<Gantt2 />} />
        {/* <Route path="/" element={<DisplayData />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
