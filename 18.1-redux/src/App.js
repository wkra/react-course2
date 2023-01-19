import Counter from './components/Counter';
import Auth from "./components/Auth";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import UserProfile from "./components/UserProfile";


function App() {
    const isAuth = useSelector((state) => {
        return state.auth.isAuthenticated
    })
  return (
      <>
        <Header />
          {!isAuth && <Auth />}
          {isAuth && <UserProfile />}
        <Counter />

      </>
  );
}

export default App;
