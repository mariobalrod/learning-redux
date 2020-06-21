import React, {useState, useEffect} from 'react';

import { Button, Container } from 'react-bootstrap';

//Components
import Posts from './components/Posts';
import PostForm from './components/PostForm';

function App() {

  const [visible, setVisible] = useState(false);
  const [buttonName, setButtonName] = useState('');

  useEffect(() => {
      const param = visible;
      setButtonAspect(param);    
  }, [visible]);

  const setButtonAspect = (param) => {
    if (param) {
      setButtonName('Close Form');
    } else {
      setButtonName('Show Form');
    }
  }

  return (
    <div className="App">
      <Container className="mx-auto mt-5" style={{width: 200}}>
        <Button variant="dark" onClick={() => setVisible(!visible)} block>
          {buttonName}
        </Button>
      </Container>
      { (visible) ? <PostForm /> : '' }
      <Posts />
    </div>
  );
}

export default App;
