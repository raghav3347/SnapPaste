import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import NavBar from './components/NavBar';
import Paste from './components/Paste';
import Home from './components/Home';
import ViewPaste from './components/ViewPaste';


const router = createBrowserRouter(
  [
    {
      path:"/",
      element: 
      <div>
        <NavBar/>
        <Home/>
      </div>
    },{
      path:"/pastes",
      element: 
      <div>
        <NavBar/>
        <Paste />
      </div>
    },{
      path:"/pastes/:id",
      element: 
      <div>
        <NavBar/>
        <ViewPaste/>
      </div>
    },
  ]
);
function App() {

  return (
    <>
      <div>
        <RouterProvider router={router}/>
      </div>
    </>
  )
}

export default App
