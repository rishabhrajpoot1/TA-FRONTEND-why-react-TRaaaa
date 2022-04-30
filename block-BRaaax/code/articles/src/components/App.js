import { buttonSizes, buttonTypes } from './buttonInfo';
function App() {
  return (
    <>
      <Button label='Click Me' />
      <Button
        size={buttonSizes.SMALL}
        label='Click Me'
        type={buttonTypes.SECONDARY}
      />
      <Button
        size={buttonSizes.MEDIUM}
        label='Click Me'
        type={buttonTypes.TERTIARY}
        onClickHandler={() => alert('You Clicked Me!')}
      />
      <Button disabled />
    </>
  );
}
function Button(props) {
  function getStyles() {
    let { type = buttonTypes.PRIMARY, size = buttonSizes.MEDIUM } = props;
    return `button button--${type} button--${size}`;
  }
  return (
    <>
      <button
        onClick={props.onClickHandler}
        className={getStyles()}
        disabled={props.disabled}
      >
        {props.label || 'Button'}
      </button>
    </>
  );
}

export default App;