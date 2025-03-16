import "./App.css";
import BlogPage from "./components/BlogPage";
import ContentComponent from "./components/ContentComponent";
import { ThemeProvider } from "./context/ThemeProvider";
import UserInfoContext from "./context/UserInfoContext";
import { useContext } from "react";

function App() {
  const userInfo = {username: "admin", isAdmin: true}
  return (
    <div>
     {/* <UserInfoContext.Provider value={userInfo}>
        <BlogPage></BlogPage>
     </UserInfoContext.Provider> */}

     <ThemeProvider>
      <ContentComponent></ContentComponent>
     </ThemeProvider>



    </div>
  );
}


export default App;
