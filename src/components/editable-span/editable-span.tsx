import { ChangeEvent, FC, useState } from 'react';
import { Input } from '@mantine/core';

type EditableSpanPropsType = {
  title: string;
  changeTitle: (newTitle: string) => void;
};

export const EditableSpan: FC<EditableSpanPropsType> = ({ title, changeTitle }) => {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [newTitle, setTitle] = useState(title);

  const onEditMode = () => {
    setIsEditMode(true);
  };
  const offEditMode = () => {
    setIsEditMode(false);
    changeTitle(newTitle);
  };
  const onChangeEditHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  return isEditMode ? (
    <Input value={newTitle} onBlur={offEditMode} onChange={onChangeEditHandler} />
  ) : (
    <span onDoubleClick={onEditMode}>{title}</span>
  );
};
