import React from "react";
import Carousel from "react-bootstrap/Carousel";
import buildings from "./skyline.jpg";
import stairs from "./stairs.jpg";
import solar from "./photovoltaic.jpg";

const LandingCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={buildings} alt="First slide" />
          <Carousel.Caption>
            <h2 color="white">Želite li novu fasadu?</h2>
            <h3 color="white">Sakupite i potaknite istomišljenike</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={stairs} alt="Third slide" />

          <Carousel.Caption>
            <h2 color="white">
              Odavno nije uređeneo stubište, ali ni dvorište
            </h2>
            <h3 scolor="white">
              Inicirajte projekt i neka suvlasnici glasuju.
            </h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={solar} alt="Third slide" />

          <Carousel.Caption>
            <h3 style={styles.text}>
              Mislite da je ponuda solara na krovu preskupa?
            </h3>
            <p style={styles.text}>
              Pozovite potencijalne izvođače na natječaj i odaberite
              najoptimalnijeg.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
const styles = {
  container: {
    width: 400,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
  },
  margin: { marginBottom: 15 },
  text: { color: "black" },
  input: {
    border: "none",
    backgroundColor: "#ddd",
    marginBottom: 10,
    padding: 8,
    fontSize: 18,
  },
  name: { fontSize: 20, fontWeight: "bold" },
  info: { marginBottom: 0 },
  button: {
    backgroundColor: "black",
    color: "white",
    outline: "none",
    fontSize: 18,
    padding: "12px 0px",
  },
};
export default LandingCarousel;
