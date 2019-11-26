import React, {Component} from "react"
import "./RightBar.css"

class RightBar extends Component {
    render() {
        return (
            <div id="rightBar">
                <a href="">会员</a>
                <a href="">电话</a>
                <a href="">充值</a>
                <a href="#">Top</a>
                <a href="">取消</a>
            </div>
        )
    }
}

export default RightBar;