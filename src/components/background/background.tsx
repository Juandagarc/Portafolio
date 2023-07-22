import { Component } from 'react'
import './background.css'
import Content from '../content/content'

export default class background extends Component {
  render() {
    return (
      <div className="area" >
        <Content />
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
    )
  }
}
