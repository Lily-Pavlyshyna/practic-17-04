import { BiDollarCircle } from 'react-icons/bi';
import { FcBullish, FcBearish } from 'react-icons/fc';
import style from './ForbesListItem.module.css';
const ForbesListItem = ({ userName, avatar, capital, isIncrease }) => {
  return (
    <>
      <img className={style.avatar} src={avatar} alt={userName} />
      <h3 className={style.title}>{userName}</h3>
      <span className={style.capital}>
        {capital} <BiDollarCircle color="#2196f3" size={22} />
        {isIncrease ? <FcBullish /> : <FcBearish />}
      </span>
    </>
  );
};

export default ForbesListItem;
