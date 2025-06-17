import "./page2.css"
import image from "../page1/image1.jpg"
import Footer1 from "../footer/footer1"
import Navbar from "../nav/nav-bar"
export default function Page2(){
return(
    <div className="container2">
      <Navbar textColor="white"/>
        <div className="container_header">
             <div className="header_text">
                <h1>Enregistrement audio<br/> et podcast</h1>
                <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Hac nam efficitur leo vel sollicitudin. Integer volutpat dis aenean maecenas dignissim mattis amet</p>
             </div>
             <div className="container_logo">
                 <div className="overlay"></div>
                <div className="logo_group">
                    <div className="text">
                        <h3>Nos Offre</h3>
                    </div>
                    <div className="flex_logo">
                        <div className="logo offre1">Bronze</div>
                        <div className="logo offre2">Silver</div>
                        <div className="logo offre3">Gold</div>
                        <div className="logo offre4">Prestiges</div>
                    </div>
                </div>
             </div>
        </div>
        <div className="home">
        </div>
<h1 className="h1">Les offres disponibles</h1>
        <div class="grid-container">
    <div class="card offre1">
      <div className="price">85.000 FCFA</div>
      <h2 class="title">Offre Bronze</h2>
      <ul class="features">
        <li>45min</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </ul>
      <p class="description">
        Pour les petits projets et un épisode court. Une séance Studio.
      </p>
    </div>

    <div class="card offre2">
      <div class="price">85.000 FCFA</div>
      <h2 class="title">Offre Silver</h2>
      <ul class="features">
        <li>45min</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </ul>
      <p class="description">
        Pour les petits projets et un épisode court. Une séance Studio.
      </p>
    </div>

    <div class="card offre3">
      <div class="price">85.000 FCFA</div>
      <h2 class="title">Offre Gold</h2>
      <ul class="features">
        <li>45min</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </ul>
      <p class="description">
        Pour les petits projets et un épisode court. Une séance Studio.
      </p>
    </div>

    <div class="card">
      <div class="price">85.000 FCFA</div>
      <h2 class="title">Offre Prestiges</h2>
      <ul class="features">
        <li>45min</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
      </ul>
      <p class="description">
        Pour les petits projets et un épisode court. Une séance Studio.
      </p>
    </div>
  </div>
  <Footer1 />
    </div>
)
}