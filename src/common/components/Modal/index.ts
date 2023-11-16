import Header from './Header';
import ModalComponent from './Modal';
import Body from './Body';
import Footer from './Footer';
import { IModal } from './interfaces';

const Modal = Object.assign(ModalComponent, {
  Header,
  Body,
  Footer,
});

export default Modal;
export type { IModal };
