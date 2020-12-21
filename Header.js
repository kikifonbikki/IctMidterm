import React from 'react'
import './Header.css'


class Header extends React.Component{
  render(){
    return(
    <div className="Header" id="ID">

<p><a href="google.com">Google</a></p> /*ссылка на гугл */
<a href="google.com" onClick="window.print()"> Распечатать </a>/*Ссылка на печать*/
</div>



  )
}
  }
alert("хотите распечатать?");/*Всплывающее окно*/
export default Header;
