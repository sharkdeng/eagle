import React, {Component} from "react"
import {Carousel, Container, Row, Col} from "react-bootstrap"

import banner1 from "../../assets/imgs/index-banner1.gif"
import banner2 from "../../assets/imgs/index-banner2.gif"
import auto from "../../assets/imgs/home-auto.png"
import cloud from "../../assets/imgs/home-cloud.png"
import easy from "../../assets/imgs/home-easy.png"
import efficient from "../../assets/imgs/home-efficient.png"
import intelligent from "../../assets/imgs/home-intelligent.png"
import powerful from "../../assets/imgs/home-powerful.png"

import HomeCard1 from "./HomeCard1"
import HomeChoose from "./HomeChoose"

import "./Home.css"


class Home extends Component {
    render() {
        return (
            <div id="home">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={banner1} alt="First slide"/>
                        <Carousel.Caption>
                        <h3>TuteHub</h3>
                        <p>AI-powered online education platform</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={banner2} alt="Third slide" />
                        <Carousel.Caption>
                        <h3>TuteHub, professonal tutoring</h3>
                        <p>We have served more than 30 schools and students</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

                <HomeChoose />
                

                <Container id="home-reason">
                    <Row>
                        <Col md="4">
                            <HomeCard1 imgSrc={auto} title="专业老师" content="我们的tutor都毕业于全球著名的计算机高校，学习成绩优异，能帮助学生迅速找到考点和"/>
                        </Col>
                        <Col md="4">
                            <HomeCard1 imgSrc={cloud} title="AI 助力" content="professinal content"/>
                        </Col>
                        <Col md="4">
                            <HomeCard1 imgSrc={easy} title="优质性价比" content="professinal content"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="4">
                            <HomeCard1 imgSrc={efficient} title="海量教程" content="professinal content"/>
                        </Col>
                        <Col md="4">
                            <HomeCard1 imgSrc={intelligent} title="全面覆盖" content="我们覆盖20门计算机语言，如Swift，PHP和10大领域计算机运用，如网页设计，App开发，人工智能，机器学习，语音识别，计算机视觉，游戏开发，三维设计等"/>
                        </Col>
                        <Col md="4">
                            <HomeCard1 imgSrc={powerful} title="学生信赖" content="超过3000名学生在TuteHub平台学习"/>
                        </Col>
                    </Row>
                </Container>

{/*                 
                <ul class="nav nav-tabs" role="tablist">
                    <li role="presentation" class="active"><a href="#userone" aria-controls="userone" role="tab" data-toggle="tab">用户中心</a></li>
                    <li role="presentation"><a href="#authorone" aria-controls="authorone" role="tab" data-toggle="tab">软件开发商</a></li>
                </ul>


                <article>
                        <h3> 超级鹰图片分类及识别录入系统 </h3>
                        <p>
                            全球领先的智能图片分类及识别商家
                            <br /> 安全、准确、高效、稳定、开放
                            <br /> 强大的技术及校验团队，支持大并发。
                            <br /> 7*24h作业进度管理
                            <br />
                        </p>
                        <a href="http://www.chaojiying.com/user/reg/" class="btn btn-info btn-lg"><i class="fa fa-user-plus fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;用户注册</a>
                        <a href="http://www.chaojiying.com/user/login/" class="btn btn-warning btn-lg"><i class="fa fa-user fa-lg" aria-hidden="true"></i>&nbsp;&nbsp;用户登录</a>
                </article>

                

                <section class="index-promise">
                    <Container>
                        <h1 class="text-center promise-title">
                        我们承诺
                        </h1>
                        <hr />
                        <span>&nbsp;</span>
                    </Container>
                    <Container>
                        <p style="line-height:60px;">
                            <span>客户服务电话：0317-431-6618&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                            <span>客服QQ：800198998</span>
                        </p>
                    </Container>
                </section> */}

    
            </div>
        )
    }
}

export default Home;