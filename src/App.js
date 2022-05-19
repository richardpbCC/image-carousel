import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

import ControlledCarousel from "./Components/ControlledCarousel.js";
import Thumbnails from "./Components/Thumbnails.js";

function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [selectedThumb, setSelectedThumb] = useState(0);

  const images = {
    img1: "https://picsum.photos/640/480?random=1",
    img2: "https://picsum.photos/640/480?random=2",
    img3: "https://picsum.photos/640/480?random=3",
    img4: "https://picsum.photos/640/480?random=4",
    img5: "https://picsum.photos/640/480?random=5",
    img6: "https://picsum.photos/640/480?random=6",
  };

  return (
    <Container className="p-3">
      <Row>
        <Col mx="auto">
          <ControlledCarousel
            selectedThumb={selectedThumb}
            setSelectedIndex={setSelectedIndex}
            setSelectedThumb={setSelectedThumb}
            images={images}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <Thumbnails
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            setSelectedThumb={setSelectedThumb}
            images={images}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
