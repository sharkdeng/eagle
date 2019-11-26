import React, {Component} from "react"
import {Breadcrumb} from "react-bootstrap"

class About extends Component {
    render() {
        return (
            <div id="about">
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" active>
                        About
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}

export default About;