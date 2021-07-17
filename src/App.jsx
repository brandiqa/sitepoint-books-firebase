import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './layout/Footer'
import Navbar from './layout/Navbar'

import Home from './views/Home'
import CategoriesView from './views/category/CategoriesView'
import AuthorsView from './views/author/AuthorsView'
import BooksView from './views/book/BooksView'
import LoginView from './views/auth/LoginView'
import RegisterView from './views/auth/RegisterView'
import NotFound from './views/NotFound'

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
            <CategoriesView />
          </Route>
          <Route path="/author/list">
            <AuthorsView />
          </Route>
          <Route path="/book/list">
            <BooksView />
          </Route>
          <Route path="/login">
            <LoginView />
          </Route>
          <Route path="/join">
            <RegisterView />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </>
  )
}

export default App
