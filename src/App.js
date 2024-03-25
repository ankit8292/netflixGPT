import { Provider} from 'react-redux';
import './App.css';
import Body from './components/Body'
import store from "./utils/store";

function App() {
  return (
    <Provider store={store} >
    <div className="">
      <Body />
    </div>
    </Provider>
  );
}

export default App;
