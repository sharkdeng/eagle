import React, {Component} from "react"
import {Container, Row, Col, Breadcrumb} from "react-bootstrap"

import map from "../../assets/imgs/map.jpg"
import star from "../../assets/imgs/star.gif"

import "./Contact.css"

class Contact extends Component {
    render() {
        return (
            <div id="contact">
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" active>
                        Contact
                    </Breadcrumb.Item>
                </Breadcrumb>

                <Container>
                    <img src={map} alt="Complany location" />
                </Container>
                <hr />
                <Container>
                    <Row>
                        <Col md="4">
                            <div class="contact-card">
                                <p>联系方式</p>
                                <img src={star} alt="star" />
                                <p>客户服务</p>
                            </div>
                        </Col>
                        <Col md="4"></Col>
                        <Col md="4"></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Contact;