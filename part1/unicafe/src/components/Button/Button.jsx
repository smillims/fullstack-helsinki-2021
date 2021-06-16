import style from './Button.module.css';

function Button({ rating }) {
  function handleClick(quality, setQuality) {
    setQuality(quality + 1);
  }

  return (
    <div className={style.groupButtons}>
      {rating.map((item) => (
        <button key={item.textQuality} onClick={() => handleClick(item.quality, item.setQuality)}>
          {item.textQuality}
        </button>
      ))}
    </div>
  );
}

export default Button;
