import React, {Component} from "react"
import {Container, Row, Col} from "react-bootstrap"

class Foot extends Component {
    render() {
        return (
            <footer>
                <div></div>
                <Container>
                    <Row>
                        <Col md="3">专业验证码识别平台</Col>
                        <Col md="3">细致周到的安全服务</Col>
                        <Col md="3">接口开放源码</Col>
                        <Col md="3">7x24小时服务</Col>
                    </Row>
                </Container>
                <div></div>
                <div><p></p></div>

            </footer>
        )
    }
}

export default Foot;