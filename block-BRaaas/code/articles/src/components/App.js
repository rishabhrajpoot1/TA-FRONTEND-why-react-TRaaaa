import Names from "./Names";
import Fruits from "./Fruits";

function handleClick(event){
    alert('Hello Reacr Event!');
}

function handleSecClick(event){
    alert('To learn React use https://reactjs.org');
    alert('React and ReactDOM works together');
    alert('Babel helps in writing JSX');
}

function handleArya(event){
    alert('Hello Arya!');
}

function handleJohn(event){
    alert('Hello John!');
}

function handleBran(event){
    alert('Hello Bran!');
}



function App (){
    return (
        <>
        <h1>Seek Help</h1>
        <div>
            <button onClick={(event)=>{handleClick(event)}}>Click Me!</button>
            <button onClick={(event)=>{handleSecClick(event)}}>How can I help you?</button>
        </div>
        <h2>Names</h2>
        <div>
            <button onClick={(event)=>{handleArya(event)}}>Arya</button>
            <button onClick={(event)=>{handleJohn(event)}}>John</button> 
            <button onClick={(event)=>{handleBran(event)}}>Bran</button>     
        </div>
        <h2>Names Using Components</h2>
        <Names/>
        <h2>Fruits Using Components</h2>
        <Fruits/>
        </>
    );
}

export default App;