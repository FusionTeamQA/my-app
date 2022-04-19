import './App.css';
import './sidebars.css';

import Header from './Components/Header';
import Intro from './Components/Intro';
import Experise from './Components/EXPERTISE';
import Skills from './Components/SKILLS';
import EXPERIENCE from './Components/EXPERIENCE';
import EDUCATION from './Components/EDUCATION';
import PROFILES from './Components/PROFILES';
import AWARDS from './Components/AWARDS';
import Portfolio from './Components/Portfolio';
import CLIENTS from './Components/CLIENTS';
import FOOTER from './Components/FOOTER';



function App() {
  return (
    <div className="App">
        <Sidebar/>
      <button className='change_botton' onClick={() => {
        const a = localStorage.getItem('theme');
        if (a === 'dark') {
          localStorage.setItem('theme', 'light')
        } else {
          localStorage.setItem('theme', 'dark')
        }
        window.location.reload()
      }}>
        Change style
      </button>
      <Header/>
      <Intro/>
      <Experise/>
      <Skills/>
      <EXPERIENCE/>
      <EDUCATION/>
      {/* <PROFILES/> */}
      {/* <AWARDS/> */}
      <Portfolio/>
      {/* <CLIENTS/> */}
      <FOOTER/>

      </div>
  );
}

export default App;
