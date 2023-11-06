import { Button, Modal } from "antd";
import { useState } from "react";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function ModalAddressLibraryPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [viewAddress, setViewAddress] = useState("");

  const showModal = (): void => {
    setIsOpen(true);
  };

  const handleCancel = (): void => {
    setIsOpen(false);
  };

  const handleComplete = (data: Address): void => {
    console.log(data);
    // 3) 검색된 주소를 state를 활용하여 화면에 나타내 주세요.
    setViewAddress(String(data.address));
    // 1) 주소 검색 후, 최종적으로 주소를 선택하면 주소검색화면이 자동으로 사라지도록 만들어 주세요.
    // 2) 주소검색화면이 사라질 때, 모달도 종료되도록 만들어 주세요.
    setIsOpen(false);
  };

  return (
    <>
      <Button onClick={showModal}>모달 열기</Button>

      {/* isOpen 이 false 일시 아무 일이 일어나지 않고, true일 경우에는 모달을 연다. */}
      {isOpen && (
        <Modal
          title="주소 검색"
          open={isOpen}
          onCancel={handleCancel}
          footer={[
            <Button key="cancel" onClick={handleCancel}>
              닫기
            </Button>,
          ]}
        >
          <DaumPostcodeEmbed onComplete={handleComplete} />;
        </Modal>
      )}

      <p>{viewAddress}</p>
    </>
  );
}
