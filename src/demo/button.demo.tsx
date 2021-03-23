import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import KrgButton from '../components/shared/krg-button';

function ButtonDemo() {
  type Size = 'small' | 'medium' | 'large' | 'xlarge';
  const [size, setSize] = useState<Size>('medium');

  return (
    <div style={{ margin: '20px' }}>
      <div>
        <div>
          <input
            type='radio'
            value='small'
            name='size'
            checked={size === 'small'}
            onChange={(e) => setSize(e.target.value as Size)}
          /> Small
          <input
            type='radio'
            value='medium'
            name='size'
            checked={size === 'medium'}
            onChange={(e) => setSize(e.target.value as Size)}
          /> Medium
          <input
            type='radio'
            value='large'
            name='size'
            checked={size === 'large'}
            onChange={(e) => setSize(e.target.value as Size)}
          /> Large
          <input
            type='radio'
            value='xlarge'
            name='size'
            checked={size === 'xlarge'}
            onChange={(e) => setSize(e.target.value as Size)}
          /> xLarge
        </div>
      </div>

      {/* Text Button */}
      <div style={{ display: 'flex', marginTop: '30px' }}>
        <KrgButton
          variant={'text'}
          size={size}
          text='TEXT BUTTON'
          onClick={() => console.log('Clicked text')}
        />
        <div style={{ paddingLeft: '25px' }}></div>
        <KrgButton
          variant={'text'}
          size={size}
          text='TEXT BUTTON'
          disabled
        />
      </div>
      
      {/* Space */}
      <br></br>
      <div style={{ padding: '10px' }}></div>

      {/* Outlined Button */}
      <div style={{ display: 'flex' }}>
        <KrgButton
          variant={'outlined'}
          size={size}
          text='OUTLINED BUTTON'
          onClick={() => console.log('Clicked outlined')}
        />
        <div style={{ paddingLeft: '25px' }}></div>
        <KrgButton
          variant={'outlined'}
          size={size}
          text='OUTLINED BUTTON'
          onClick={() => console.log('Clicked outlined')}
          startIcon={<DeleteIcon />}
        />
        <div style={{ paddingLeft: '25px' }}></div>
        <KrgButton
          size={size}
          variant={'outlined'}
          text='OUTLINED BUTTON'
          disabled
        />
      </div>
      
      {/* Space */}
      <br></br>
      <div style={{ padding: '10px' }}></div>

      {/* Contained Button */}
      <div style={{ display: 'flex' }}>
        <KrgButton
          variant={'contained'}
          size={size}
          text='CONTAINED BUTTON'
          onClick={() => console.log('Clicked contained')}
        />
        <div style={{ paddingLeft: '25px' }}></div>
        <KrgButton
          variant={'contained'}
          size={size}
          text='CONTAINED BUTTON'
          onClick={() => console.log('Clicked contained')}
          startIcon={<AddIcon />}
        />
        <div style={{ paddingLeft: '25px' }}></div>
        <KrgButton
          variant={'contained'}
          size={size}
          text='CONTAINED BUTTON'
          disabled
        />
      </div>
    </div>
  );
}

export default ButtonDemo;
