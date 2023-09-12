import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Placeholder from '../images/placeholder.jpg'

export default function Projects() {
  return (
    <div className='flex'>
      <Card className='projDiv'>
        <Card.Img variant="top" src={Placeholder} />
        <Card.Body>
          <Card.Title>Project Name</Card.Title>
          <Card.Text>
          Project one - description text. Describe project, goals of the project, and anything learned while completing this project. Add screenshot of landing page to replace placeholder image.
          </Card.Text>
          <Button variant="primary">Link to project</Button>
        </Card.Body>
      </Card>
      <Card className='projDiv'>
      <Card.Img variant="top" src={Placeholder} />
      <Card.Body>
        <Card.Title>Project Name</Card.Title>
        <Card.Text>
        Project one - description text. Describe project, goals of the project, and anything learned while completing this project. Add screenshot of landing page to replace placeholder image.
        </Card.Text>
        <Button variant="primary">Link to project</Button>
      </Card.Body>
    </Card>
    <Card className='projDiv'>
      <Card.Img variant="top" src={Placeholder} />
      <Card.Body>
        <Card.Title>Project Name</Card.Title>
        <Card.Text>
        Project one - description text. Describe project, goals of the project, and anything learned while completing this project. Add screenshot of landing page to replace placeholder image.
        </Card.Text>
        <Button variant="primary">Link to project</Button>
      </Card.Body>
    </Card>
  </div>
  );
}