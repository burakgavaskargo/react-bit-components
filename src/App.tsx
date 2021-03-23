import './App.css';
import ButtonDemo from './demo/button.demo';
import TypeaheadDemo from './demo/typeahead.demo';

function App() {
  let demoType = 'typeahead';
  
  const NoDemoSelected = () => <div>No Demo Selected</div>;

  return (
    <>
      {
        demoType === 'button' ? <ButtonDemo /> :
        demoType === 'typeahead' ? <TypeaheadDemo /> :
        <NoDemoSelected />
      }
    </>
  );
}

export default App;
