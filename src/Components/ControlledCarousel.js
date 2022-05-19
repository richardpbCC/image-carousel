import "./ControlledCarousel.css"
import { useState, useEffect } from "react";
import { Carousel } from "react-bootstrap";

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    if (selectedIndex !== props.selectedThumb) {
      props.setSelectedIndex(selectedIndex);
    }
    setIndex(selectedIndex);
  };

  useEffect(() => {
    if (props.selectedThumb !== -1) {
      handleSelect(props.selectedThumb);
    }
    props.setSelectedThumb(-1);
  }, [props.selectedThumb]);

  return (
    <Carousel
      variant="dark"
      activeIndex={index}
      onSelect={handleSelect}
      indicators={false}
      controls={true}
      interval={null}
      style={{ height: "50vh" }}
    >
      <Carousel.Item style={{ height: "50vh" }}>
        <img
          style={{ height: "50vh" }}
          className="rounded mx-auto d-block"
          src={props.images.img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide</h3>
          <p>The First slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "50vh" }}>
        <img
          style={{ height: "50vh" }}
          className="rounded mx-auto d-block"
          src={props.images.img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide</h3>
          <p>The Second slide.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: "50vh" }}>
        <img
          style={{ height: "50vh" }}
          className="rounded mx-auto d-block"
          src={props.images.img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide</h3>
          <p>The Third slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "50vh" }}>
        <img
          style={{ height: "50vh" }}
          className="rounded mx-auto d-block"
          src={props.images.img4}
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>Fourth slide</h3>
          <p>The Fourth slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "50vh" }}>
        <img
          style={{ height: "50vh" }}
          className="rounded mx-auto d-block"
          src={props.images.img5}
          alt="Fifth slide"
        />

        <Carousel.Caption>
          <h3>Fifth slide</h3>
          <p>The Fifth slide.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item style={{ height: "50vh" }}>
        <img
          style={{ height: "50vh" }}
          className="rounded mx-auto d-block"
          src={props.images.img6}
          alt="Sixth slide"
        />

        <Carousel.Caption>
          <h3>Sixth slide</h3>
          <p>The Sixth slidek.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
