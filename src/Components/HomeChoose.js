import React, {Component} from "react"
import {Container, Button, Row, Col} from "react-bootstrap"

import HomeChooseCard from "./HomeChooseCard"


import "./HomeChoose.css"


class HomeChoose extends Component {
    render() {
        return (
            <Container id="home-choose" className="text-center">
                    <h1>为什么我选择TuteHub</h1>
                    <hr />
                    <Row>
                        <Col md="3">
                            <HomeChooseCard className="front" title="3代" content="学习系统"/>
                            {/* <HomeChooseCard className="overlay" title="3代" content="第三代智能学习系统，为学员老师双重赋能"/> */}
                        </Col>
                        <Col md="3">
                            <HomeChooseCard className="front" title="50000 +" content="知识切片"/>
                            {/* <HomeChooseCard className="overlay" title="50000 +" content="知识点切片，精准定位学生薄弱点"/> */}
                        </Col>
                        <Col md="3">
                            <HomeChooseCard className="front" title="1000 +" content="师资"/>
                            {/* <HomeChooseCard className="overlay" title="1000 +" content="全球重点大学背景师资，6层严格筛选，优质师资保障"/> */}
                        </Col>
                        <Col md="3">
                            <HomeChooseCard className="front" title="23万" content="学生"/>
                            {/* <HomeChooseCard className="overlay" title="23万" content="累计辅导学员，补习选TuteHub大品牌有保障"/> */}
                        </Col>
                    </Row>
                    <Button>免费预约一对一试听</Button>
                </Container>
        )
    }
}


export default HomeChoose;
