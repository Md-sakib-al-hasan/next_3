import Image from "next/image";
import UserRouterhoocks from "./components/UserRoutehoocks/UserRouterhoocks";
import { LocaleSwitcher } from "./components/WindoesReplaces/WinodesReplace";
import SortProducts from "./components/WinodesSeres/winodesserepath";

export default function Home() {
   
  return (
    <>
    <p>sk</p>
    <UserRouterhoocks></UserRouterhoocks>
    <LocaleSwitcher></LocaleSwitcher>
    <SortProducts></SortProducts>
    </>
  );
}
