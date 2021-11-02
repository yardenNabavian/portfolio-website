import { ReactElement } from "react";
import { Card, CardImg, CardText, CardTitle, Col, Row } from "reactstrap";
import Profile from "../images/myProfile.jpeg";

const About = (): ReactElement => {
  return (
    <Card body className="m-5">
      <Row>
        <Col sm="3">
          <CardImg src={Profile} />
        </Col>
        <Col sm="8">
          <CardTitle tag="h5">About Me:</CardTitle>
          <CardText>
            Junior Full-Stack Developer who is always looking to learn and
            improve. Currently studying .NET development at the HackerU academy.
            With a background in sales and business, I am able to see the big
            picture and work well in a team enviroment.
          </CardText>
          <CardTitle tag="h5">Tech Stack</CardTitle>
          <CardText>
            C#, ASP.NET, Entity Framework, SQL Server, MongoDB, HTML5, CSS3,
            JavaScript, TypeScript, React, FireBase
          </CardText>
          <CardTitle tag="h5">Work Experience:</CardTitle>
          <CardText>
            November 2016 - July 2019, Operational Comander and Staff Sargent in
            the Combat Engineer Corps, Israeli Defence Forces.
          </CardText>
          <CardText>
            July 2019 - March 2021, Sales Representative at Memo Global.
          </CardText>
          <CardText>
            January 2021 - Present, Managing Partner at Key-Force Investments
            Ltd.
          </CardText>
        </Col>
      </Row>
    </Card>
  );
};

export default About;
