import Column from '../Column/Column';
import styles from './List.module.scss';
import shortid from 'shortid';
import ColumnForm from '../ColumnForm/ColumnForm';
import { useState } from 'react';

const List = () => {

  const [columns, setColumns] = useState([
    {
      id: 1,
      title: 'Books',
      icon: 'book',
      cards: [
        { id: 1, title: 'This is Going to Hurt' },
        { id: 2, title: 'Interpreter of Maladies' }
      ]
    },
    {
      id: 2,
      title: 'Movies',
      icon: 'film',
      cards: [
        { id: 1, title: 'Harry Potter' },
        { id: 2, title: 'Star Wars' }
      ]
    },
    {
      id: 3,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        { id: 1, title: 'The Witcher' },
        { id: 2, title: 'Skyrim' }
      ]
    }
  ]);

  const addColumn = newColumn => {
		setColumns([...columns, { id: shortid(), title: newColumn.title, icon: newColumn.icon, cards: [] }]);
  };

  
    /* Co tu widzimy? Przede wszystkim to, że funkcja będzie potrzebować aż dwóch informacji. Musi bowiem nie tylko wiedzieć, jaką kartę trzeba dodać, 
    ale też do której kolumny. Następnie tworzymy nową tablicę columns na podstawie starej. Używamy do tego znanej Ci już metody .map. Przechodzimy po każdym elemencie
    i jeśli id argumentu columnId pasuje, to zwracamy w miejsce starego obiektu kolumny nowy. Taki, który ma wszystkie stare właściwości (...column),
    ale jego właściwość cards ma być teraz nową tablicą, która ma stare dane (...column.cards) + nowy obiekt. Nową kartę, o takim tytule, jaki przekazaliśmy
    w pierwszym argumencie funkcji. Z kolei else dba o to, aby w przypadku innych kolumn zwracać je bez zmian. */ 

  const addCard = (newCard, columnId) => {
    const columnsUpdated = columns.map(column => {
      if(column.id === columnId)
        return { ...column, cards: [...column.cards, { id: shortid(), title: newCard.title }]}
      else
        return column
    })

    setColumns(columnsUpdated);

  };

  return (
    <div className={styles.list}>

      <header className={styles.header}>
        <h2 className={styles.title}>Things to do<span> soon!</span></h2>
      </header>

      <p className={styles.description}>Interesting things I want to check out</p>

      <section className={styles.columns}>
        {columns.map(column => <Column id={column.id} title={column.title} icon={column.icon} cards={column.cards} action={addCard} />)}    {/* action: przekazujemy referencję addCard z List do Column */}
      </section>

      <ColumnForm action={addColumn} />

    </div>
  );
};

export default List;