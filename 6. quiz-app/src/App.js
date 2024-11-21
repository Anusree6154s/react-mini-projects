import data from "./db/questions";
import "./App.css";

function App() {
  // const [index, setIndex]=useState()
  
  //we need a heading, question area with quesitons nnd option for curr question
  // and a next and back button
  // when question are 0 to 9, chow next button, else show nothing
  // on each questinon  show submit button, after showing ans and trivia show next button'
  // on con=mplete the quiz show score as popup

  //store calsultaed total score
  // store curr page index (to compare witht he index of quesion to show it)
  // sotr ans visiblity or not. and lock th eselected answer(if wrong , show red, else shpw green). also teh correct ans

  //set a class for the correct and wrong ans and switch it dependding on the sected answer matching. 
  //store selected answer
  return (
    <div className="App">
      <h1>Quiz</h1>
      <div>
        <ul>
          {data.map((item, index) => (
            <li key={item.question}>key={item.question}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
