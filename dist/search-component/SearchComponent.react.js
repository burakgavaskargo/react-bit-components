import { Grid,  } from '@material-ui/core';
import React, { useState } from 'react';
import SearchInput from '../search-input';
import Button from '../submit-button';
import './search-component.css';

const SearchComponent = (props) => {
  const { onFinish, data } = props;

  const [text, setText] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onSearch = () => {
    setIsLoading(true);

    // Mock api call
    setTimeout(() => {
      const filteredData = data.filter(
        person => person.name.toLowerCase().includes(text) ||
          person.surname.toLowerCase().includes(text)
      );
      onFinish(filteredData);
      setIsLoading(false);
    }, 750);
  }

  return (
    <form className='searchForm'>
      <Grid container spacing={3}>
        {/* Search field */}
        <Grid item xs={4}>
          <SearchInput
            placeholder={'Type name or surname to filter'}
            label='Search'
            disabled={isLoading}
            value={text}
            onChange={setText}
          />
        </Grid>
        {/* Submit button */}
        <Grid item xs={4} style={{ alignSelf: 'flex-end' }}>
          <Button
            onClick={onSearch}
            text='SEARCH NOW!'
            disabled={isLoading}
          />
        </Grid>
      </Grid>
    </form>
  );
}

export default SearchComponent;
  