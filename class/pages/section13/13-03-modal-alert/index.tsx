import { Modal } from "antd";

export default function ModalAelertPage(): JSX.Element {
  const onClickSuccess = (): void => {
    Modal.success({
      content: "게시글 등록에 성공 했습니다.",
    });
  };

  const onClickError = (): void => {
    Modal.error({
      content: "비밀번호를 확인해주세요.",
    });
  };

  return (
    <>
      <button onClick={onClickSuccess}>성공!!</button>
      <button onClick={onClickError}>실패!!</button>
    </>
  );
}
