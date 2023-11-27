import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const FormExample = () => {

  return (
    <Form noValidate>

      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nombre"
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Apellido"
          />
        </Form.Group>
        <Form.Group as={Col} md="4">
          <Form.Label>Telefono</Form.Label>
          <Form.Control type="tel" placeholder="Telefono" />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} md="6">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Email"
            aria-describedby="inputGroupPrepend"
          />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group as={Col} md="3">
          <Form.Label>Confirmar password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <br />
      <Row className='mb-3'>
        <div className='col-10'></div>
        <div className='col-2 d-grid'>
          <Button type="submit">Enviar</Button>
        </div>
      </Row>
    </Form>
  );
};


function App() {
  return (
    <div className="App">
      <div className='container bg-light p-3'>
        <h1>Registro</h1>
        <hr />
        <FormExample />
      </div>
    </div>
  );
}

export default App;
