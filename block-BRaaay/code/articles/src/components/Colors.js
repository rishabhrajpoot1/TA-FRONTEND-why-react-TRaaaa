import colors from '../colors.json';
import styled from 'styled-components';
const ColorsContainer=styled.div`
  display: flex;
  flex-direction: column;
`

function Colors() {
  return (
    <div>
      {Object.keys(colors).map((eachColor) => (
        <div key={eachColor}>
          <h2>{eachColor}</h2>
          <div className='flex'>
            <Color some={colors[eachColor]} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Color(props) {
  return (
    <>
      {props.some.map((color, i) => (
        <>
          <ColorsContainer>
            <div className='some' style={{ backgroundColor: color }}></div>
            <div>
              <span>{color}</span>
              <span class='number'>{i === 0 ? 50 : i * 100}</span>
            </div>
          </ColorsContainer>
        </>
      ))}
    </>
  );
}
export default Colors;
