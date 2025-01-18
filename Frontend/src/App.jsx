
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Inbox from './component/Inbox'
import Navbar from './component/Navbar'
import Sidebar from './component/Sidebar'
import Body from './component/Body'
import Mail from './component/Mail'
import SendEmail from './component/SendEmail'
import Login from './component/Login'
import Signup from './component/Signup'
import  { Toaster } from 'react-hot-toast';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<Inbox/>,
      },
      {
        path:"/mail/:id",
        element:<Mail/>,
      }
    ]
  },
  {
    path:"/login",
    element:<Login/>
  },
  {
    path:"/signup",
    element:<Signup/>
  }
])

function App() {


  return (

    <div className='bg-[#F6F8FC] h-screen'>
      <Navbar />
      <RouterProvider router={appRouter}/>
      <div className='absolute w-[30] bottom-0 right-20 z-10'>
        <SendEmail/>
      </div>
      <Toaster/>
    </div>


  )
}

export default App
