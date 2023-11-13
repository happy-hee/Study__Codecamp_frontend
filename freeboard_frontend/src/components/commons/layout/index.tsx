import LayoutBanner from "./banner";
import LayoutHeader from "./header";
import LayoutNavigation from "./navigation";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  return (
    <div>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <div>{props.children}</div>
    </div>
  );
}
