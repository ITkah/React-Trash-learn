import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './css/main.css';
import Header from './components/Header/Header.jsx';
import Nav from './components/Nav/Nav.jsx';
import Profile from './components/Profile/Profile.jsx';
import Footer from './components/Footer/Footer.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import Music from './components/Music/Music.jsx';

const App = (props) => {
    return (
      <BrowserRouter>
        <div className="wrapper" id="wrapper">
          <Header />
          <main className="main" id="main">
            <Nav />
              <Route path='/profile' render={ () => <Profile posts={props.posts}/> }/>
              <Route path='/dialogs' render={ () => <Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/> }/>
              <Route path='/music'   render={ () => <Music/> }/>
          </main>
          <footer className="footer" id="footer">
            <Footer />
          </footer>
        </div>
      </BrowserRouter>
    );
}

export default App;
