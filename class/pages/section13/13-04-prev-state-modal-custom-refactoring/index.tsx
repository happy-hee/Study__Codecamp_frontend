import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function ModalAelertPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  // const showModal = (): void => {
  //   setIsOpen((prev) => !prev);
  // };

  // const handleOk = (): void => {
  //   setIsOpen((prev) => !prev);
  // };

  // const handleCancel = (): void => {
  //   setIsOpen((prev) => !prev);
  // };

  // const handleComplete = (data: Address): void => {
  //   console.log(data);
  //   setIsOpen((prev) => !prev);
  // };

  const onToggleModal = (): void => {
    setIsOpen((prev) => !prev);
  };

  const handleComplete = (data: Address): void => {
    console.log(data);
    onToggleModal();
  };

  return (
    <>
      <button onClick={onToggleModal}>모달창 열기</button>

      {isOpen && (
        <Modal open={isOpen} onOk={onToggleModal} onCancel={onToggleModal}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
