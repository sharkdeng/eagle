import React, {Component} from "react"
import {Breadcrumb} from "react-bootstrap"

class Case extends Component {
    render() {
        return (
            <div id="case">
                <Breadcrumb>
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/" active>
                        Case
                    </Breadcrumb.Item>
                </Breadcrumb>
            </div>
        )
    }
}

export default Case;