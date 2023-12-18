import React from "react";
import { ThemeModal } from "./index.style";

const CustomModal = ({ isModalOpen, setIsModalOpen, children }) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <ThemeModal title='' centered open={isModalOpen} onCancel={handleCancel}>
      {children}
    </ThemeModal>
  );
};

export default CustomModal;
