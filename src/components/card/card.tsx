import { FC, KeyboardEvent, useState } from 'react';
import styles from './card.module.scss';
import { CardDataType, RatingType } from '../../mock-data/cardsData.ts';
import { Rating } from '@mantine/core';
import { setRating, updateDescription } from '../../store/cards-slice.ts';
import { useDispatch } from 'react-redux';
import { EditableSpan } from '../editable-span/editable-span.tsx';

export const Card: FC<CardPropsType> = ({ cardData }) => {
  const dispatch = useDispatch();
  const [isShowDescription, setIsShowDescription] = useState(false);

  const onClickShowDescriptionHandler = () => setIsShowDescription(!isShowDescription);

  const onKeyDownShowDescriptionHandler = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onClickShowDescriptionHandler();
    }
  };

  const setRatingHandler = (ratingValue: RatingType) => {
    dispatch(setRating({ id: cardData.id, ratingValue }));
  };

  const updateDescriptionHandler = (description: string) => {
    dispatch(updateDescription({ id: cardData.id, description }));
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.title}>{cardData.title}</h2>
        <h3>Category: {cardData.category}</h3>
      </div>

      <div
        className={styles.imgContainer}
        onClick={onClickShowDescriptionHandler}
        role={'button'}
        tabIndex={0}
        onKeyDown={onKeyDownShowDescriptionHandler}
      >
        <img src={cardData.imgUrl} alt="img" className={styles.img} />
      </div>
      <Rating value={cardData.rating} onChange={setRatingHandler} />
      {isShowDescription && (
        <EditableSpan title={cardData.description} changeTitle={updateDescriptionHandler} />
      )}
    </div>
  );
};

type CardPropsType = {
  cardData: CardDataType;
};
