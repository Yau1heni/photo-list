import './App.css';
import { CardsList } from './components/cardsList/cards-list.tsx';
import { Header } from './components/header/header.tsx';

function App() {
  return (
    <>
      <Header title={'Photo List'} />
      <CardsList />
    </>
  );
}

export default App;
