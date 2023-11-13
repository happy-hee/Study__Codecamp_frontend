import { useRouter } from "next/router";
import LayoutNavigationrUI from "./LayoutNavigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();

  const onclickMoveToBoard = () => {
    router.push(`/boards`);
    console.log("자유게시판으로 이동");
  };

  const onclickMoveToMarket = () => {
    console.log("중고마켓으로 이동");
  };

  const onclickMoveToMypage = () => {
    console.log("마이페이지로 이동");
  };

  return (
    <LayoutNavigationrUI
      onclickMoveToBoard={onclickMoveToBoard}
      onclickMoveToMarket={onclickMoveToMarket}
      onclickMoveToMypage={onclickMoveToMypage}
    />
  );
}
