import { Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function ModalAelertPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const showModal = (): void => {
    setIsOpen(true);
  };

  const handleOk = (): void => {
    setIsOpen(true);
  };

  const handleCancel = (): void => {
    setIsOpen(false);
  };

  const handleComplete = (data: Address): void => {
    console.log(data);
    setIsOpen(false);
  };

  return (
    <>
      <button onClick={showModal}>모달창 열기</button>

      {/* 모달 종료 방식 - 1번. 모달 숨기기 (ex. 이력서 등 - 다시 열려도 데이터가 그대로 남아있음) */}
      {/* <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <DaumPostcodeEmbed onComplete={handleComplete} />
      </Modal> */}

      {/* 모달 종료 방식 - 2번. 모달 삭제하기 (ex. 비밀번호 등 개인정보 - 다시 열면 초기화가 되어서 데이터가 없음) */}

      {/* isOpen 이 false 일시 아무 일이 일어나지 않고, true일 경우에는 모달을 연다. */}
      {/* 1. 모달창 열기 버튼 클릭 => (showModal -> isOpen: true) => 모달이 열림 */}
      {/* 2. 주소를 클릭하면 모달이 닫힘 => (handleComplete -> isOpen: false) => 상태가 변하면서 화면 자체(button, Modal)가 다시 그려짐(리렌더링) */}
      {/* 3. 모달창 열기 버튼 클릭 => isOpen: false 였던 상태에서 다시 (showModal -> isOpen: true) => 되면서 새로운 모달이 열림 */}
      {isOpen && (
        <Modal open={isOpen} onOk={handleOk} onCancel={handleCancel}>
          <DaumPostcodeEmbed onComplete={handleComplete} />
        </Modal>
      )}
    </>
  );
}
