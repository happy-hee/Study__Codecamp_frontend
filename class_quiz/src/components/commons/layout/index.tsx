import LayoutHeader from "./header";
import LayoutBanner from "./banner";
import LayoutNavigation from "./navigation";
import LayoutSidebar from "./sidebar";
import LayoutFootr from "./footer";

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps): JSX.Element {
  return (
    <div>
      <LayoutHeader />
      <LayoutBanner />
      <LayoutNavigation />
      <div style={{ height: "400px", display: "flex" }}>
        <LayoutSidebar />
        <div style={{ width: "70&" }}>{props.children}</div>
      </div>
      <LayoutFootr />
    </div>
  );
}
