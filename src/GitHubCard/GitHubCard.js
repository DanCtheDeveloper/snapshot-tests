import React from "react"
import Card from "react-bootstrap/Card"
import Dan from './Dan.jpg'

function GitHubCard() {
  return (
      <div className="card">
        <Card style={{ width: "18rem"}}>
        <Card.Img variant="top" src={Dan} />
        <Card.Body>
            <Card.Title>Dan</Card.Title>
            <Card.Text>
            I am Dan the Dev
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  );
}

export default GitHubCard