import { useRouter } from "next/router";
import LayoutNavigationrUI from "./LayoutNavigation.presenter";

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickNavMenu = (event: any): void => {
    void router.push(event.target.id);
  };

  return <LayoutNavigationrUI onClickNavMenu={onClickNavMenu} />;
}
