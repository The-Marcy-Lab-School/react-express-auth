export default function SafeButton({ isSafe, setIsSafe }) {
  function clickHandler() {
    setIsSafe(!isSafe);
    console.log(isSafe);
  }

  return (
        <button className='safe-button' onClick={clickHandler}>
            <div>Solace</div>
        </button>
  );
}
