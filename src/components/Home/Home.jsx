import './Home.css'
import { Formulario } from '../Formulario/Formulario'
import { Bienvenida } from '../Bienvenida/Bienvenida'
import { Location } from '../Location/Location'
import { Services } from '../Services/Services'
export function Home(){
    return(
    <>
    <section className="home">

    <div className="banner z-0">
        <div className="row">
          <div className="col-12 col-md-4 text-white fw-bold">
            <h3>Reserva con nostros</h3>
            <hr />
            <Formulario></Formulario>
          </div>
            <div className="col-12 col-md-4">
            </div>
        </div>

      </div>
      <Bienvenida/>
      <Location/>
      <Services/>
      
    </section>



    </>
    )
}