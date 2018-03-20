import React from "react"
import ReactDOM from "react-dom"
import Family from "./family"
import Member from "./member"

ReactDOM.render(
    <Family lastName="Lamoglia">
        <Member name="Wagner" />
        <Member name="Luciele" />
        <Member name="Caroline" />
    </Family>

, document.getElementById("app"))