import { Provider } from "react-redux";
import store from './Utils/store';
// import Profile from "./components/Profile";
import Footer from "./components/Footer";
// <Profile />

function App() {
  
  return (
    <>
    <Provider store={store}>
    <Footer />
      </Provider>
    </>
  )
}

export default App
