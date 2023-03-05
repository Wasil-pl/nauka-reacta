import Hero from './components/Hero/Hero';
import SearchForm from './components/SearchForm/SearchForm';
import List from './components/List/List';
import Container from './components/Container/Container';

/*  Skoro nazwa tagu jest napisana z małej litery, to JSX potraktuje taki element jak zwykły element HTML. Co innego jednak z <Hero /> i <SearchForm />. 
Skoro mamy tu nazwę tagów napisaną wielką literą, to jest to od razu informacja dla Webpacka: to jest funkcja komponent, włącz ją, i wpisz tu to, co zwróci. 
Tym samym Webpack zrobi w tym miejscu to samo, co w przypadku <App /> i pliku index.js. Po prostu włączy te funkcje i zwróci w widoku <App /> to, co zwracają funkcje komponenty Hero i SearchForm */

const App = () => {
  return (
    <Container>
      <Hero />
      <SearchForm />
      <List />
    </Container>
  );
};

export default App;
