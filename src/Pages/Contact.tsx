import React, { ChangeEvent, Component } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  Col,
  Row,
  CardTitle,
  CardBody,
  CardText,
  Alert,
} from "reactstrap";
import ContactCard from "../Components/ContactCard";
import mail from "../images/mail.png";
import linkedin from "../images/linkedin.png";
import phone from "../images/telephone.png";
import github from "../images/github.png";
import location from "../images/placeholder.png";
import * as emailjs from "emailjs-com";

interface ContactState {
  name: string;
  email: string;
  subject: string;
  message: string;
  response: { text: string; color: string };
}

export default class Contact extends Component {
  state: ContactState = {
    name: "",
    email: "",
    subject: "",
    message: "",
    response: { text: "", color: "" },
  };

  handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    const templateParams = {
      name: this.state.name,
      email: this.state.email,
      subject: this.state.subject,
      message: this.state.message,
    };

    emailjs
      .send(
        "portfolio",
        "template_9vyk87k",
        templateParams,
        process.env.REACT_APP_EMAILJS
      )
      .then(
        (result) => {
          this.setState({
            response: { text: "Message sent successfully", color: "success" },
          });
          this.clearState();
        },
        (error) => {
          this.setState({
            response: { text: "Error, try again.", color: "danger" },
          });
        }
      );
  };

  clearState = (): void => {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  render() {
    return (
      <Card className="p-3 mt-5">
        <Row>
          <Col sm="3">
            <Card>
              <CardBody>
                <CardTitle tag="h5">Contact Information:</CardTitle>
                <CardText>Fill the form to send me an email!</CardText>
                <ContactCard image={mail} title="ynabavian@gmail.com" />
                <ContactCard image={phone} title="+972-546147791" />
                <ContactCard
                  image={linkedin}
                  title="LinkedIn"
                  link="https://www.linkedin.com/in/yarden-nabavian/"
                />
                <ContactCard
                  image={github}
                  title="GitHub"
                  link="https://github.com/yardenNabavian"
                />
                <ContactCard
                  image={location}
                  title="Yigal Alon, Hertzlia, Israel"
                />
              </CardBody>
            </Card>
          </Col>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label for="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Name"
                  type="text"
                  required
                  value={this.state.name}
                  onChange={this.handleInput}
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  required
                  placeholder="Your Email Address"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleInput}
                />
              </FormGroup>
              <FormGroup>
                <Label for="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  type="text"
                  required
                  minLength={5}
                  value={this.state.subject}
                  onChange={this.handleInput}
                />
              </FormGroup>
              <FormGroup>
                <Label for="message">Message</Label>
                <Input
                  id="message"
                  name="message"
                  placeholder="Message"
                  type="textarea"
                  minLength={5}
                  required
                  rows="9"
                  value={this.state.message}
                  onChange={this.handleInput}
                />
              </FormGroup>
              <Button type="submit" outline color="dark">
                Send Message
              </Button>
              {this.state.response.text ? (
                <Alert color={this.state.response.color} className="mt-3">
                  {this.state.response.text}
                </Alert>
              ) : null}
            </Form>
          </Col>
        </Row>
      </Card>
    );
  }
}
