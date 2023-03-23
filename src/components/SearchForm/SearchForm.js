import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateSearchInput } from '../../redux/store';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';
import styles from './SearchForm.module.scss';


/* Widząc kod:
<TextInput placeholder="Search..." />
...nie będziemy mówić o komponencie TextInput z atrybutem placeholder, tylko o komponencie TextInput z parametrem placeholder. 
Skąd takie nazewnictwo? Z wiedzy, co dzieje się pod maską. Doskonale wiemy, że <TextInput />, to nie żaden element HTML, tylko tak naprawdę zwykła funkcja. 
A funkcję odbierają dane z zewnątrz właśnie pod postacią parametrów, nie atrybutów. Dobrze wiemy, że koniec końców placeholder będzie przekazany po prostu jako argument do funkcji TextInput */ 

/*  <Button>...</Button>
Jeśli wpiszemy jakąś treść między tag otwarcia a tag zamknięcia komponentu, to Webpack tego nie zignoruje, 
tylko przekaże taką wartość do funkcji pod nazwą parametru children. 
Trzeba jeszcze tylko zmodyfikować odpowiednio js*/

const SearchForm = () => {

  const dispatch = useDispatch();

  const [searchInput, setSearchInput] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateSearchInput( searchInput ))
    setSearchInput('');
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <TextInput placeholder="Search..." type="text" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
      <Button>
        <span className="fa fa-search" />
      </Button>
    </form>
  );
};

export default SearchForm; 