// import logo from './assets/img/logo.svg';
import './assets/css/App.css';
 // import News from "./components/News";
 // import Home from "./components/Home";
// import KeyEvent from "./components/KeyEvent";
// import Vmt from "./components/Vmt";
// import ChangeFn from "./components/ChangeFn";
// import Reactfrom from "./components/Reactfrom";
// import Parent from "./components/Parent";
// import Lifecycle from "./components/Lifecycle";
// import HomeAxios from "./components/HomeAxios";
// import FetchJsonp from "./components/FetchJsonp";
import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
import Content from "./components/Content";
import User from "./components/User";

function App() {
  // let dataList = {
      // title:"新闻列表",
  //   list:[
  //     {
  //       name:"111111111111111"
  //     },
  //     {
  //       name:"222222222222"
  //     },
  //     {
  //       name:"3333333333333333"
  //     }
  //   ]
  // }
  return (
      <div className="App">
        <header className="App-header">
            <BrowserRouter>
                <Link to="/">首页</Link>
                <Link to="/news">列表</Link>
                <Link to="/user">用户管理</Link>
                <Routes>
                    {/*<Route exact path="/" element={<Home/>} />*/}
                    {/*<Route path="/news" element={<News/>} />*/}
                    <Route path="/content/:aid" element={<Content/>} />
                    <Route path="/content" element={<Content/>} />
                    <Route path="/user/*" element={<User/>} />

                </Routes>

            </BrowserRouter>
            {/*<FetchJsonp/>*/}
            {/*<HomeAxios/>*/}
            {/*<Lifecycle/>*/}
          {/*<Parent/>*/}
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<Home/>*/}
          {/*/!*<ChangeFn/>*!/*/}
          {/*<Reactfrom/>*/}
          {/*<Vmt/>*/}
          {/*<News datalist={dataList} />*/}
          {/*<img src={require('./assets/img/logo.svg').default} alt=""/>*/}
          {/*<a*/}
          {/*    className="App-link"*/}
          {/*    href="https://reactjs.org"*/}
          {/*    target="_blank"*/}
          {/*    rel="noopener noreferrer"*/}
          {/*>*/}
          {/*  Learn React*/}
          {/*</a>*/}
        </header>
        {/*<KeyEvent/>*/}
      </div>
  );
}

export default App;

