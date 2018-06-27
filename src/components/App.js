import React from 'react'
import Footer from './Footer'
import Search from '../containers/Search'
import VisibleTodoList from '../containers/VisibleSelectionList'
import VisibleUserList from '../containers/VisibleUserList'

const App = () => (
  <div className="mainContainer">
  <div className="listBox">
    <Search />
    <VisibleTodoList />
      <Footer />
      </div>
      <VisibleUserList />
      <br clear="all"/>
  </div>
)

export default App
