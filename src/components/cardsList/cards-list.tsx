import { Card } from '../card/card.tsx';
import styles from './cards-list.module.scss';
import { useAppSelector } from '../../hooks/use-app-selector.ts';
import { useState } from 'react';
import { CardsDataType } from '../../mock-data/cardsData.ts';
import { SearchBar } from '../search-bar/search-bar.tsx';
import { Fade } from 'react-awesome-reveal';

export const CardsList = () => {
  const cards = useAppSelector((state) => state.cards);
  let filteredData: CardsDataType;
  const [category, setCategory] = useState('all');

  if (category !== 'all') {
    filteredData = cards.filter((card) => card.category === category);
  } else filteredData = cards;

  const dataList = filteredData.map((card) => <Card key={card.id} cardData={card} />);

  return (
    <>
      <SearchBar selectValue={category} onChange={setCategory} />
      <div className={styles.container}>
        <Fade>{dataList}</Fade>
      </div>
    </>
  );
};
