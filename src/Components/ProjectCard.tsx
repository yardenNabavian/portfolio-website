import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";

export interface ProjectCardProps {
  id?: number;
  link?: string;
  image: string;
  title: string;
  body: string;
}

const ProjectCard = (props: ProjectCardProps) => {
  return (
    <Card className="mt-5">
      <CardTitle tag="h5" className="m-2">
        {props.title}
      </CardTitle>
      <CardImg src={props.image} />

      <CardBody>
        <CardText tag="p">{props.body}</CardText>
        {props.link ? (
          <a href={props.link} target="_blank" rel="noreferrer">
            <Button color="dark" outline>
              Visit
            </Button>
          </a>
        ) : null}
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
