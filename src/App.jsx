import { Provider } from "react-redux";
import store from './Utils/store';
import Footer from "./components/Footer";

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
