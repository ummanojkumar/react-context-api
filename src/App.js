import "./App.css";
import BlogPage from "./components/BlogPage";
import UserInfoContext from "./context/UserInfoContext";
import { useContext } from "react";

function App() {
  const userInfo = {username: "admin", isAdmin: true}
  return (
    <div>
     <UserInfoContext.Provider value={userInfo}>
        <BlogPage></BlogPage>
     </UserInfoContext.Provider>
    </div>
  );
}


export default App;
