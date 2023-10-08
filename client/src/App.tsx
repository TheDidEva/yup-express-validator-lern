import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { userSchema } from './Validation/UserValidation';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function App() {
  const createUser = async (event: any) => {
    event.preventDefault();
    let formData = {
      name: event.target[0].value, //link to - input name
      email: event.target[1].value, //link to - input email
      password: event.target[2].value, //link to - input password
    };

    const isValid = await userSchema.isValid(formData); // use our yup validation
    console.log(isValid);
  };

  return (
    <div className="d-flex justify-content-center">
      <Form onSubmit={createUser}>
        <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
          <Form.Control type='text' placeholder='Name...' />
        </Form.Group>

        <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
          <Form.Control type='text' placeholder='email@gmail.com...' />
        </Form.Group>

        <Form.Group className="mb-3 p-2" controlId="formBasicEmail">
          <Form.Control type='text' placeholder='Password...' />
        </Form.Group>
        <Button variant="primary" type="submit" className='center-block position-absolute'>Bttn</Button>
      </Form>
    </div>
  );
}

export default App;
