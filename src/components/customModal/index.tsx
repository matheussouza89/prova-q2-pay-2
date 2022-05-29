import React from 'react'
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'

interface CustomModalProps {
  isOpen: boolean
  handleClose: () => void
  title: string
  children: React.ReactNode
  footer?: React.ReactNode
}

const CustomModal = ({
  isOpen,
  handleClose,
  title,
  children,
  footer
}: CustomModalProps) => {
  return (
    <div className="modal">
      <Modal isOpen={isOpen} toggle={handleClose}>
        <ModalHeader toggle={handleClose}>
          <h4 className="modal-title">{title}</h4>
        </ModalHeader>
        <ModalBody>{children}</ModalBody>
        <ModalFooter>{footer}</ModalFooter>
      </Modal>
    </div>
  )
}

export default CustomModal
