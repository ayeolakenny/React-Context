import React from 'react';
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import ThemeContextProvider from './contexts/ThemeContext'
import AuthContextProvider from './contexts/AuthContext'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="App">
    <ThemeContextProvider>
    	<AuthContextProvider>
	      <Navbar />
	      <BookList />
	      <ThemeToggle />
    	</AuthContextProvider>
    </ThemeContextProvider>
    </div>
  );
}

export default App;
