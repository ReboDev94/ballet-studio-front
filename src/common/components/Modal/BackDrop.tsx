import { twMerge } from 'tailwind-merge';
import { BACKDROP_CLASSES } from './styles';

const BackDrop = () => {
  return <div className={twMerge(BACKDROP_CLASSES)} />;
};

export default BackDrop;
