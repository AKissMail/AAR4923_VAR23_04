
import './style/app.css';
import Header from "./component/Header";
import {Footer} from "./component/Footer";
import {IFrame} from "./component/HTML";

function App() {
  return (
    <div className="App">
      <Header />
        <IFrame />
      <Footer />

    </div>
  );
}

export default App;
