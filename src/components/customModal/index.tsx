import React from 'react'
import { Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

interface CustomModalProps {
  isOpen: boolean
  handleClose: () => void
  title: string
  children: React.ReactNode
  footer?: React.ReactNode
  size?: string
}

const CustomModal = ({
  isOpen,
  handleClose,
  title,
  children,
  footer,
  size = 'lg'
}: CustomModalProps) => {
  return (
    <div className="modal">
      <Modal size={size} isOpen={isOpen} toggle={handleClose}>
        <ModalHeader toggle={handleClose}>
          <Label className="modal-title">{title}</Label>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </Modal>
    </div>
  )
}

export default CustomModal
