import { ReactElement } from "react";
import { Container } from "reactstrap";

interface PageProps {
  children: ReactElement;
}

const Page = (props: PageProps): ReactElement => {
  return <Container>{props.children}</Container>;
};

export default Page;
