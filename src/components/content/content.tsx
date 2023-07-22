import { Component } from 'react'
import './content.css'
import Image from '../../assets/main-image.png'

export default class content extends Component {
  render() {
    return (
      <div className='contenido'>
        <div className='columna-uno'>
          <h1>Welcome:</h1>
          <p>Welcome to my page, my name is Juan David García Arce. Im 17 years old programer and have a lot to show you. Wanna to see?</p>
          <p>Also, here you can find all about me!</p>
        </div>
        <img className='imagen-presentacion' src={Image} alt="Image of presentation" />
      </div>
    )
  }
}
