import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import CHeader from './components/CHeader';

function App() {
  return (
   
    <div className="App">
      <h1>Start Exploring</h1>
      <Header name = "Coder" cid = "001">
        <h5>Champion</h5>
      </Header>
      <Header name = "Coder" cid ="002"/>
      <CHeader/>
    </div>
  );
}

export default App;
