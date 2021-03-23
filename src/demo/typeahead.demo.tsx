import React from 'react';
import KrgTypeahead from '../components/shared/krg-typeahead';

function TypeaheadDemo() {
  const mockApiCall = (text: string): void => {
    setTimeout(() => {
      console.log('text', text);
    }, 500);
  }

  return (
    <div style={{ margin: '20px' }}>
      <KrgTypeahead
        onDebounceEnd={mockApiCall}
        onDebouncRestart={() => console.log('Debounce restarted')}
      />
      <div style={{ padding: '20px' }}></div>
      <KrgTypeahead errorMessage='This is a sample error!' />
      <div style={{ padding: '20px' }}></div>
      <KrgTypeahead disabled />
    </div>
  );
}

export default TypeaheadDemo;
