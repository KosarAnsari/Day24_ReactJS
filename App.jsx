import { BrowserRouter, Routes, Route, Link } from 'react-router';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';
function App() {
  return (
    <>
      <h1>React Router Setup</h1>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
        <hr/>
        <p>
          1. BrowserRouting : This Component enables client-side routing using
          the browser's history API. we use BrowserRouter mostly in main file to
          use it on top level.
          <p>
            <span style={{ fontWeight: 'bold' }}>Client-side Routing</span> do
            not refresh a site while moving from one to another page. eg, React
            official documentation. On the other hand,{' '}
            <span style={{ fontWeight: 'bold' }}>Server-side Routing </span>
            lets you refresh the site everytime you moves from one page to
            another . eg , NASA website. it needs Browser history API, so by
            clicking back arrow it gets you to the page which was previously
            opened.
          </p>
        </p>
        <p>
          2. Routes : It's responsible for rendering the appropriate component
          based on the current URL.
        </p>
        <p>3. Route : Each Route component defines a path and the corresponding component to render when that path is matched.</p>
        <p>4. Link : A link for navigate from 1 page to other page.</p>
      </BrowserRouter>
    </>
  );
}
export default App;
