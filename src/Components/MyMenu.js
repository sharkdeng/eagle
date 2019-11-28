import React, {Component} from "react"
import {Button, Container, Nav, Navbar} from "react-bootstrap"
import "./MyMenu.css"
import qq from "../../assets/imgs/zx_qq.gif"

import {BrowserRouter, Link, Switch, Route} from "react-router-dom"
import Home from "./Home"
import Case from "./Case"
import Pricing from "./Pricing"
import About from "./About"
import Contact from "./Contact"
import Error from "./Error"



class MyMenu extends Component {
    render() {
        return (
            <header id="myMenu">
                <section id="header-top">
                    <Container>
                        <ul>
                            <li>欢迎光临 TuteHub， 专业的AI在线教学</li>
                            <li>登陆/注册</li>
                            <li> QQ:2994995261&nbsp;&nbsp; <a href="tencent://message/?uin=2994995261&amp;Site=chaojiying.com&amp;Menu=yes"><img src={qq} alt="发送信息给对方" /></a></li>
                        </ul>
                    </Container>
                </section>
                <BrowserRouter>
                <Navbar bg="light">
                    <Navbar.Brand href="/">TuteHub</Navbar.Brand>
                    <Nav>
                        <Nav.Item>
                            <Link to="/case">学生成功案例</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/pricing">课程</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/about">关于我们</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link to="/contact">联系我们</Link>
                        </Nav.Item>
                    </Nav>

                </Navbar>
                    <Switch>
                        <Route exact path="/"> <Home /> </Route>
                        <Route path="/case">  <Case />  </Route>
                        <Route path="/pricing"> <Pricing />  </Route>
                        <Route path="/about"> <About />  </Route>
                        <Route path="/contact">  <Contact />  </Route>
                    </Switch>     
                </BrowserRouter>
            </header>
        )
    }
}

export default MyMenu;