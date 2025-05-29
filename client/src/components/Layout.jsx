
import { Outlet } from "react-router-dom";
import Options from "./Options";


const Layout = () => {
  return (
    
      <div>
     <header> 
      <Options></Options>
    
        
        </header>
        <main>
        <Outlet />
        </main>  
      <footer></footer>  
     </div>
  );
};

export default Layout;