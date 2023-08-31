import { FC } from 'react';
import { SetSearchTitleProps } from '../../shared/types';
import './index.css';

const SearchTask: FC<SetSearchTitleProps> = ({
  searchTitle,
  setSearchTitle,
}: SetSearchTitleProps): JSX.Element => {
  return (
    <input
      type='text'
      value={searchTitle}
      className='searchTitle'
      onChange={(e) => setSearchTitle(e.target.value)}
      placeholder='Search title'
    />
  );
};

export default SearchTask;
