import { ReactElement } from "react";
import TopNavBar from "./TopNavBar";
import Page from "./Page";

interface LayoutProps {
  children: ReactElement;
}

const Layout = (props: LayoutProps): ReactElement => {
  return (
    <>
      <TopNavBar />
      <Page>{props.children}</Page>
    </>
  );
};

export default Layout;
