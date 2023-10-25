import Header from './Header';
import ModalComponent from './Modal';
import Body from './Body';
import { IModal } from './interfaces';
import Footer from './Footer';

const Modal = Object.assign(ModalComponent, {
  Header,
  Body,
  Footer,
});

export type ModalProps = IModal;
export default Modal;
