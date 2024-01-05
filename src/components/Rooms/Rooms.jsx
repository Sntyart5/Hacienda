import './Rooms.css';

export function Rooms() {
  return (
    <>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="fondo">
        <h1>Rooms</h1>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/hacienda-44f62.appspot.com/o/room1.jpg?alt=media&token=bfb90bb9-969b-440a-acfc-c01aefc94481"
              className="d-block w-100"
              alt="Room 1"
              />
          </div>
          <div className="carousel-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/hacienda-44f62.appspot.com/o/room2.jpg?alt=media&token=7322ac85-f109-4691-99cf-2fd9d2814dcd"
              className="d-block w-100"
              alt="Room 2"
              />
          </div>
          <div className="carousel-item">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/hacienda-44f62.appspot.com/o/room3.jpg?alt=media&token=56422c50-92a7-42df-98c6-c105ed206df3"
              className="d-block w-100"
              alt="Room 3"
              />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <section className="Rooms">
        <h1>Habitaciones</h1>
      </section>
    </>
  );
}
