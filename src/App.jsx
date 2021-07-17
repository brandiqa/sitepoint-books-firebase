import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'

import Home from './screens/Home'
import NotFound from './screens/NotFound'
import ScreenCategoryList from './screens/category/List'
import ScreenAuthorList from './screens/author/List'
import ScreenBookList from './screens/book/List'
import ScreenLogin from './screens/auth/Login'
import ScreenJoin from './screens/auth/Join'

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="container flex-grow p-4 mx-auto">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/category/list">
            <ScreenCategoryList />
          </Route>
          <Route path="/author/list">
            <ScreenAuthorList />
          </Route>
          <Route path="/book/list">
            <ScreenBookList />
          </Route>
          <Route path="/login">
            <ScreenLogin />
          </Route>
          <Route path="/join">
            <ScreenJoin />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default App
