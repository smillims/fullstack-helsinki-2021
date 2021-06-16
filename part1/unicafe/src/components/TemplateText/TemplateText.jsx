import style from './TemplateText.module.css';

function TemplateText({ text }) {
  return <h3 className={style.header}>{text}</h3>;
}

export default TemplateText;
