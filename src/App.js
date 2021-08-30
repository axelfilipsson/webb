
import styled from 'styled-components';

const Root = styled.div`
  text-align: center; 
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

function App() {
  return (
    <Root>
         <h2> Välkommen! </h2>
      <p>
        Sidan är under uppbyggnad..
      </p>
   
    </Root>
  );
}

export default App;
