import storeItems from "../Data/Items.json";
import { Row, Col } from "react-bootstrap";
import StoreItems from "../Components/StoreItems";
export function Store() {
  return (
    <>
      <h1> Store</h1>
      <Row md={2} xs={1} lg={3} className="g-3">
        {storeItems.map((items) => (
          <Col key={items.id}>
            <StoreItems {...items} />
          </Col>
        ))}
      </Row>
    </>
  );
}
