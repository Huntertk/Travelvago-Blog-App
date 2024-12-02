import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from 'react-hot-toast';

const Layout = lazy(() => import('./components/Layout/Layout'))

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading</h1>}>
      <Toaster  position="top-right" />
        <Routes>
         <Route path="/" element={<Layout />}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App