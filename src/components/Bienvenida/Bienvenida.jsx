import './Bienvenida.css'

export function Bienvenida(){
    return(
        <>
        <section className='Bienvenida'>
            <div className='item descrip '>
                <h1>WELCOME</h1>
                <hr />
                <p>¡Bienvenidos a nuestra querida hacienda, un rincón lleno de historia y encanto desde 1998! Descubre la elegancia de nuestro hotel, degusta exquisitos platillos en nuestro restaurante y sumérgete en la cultura vinícola de nuestra bodega. ¡Celebra momentos inolvidables con nosotros!</p>
            </div>
            <div className='item animate__animated animate__backInLeft'>
                <img  src="https://firebasestorage.googleapis.com/v0/b/hacienda-44f62.appspot.com/o/welcome2.jpg?alt=media&token=254554e8-8cf3-4a0c-b6f4-f33e6d49a831" alt="" />
            </div>
        </section>

        </>
    )
}