import { Card, CardTitle, Col, Row } from "reactstrap";

interface ContactCardProps {
  id?: number;
  image: string;
  title: string;
  link?: string;
}

const ContactCard = (props: ContactCardProps) => {
  return (
    <Card className="mb-3 p-2">
      <Row>
        <Col sm="2">
          <a href={props.link} target="_blank" rel="noreferrer">
            <img src={props.image} alt="" width="30px" height="30px" />
          </a>
        </Col>
        <Col sm="10">
          <CardTitle>{props.title}</CardTitle>
        </Col>
      </Row>
    </Card>
  );
};

export default ContactCard;
