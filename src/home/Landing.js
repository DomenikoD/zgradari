import React from 'react'
import { Button, Jumbotron } from 'react-bootstrap';


const Landing = () => {
  

  return(
    <div >

<Jumbotron>
  <h1>Dobro došli na Zgradare!</h1>
  <p>
  Ovom web-aplikacijom povećava se interakcija svih suvlasnika zgrade, te na taj način osvještava briga za zajedničko vlasništvo, na način da se ono obnavlja, uređuje, predlažu ideje i vode glasovanja.
Korisnici aplikacije su predstavnik stanara i stanari vlasnici. U daljnjem razvoju i ostali dionici provedenih i izglasanih projekta.
  </p>
  <p>
  <Button href="onama" variant="link">O nama</Button>
  <Button href='https://github.com/DomenikoD/zgradari' variant="link">Izvorni kod</Button>
  </p>
</Jumbotron>
    </div>
  )

}



export default Landing