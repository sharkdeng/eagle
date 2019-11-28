import React, {Component} from "react"
import {Card} from "react-bootstrap"


class HomeCard1 extends Component {
    render() {
        return (
            <Card>
                <Card.Img variant="top" src={this.props.imgSrc} />
                <Card.Body className="text-center">
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        {this.props.content}
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default HomeCard1;