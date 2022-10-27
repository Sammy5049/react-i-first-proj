import  {Container} from 'react-bootstrap'
import Homepage from './Component/Homepage';
function App() {
  return (
    <Container className='d-flex align-items-center justify-content-center' style={{minHeight:'100vh'}} >
      <Homepage />
  
    </Container>
  );
}

export default App;
