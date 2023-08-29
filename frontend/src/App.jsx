import { Fragment } from 'react';
import { useState } from 'react';
import className from "classnames/bind";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/routes';
import DeafultLayout from './components/Layouts/DefaultLayout/DefaultLayout';


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='container'>
        <Routes>
          {publicRoutes.map((route, index) => {
            // const Layout = route.layout === null ? Fragment : DeafultLayout
            let Layout = DeafultLayout;

            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }

            const Page = route.component
            return <Route key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              } />
          })}
        </Routes>
      </div>

    </BrowserRouter>
  )
}

export default App
