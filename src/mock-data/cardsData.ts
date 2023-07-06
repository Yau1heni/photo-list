export type RatingType = 1 | 2 | 3 | 4 | 5;

export type CardDataType = {
  id: string;
  title: string;
  description: string;
  imgUrl: string;
  category: string;
  rating: RatingType;
};

export type CardsDataType = CardDataType[];

export const cardsData: CardsDataType = [
  {
    id: '1',
    title: 'sadas',
    description: 'dasdasdas',
    imgUrl:
      'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'cars',
    rating: 1,
  },
  {
    id: '2',
    title: 'asdasd',
    description: 'asdasdas',
    imgUrl:
      'https://images.pexels.com/photos/3156482/pexels-photo-3156482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    category: 'cars',
    rating: 2,
  },
  {
    id: '3',
    title: 'asdasd',
    description: 'sadsadasdasd adsa dad ',
    imgUrl:
      'https://images.pexels.com/photos/457418/pexels-photo-457418.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'cars',
    rating: 1,
  },
  {
    id: '4',
    title: 'asdasd',
    description: 'sadsadasdasd adsa dad ',
    imgUrl:
      'https://images.pexels.com/photos/6495104/pexels-photo-6495104.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'football',
    rating: 4,
  },
  {
    id: '5',
    title: 'asdasd',
    description: 'sadsadasdasd adsa dad ',
    imgUrl:
      'https://images.pexels.com/photos/6078297/pexels-photo-6078297.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'football',
    rating: 1,
  },
  {
    id: '6',
    title: 'asdasd',
    description: 'sadsadasdasd adsa dad ',
    imgUrl:
      'https://images.pexels.com/photos/16543174/pexels-photo-16543174.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'football',
    rating: 1,
  },
  {
    id: '7',
    title: 'asdasd',
    description: 'sadsadasdasd adsa dad ',
    imgUrl:
      'https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'nature',
    rating: 1,
  },
  {
    id: '8',
    title: 'asdasd',
    description: 'sadsadasdasd adsa dad ',
    imgUrl:
      'https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'nature',
    rating: 1,
  },
  {
    id: '9',
    title: 'asdasd',
    description:
      'sd assadasdasd asd sad asd as dasd asd asdasd asd asd asd assadasdasd asd sad asd as dasd asd asdasd asd asd asd asdasd asd asdasd asd asd asd asd asdsa dad ',
    imgUrl:
      'https://images.pexels.com/photos/4064432/pexels-photo-4064432.jpeg?auto=compress&cs=tinysrgb&w=400',
    category: 'nature',
    rating: 1,
  },
];
