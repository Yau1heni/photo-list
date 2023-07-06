import { Button, Flex, TextInput, NativeSelect } from '@mantine/core';
import { FC, useState } from 'react';
import { applyKeywordSearch } from '../../store/cards-slice.ts';
import { useDispatch } from 'react-redux';

const data = ['all', 'cars', 'football', 'nature'];

export const SearchBar: FC<SearchBarPropsType> = ({ selectValue, onChange }) => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');

  const applyKeywordSearchHandler = () => dispatch(applyKeywordSearch({ keyword }));

  return (
    <Flex align={'center'} direction={'column'} gap="md">
      <Flex>
        <TextInput
          placeholder="title search"
          value={keyword}
          onChange={(event) => setKeyword(event.currentTarget.value)}
        />
        <Button onClick={applyKeywordSearchHandler}>search</Button>
      </Flex>
      <NativeSelect
        size={'md'}
        value={selectValue}
        onChange={(event) => onChange(event.currentTarget.value)}
        data={data}
        label="Select the categories you want"
        placeholder="Pick all that you like"
      />
    </Flex>
  );
};

type SearchBarPropsType = {
  selectValue: string;
  onChange: (value: string) => void;
};
