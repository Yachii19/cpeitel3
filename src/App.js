import './App.css';
import { useState } from "react";

function Display({ display }) {
  return (
    <div className="Display">
      {display}
    </div>
  );
}

function NameAndSection() {
  return (
    <div className='NameContainer'>
      <p>
        JOHN REIN VINUYA
      </p>
      <p>
        BSIT - 3A
      </p>
    </div>
  );
}

function Key({ label, clickHandler }) {
  return (
    <button className='ButtonKeys' onClick={clickHandler}>
      {label}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState("C-PEITEL3 EXPECTATIONS");

  const handleKeyClick = (key) => {
    const items = [
      "Being On Time",
      "Making An Effort",
      "Being High Energy",
      "Having A Positive Attitude",
      "Being Passionate",
      "Using Good Body Language",
      "Being Coachable",
      "Doing A Little Extra",
      "Being Prepared",
      "Having A Strong Work Ethic"
    ];

    const answers = [
      "During my time at school last year, I learned alot of things in my time in our course system integration. I learned how to build an API using java springboot, mysql and connecting it to REACT. I also learned about different career paths that we can take as an IT Professional. Then I learned how to make simple programs that our teacher gave as an exercise. Additionally, I learned how to make an SRS and also learn how to test a system before deployment. Lastly, I learned about different kinds of hacking, and how to prevent them from happening with the use of Web Goat and Web Wolf",
      "Now in our 2nd Semester, I have some hopes of learning a little bit more of the advance things that a programmer should learn. I want to delve myself in web developing, and currently I have limited knowledge on backend development, so I think that's a start. Additionally, I want to learn more about what REACT could offer, and maybe learn a little more about Java. Lastly, I want to improve my skills in web designing.",
      "I will be using my free time to slef study and watch youtube tutorials at home to further my learnings and search for things that I have a hard time undersatnding at school. I will also be paying attention to what our teacher is discussing and hopefully engrave it in my mind so I can utilize whatever learnings he passed down on us as he knows what it's like in the industry."
    ]
    
    if (key === 'RESET') {
      setDisp("10 Things That Require Zero Talent");
    } else if (key === 'NAME') {
      setDisp("JOHN REIN VINUYA");
    } else if (key === 'What I Learned?') {
      setDisp(answers[0]);
    } else if (key === 'What I Want To Learn?') {
      setDisp(answers[1]);
    } else if (key === 'How Will I Learn?') {
      setDisp(answers[2]);
    } else {
      const index = parseInt(key);
      if (index >= 1 && index <= 10) {
        setDisp(items[index - 1]);
      }
    }
  };

  return (
    <div className="App">
      <div className="CalcContainer">
        <div>
          <NameAndSection />
        </div>
        <div className="DispContainer">
          <Display display={disp} />
        </div>

        <div className="ButtonContainer">
          <Key label={'What I Learned?'} clickHandler={() => handleKeyClick('What I Learned?')} />
          <Key label={'What I Want To Learn?'} clickHandler={() => handleKeyClick('What I Want To Learn?')} />
          <Key label={'How Will I Learn?'} clickHandler={() => handleKeyClick('How Will I Learn?')} />
          <Key label={1} clickHandler={() => handleKeyClick(1)} />
          <Key label={2} clickHandler={() => handleKeyClick(2)} />
          <Key label={3} clickHandler={() => handleKeyClick(3)} />
          <Key label={4} clickHandler={() => handleKeyClick(4)} />
          <Key label={5} clickHandler={() => handleKeyClick(5)} />
          <Key label={6} clickHandler={() => handleKeyClick(6)} />
          <Key label={7} clickHandler={() => handleKeyClick(7)} />
          <Key label={8} clickHandler={() => handleKeyClick(8)} />
          <Key label={9} clickHandler={() => handleKeyClick(9)} />
          <Key label={0} clickHandler={() => handleKeyClick(10)} />
          <Key label={'RESET'} clickHandler={() => handleKeyClick('RESET')} />
          <Key label={'NAME'} clickHandler={() => handleKeyClick('NAME')} />
        </div>
      </div>
    </div>
  );
  
}

export default App;
