import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";

function Thumbnails(props) {
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (selectedImage) {
      resetImageHighlight();
    }
  }, [props.selectedIndex]);

  function highlightImage(event) {
    event.preventDefault();
    if (selectedImage) {
      resetImageHighlight();
    }
    setSelectedImage(event.target);
    props.setSelectedThumb(Number(event.target.id));
    event.target.style.transform = "scale(1.2)";
    event.target.style.transition = "transform 0.25s ease";
  }

  function resetImageHighlight() {
    selectedImage.style.transform = "scale(1)";
    selectedImage.style.transition = "transform 0.25s ease";
  }

  return (
    <Container className="py-3 px-1">
      <Row>
        <Col>
          <div onClick={highlightImage}>
            <img
              id="0"
              className="img-thumbnail"
              src={props.images.img1}
              alt="First thumbnail"
            />
          </div>
        </Col>
        <Col>
          <div onClick={highlightImage}>
            <img
              id="1"
              className="img-thumbnail"
              src={props.images.img2}
              alt="Second thumbnail"
            />
          </div>
        </Col>
        <Col>
          <div onClick={highlightImage}>
            <img
              id="2"
              className="img-thumbnail"
              src={props.images.img3}
              alt="Third thumbnail"
            />
          </div>
        </Col>
        <Col>
          <div onClick={highlightImage}>
            <img
              id="3"
              className="img-thumbnail"
              src={props.images.img4}
              alt="Fourth thumbnail"
            />
          </div>
        </Col>
        <Col>
          <div onClick={highlightImage}>
            <img
              id="4"
              className="img-thumbnail"
              src={props.images.img5}
              alt="Fifth thumbnail"
            />
          </div>
        </Col>
        <Col>
          <div onClick={highlightImage}>
            <img
              id="5"
              className="img-thumbnail"
              src={props.images.img6}
              alt="Sixth thumbnail"
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Thumbnails;
