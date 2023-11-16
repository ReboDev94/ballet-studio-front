/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react';
import { Button, Modal } from '@/common/components';

interface ModalConfirmProps {
  open: boolean;
  title: string;
  description: string;
  cancelLabelButton?: string;
  acceptLabelButton?: string;
  onAccept?: () => void;
  onCancel?: () => void;
}

const ModalConfirm: React.FC<ModalConfirmProps> = ({
  open,
  title,
  description,
  cancelLabelButton = 'Cancelar',
  acceptLabelButton = 'Aceptar',
  onAccept = () => {},
  onCancel = () => {},
}) => {
  return (
    <Modal value={open} center>
      <Modal.Header onClose={() => onCancel()}>
        <h3 className="text-base-600 font-semibold">{title}</h3>
      </Modal.Header>
      <Modal.Body>
        <p className="text-center text-lg mb-4">{description}</p>
        <div className="flex gap-4 justify-center">
          <Button
            size="xs"
            variant="outline-primary"
            onClick={() => onCancel()}
          >
            {cancelLabelButton}
          </Button>
          <Button
            size="xs"
            onClick={() => {
              onAccept();
              onCancel();
            }}
          >
            {acceptLabelButton}
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalConfirm;
