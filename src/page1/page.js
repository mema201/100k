import "./page1.css"
import logo from "./0cb7c3fc2eb6dff3b84531cd3bd54e38a99f2b19.png"
import image1 from "./image1.jpg"
import image2 from "./image2.jpg"
import image3 from "./image3.jpg"
import Navbar from "../nav/nav-bar"
import Footer from "../footer/footer"

function Page1(){
return(
  <div className="container">
          <Navbar textColor="black"/>
    <div className="before_logo">
        <div className="logo">
            <img src={logo}/>
            <p>Notre expertise, donner vie à vos idées ! </p>
            <button>Contacter-Nous</button>
        </div>
    </div>
    <div className="group">
        <div className="photo">

        </div>
        <div className="photo image1">
             <img src={image1}/>
        </div>
        <div className="photo image2">
             <img src={image3}/>
        </div>
        <div className="photo image2">
             <img src={image2}/>
        </div>
    </div>
    <div class="header">
    <div class="overlay"></div>
    <div class="header-text">
      <h1>De l’idée à la réalisation,<br/>nous vous accompagnons<br/> dans tous les aspects de <br/> votre projet</h1>
    </div>
  </div>
<section class="services">
    <h2>Découvrez nos services</h2>
    <div class="cards">
      <div class="card card1">
        <div class="icon"></div>
        <h3>Enregistrement<br/>audio et podcast</h3>
        <p>Bénéficiez de nos équipements de pointe. Tout est à votre disposition</p>
      </div>
      <div class="card card2">
        <div class="icon"></div>
        <h3>Shooting et prise<br/>de vue</h3>
        <p>Bénéficiez de nos équipements de pointe. Tout est à votre disposition</p>
      </div>
      <div class="card card3">
        <div class="icon"></div>
        <h3>Location de<br/>matériel</h3>
        <p>Bénéficiez de nos équipements de pointe. Tout est à votre disposition</p>
      </div>
    </div>
  </section>
 <div className="equipement">
  <div className="text">
    <h1 className="rouge">Equipements de pointe, décors, éclairage...</h1>
  <h1 className="blue">Notre studio est entièrement équipé pour vous !</h1>
  <p>Prenez rendez-vous dès maintenant et accédez à des offres exclusives !</p>
  <button>Prendre rendez-vous</button>
  </div>
  <div className="block"></div>
 </div>
 <Footer/>
  </div>  
  
)
}
export default Page1