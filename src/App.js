import Container from './components/Container/Container';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import { Routes, Route } from 'react-router-dom';
import NoMatch from './components/NoMatch/NoMatch';

/*  Skoro nazwa tagu jest napisana z małej litery, to JSX potraktuje taki element jak zwykły element HTML. Co innego jednak z <Hero /> i <SearchForm />. 
Skoro mamy tu nazwę tagów napisaną wielką literą, to jest to od razu informacja dla Webpacka: to jest funkcja komponent, włącz ją, i wpisz tu to, co zwróci. 
Tym samym Webpack zrobi w tym miejscu to samo, co w przypadku <App /> i pliku index.js. Po prostu włączy te funkcje i zwróci w widoku <App /> to, co zwracają funkcje komponenty Hero i SearchForm */

const App = () => {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
