import { FC } from 'react';

export const Header: FC<HeaderPropsType> = ({ title }) => {
  return <h1>{title}</h1>;
};

type HeaderPropsType = {
  title: string;
};
