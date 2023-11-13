import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();

  const onClickLogo = () => {
    router.push("/boards");
  };

  const onClickMoveToSignIn = () => {
    console.log("로그인");
    router.push("/signin");
  };

  const onClickMoveToSignUp = () => {
    console.log("회원가입");
    router.push("/signup");
  };

  return (
    <LayoutHeaderUI
      onClickLogo={onClickLogo}
      onClickMoveToSignIn={onClickMoveToSignIn}
      onClickMoveToSignUp={onClickMoveToSignUp}
    />
  );
}
