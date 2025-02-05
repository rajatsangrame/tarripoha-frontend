import { Outlet } from "react-router-dom";
import NavigationBar from "./component/NavigationBar";

export default function App() {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  );
}
