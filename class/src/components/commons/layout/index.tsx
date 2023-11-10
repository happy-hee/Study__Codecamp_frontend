import { useRouter } from "next/router";
import LayoutBanner from "./banner";
import LayoutFooter from "./footer";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

// 헤더를 숨길 페이지 배열
const HIDDEN_HEADERS = [
  "/section13/13-01-library-icon",
  "/section13/13-02-library-star",
  // ...
  // ...
  // ...
];

interface IExampleProps {
  children: JSX.Element;
}

export default function Layout(props: IExampleProps): JSX.Element {
  const router = useRouter();
  console.log("================");
  console.log(router.asPath); // /section08/08-01-map-fruits
  console.log("================");

  // router.asPath 가 HIDDEN_HEADER에 포함되어 있는지 확인
  const isHiddenHeaders = HIDDEN_HEADERS.includes(router.asPath)

  return (
    <div>
      {/** HIDDEN_HEADERS 에 포함있는 부분이 아닐 경우만 <LayoutHeader /> 표시 */}
      {!isHiddenHeaders && <LayoutHeader />}
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ height: "500px", display: "flex" }}>
        <div style={{ width: "30%", backgroundColor: "orange" }}>사이드바</div>
        <div style={{ width: "70%" }}>{props.children}</div>
      </div>
      <LayoutFooter />
    </div>
  );
}
