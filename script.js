const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock'){
    return userInput;
  } else if (userInput === 'paper'){
    return userInput;
  } else if (userInput === 'scissors'){
    return userInput;
  } else if (userInput === 'bomb'){
    return userInput;
  } else { console.log('Error')}
};

const getComputerChoice = () => {
 const randomNumber = Math.floor(Math.random() * 3);
   switch (randomNumber) {
     case 0:
       return 'rock';
     case 1:
       return 'paper';
     case 2:
       return 'scissors';
    };
  };

const determineWinner = ( userChoice , computerChoice) => {
  if(userChoice === 'bomb'){return 'User win!'}
  if (userChoice === computerChoice) {return 'the game was a tie';}
    if(userChoice === 'rock' ) {
      if(computerChoice === 'paper'){
        return 'Computer won!';
      } else { return 'User won!';};
    };
  if(userChoice === 'paper' ) {
      if(computerChoice === 'scissors' )
      { return 'Computer won!';
      } else { return 'User won!';}
    };
  if(userChoice === 'scissors' ) {
      if(computerChoice === 'rock'){
        return 'Computer won!'
      } else { return 'User won!'};
    };
};

const  playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('You threw ' + userChoice);
  console.log('The computer threw ' + computerChoice );
  console.log(determineWinner(userChoice, computerChoice));
};



playGame();
