
import './style/app.css';
import Header from "./component/header";
import Footer from "./component/footer";
import Content from "./component/content";

function App() {
  return (
    <div className="App">
      <Header />
        <Content />
      <Footer />
    </div>
  );
}

export default App;
