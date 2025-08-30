import { StrictMode } from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/Home/Home'
import About from './components/About/About'
import RouteLayout from './Route'
import Contact from './components/Contact/Contact'
import User from './components/User/User'
import Github, { gitInfoLoader } from './components/Github/Github'



// const router = createBrowserRouter([{
//   path: '/',
//   element: <RouteLayout />,
//   children: [
//     {
//       path: '',
//       element: <Home />
//     }, 
//     {
//       path: 'about',
//       element: <About /> 
//     },
//     {
//       path: 'contact',
//       element: <Contact />
//     }
//   ]
// }])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RouteLayout/>} >
      <Route path='' element={<Home />} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:id' element={<User/>} />
      <Route 
      loader={gitInfoLoader}
      path='github'
      element={<Github/>} />
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
