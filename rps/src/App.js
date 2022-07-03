import './App.css';
import './component/Box';
import Box from './component/Box';
import { useState } from 'react';
// 1. 박스 2개(사진, 타이틀, 결과)
// 2. 가위바위보 버튼
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다. 
// 5. 3,4의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패 결과에 따라 테두리 색이 바뀐다(이기면 초록 지면 빨강 비기면 검정)
const choice = {
  rock: {
    name : 'Rock',
    img : "https://i.pinimg.com/564x/1b/e7/5d/1be75db19c5ab9d049b0073054d92bf7.jpg"
  },
  scissors:{
    name : "Scissors",
    img : "https://www.kindpng.com/picc/m/44-442185_clip-art-scissors-template-scissor-illustration-hd-png.png"
  },
  paper : {
    name : "Paper",
    img : "https://thumbs.dreamstime.com/b/lined-letter-paper-511157.jpg"
  },
}
function App() {
  const [userSelect,setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result,setResult] = useState("")
  const play = (userChoice) =>{
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice],computerChoice))

  };
  const randomChoice= () =>{
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random()*itemArray.length)
    let final = itemArray[randomItem]
    return choice[final]
  };
  const judgement=(user,computer)=>{
    if (user.name === computer.name){
      return "Tie"
    } else if(user.name === "Rock") return computer.name === "Scissors"?"Win":"Lose"
    else if(user.name === "Scissors") return computer.name === "Paper"?"Win":"Lose"
    else if (user.name === "Paper") return computer.name === "Rock" ? "Win":"Lose"
  }
  return (
    <div>
      <div className='main'>
        <Box title="You" item = {userSelect} result = {result}/>
        <Box title="Computer" item = {computerSelect} result = {result}/>
      </div>
      <div className='main'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
    
  );
}

export default App;
