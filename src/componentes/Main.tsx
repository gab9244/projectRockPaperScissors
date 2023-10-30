import { useState } from 'react';


function Main(){
    const [increase, setIncrease] = useState(1)
    return(
       <> <div className="Main"> 
            <img src ="./rock-paper-scissors-master/images/bg-triangle.svg" alt="A triangle" className="triangle" />
            
            <div className="paperDiv"   >
                <img src="./rock-paper-scissors-master/images/icon-paper.svg" alt="Paper symbol" className="paper "  onClick={() => Choice('paper')}/>
                </div>
            <div className="scissorsDiv"  >
                <img src="./rock-paper-scissors-master/images/icon-scissors.svg" alt="Scissors symbol" className="scissors" onClick={() => Choice('scissors')}/>
            </div>
            <div className="rockDiv" >
                <img src="./rock-paper-scissors-master/images/icon-rock.svg" alt="Rock symbol" className="rock" onClick={() => Choice('rock')}/>
            </div>
        </div>

        <div className="WinnerDiv none">
            <div className="Computer"></div>
            <div className="Player">
            <img  className=" PlayerChoice"/>
            </div>
            <div className='ResultDiv'>
                <p className='Result'></p>
                <button className="newGame" onClick={startNewGame}>Play Again</button>
            </div>

        </div>
 </>
    ) 
       function Choice(choice:string){
        //Add the result screen by removing the choice screen adding the none class to it and remove the class none of the result screen
        const main = document.querySelector('.Main')
        const wDiv = document.querySelector('.WinnerDiv')
        main?.classList.add('none')
        wDiv?.classList.remove('none')


        const img = document.querySelector('.PlayerChoice')
        const player = document.querySelector('.Player')
        const Computer = document.querySelector('.Computer')
        const Result = document.querySelector('.Result')

        const paperImg = document.createElement('img')  
        paperImg.src = "/rock-paper-scissors-master/images/icon-paper.svg"
        paperImg.setAttribute('class','paperChoice')
  

        const rockImg = document.createElement('img')
        rockImg.src = "/rock-paper-scissors-master/images/icon-rock.svg"
        rockImg.classList.add('rockChoice')


        const scissorsImg = document.createElement('img')
        scissorsImg.src = "/rock-paper-scissors-master/images/icon-scissors.svg"
        scissorsImg.classList.add('scissorsChoice')


        const option = [paperImg,rockImg,scissorsImg]
        const random = option[Math.floor(Math.random() * option.length)]
        Computer?.append(random)

        if(random ==paperImg){
            Computer?.classList.add('hasPaper')
            Computer?.classList.add('PlayerPaper')

            Computer?.classList.remove('hasRock')
            Computer?.classList.remove('hasScissors')

            Computer?.classList.remove('PlayerRock')
            Computer?.classList.remove('PlayerScissors')
        }
       
        if(random == rockImg){
            Computer?.classList.add('hasRock')
            Computer?.classList.add('PlayerRock')

            Computer?.classList.remove('hasPaper')
            Computer?.classList.remove('hasScissors')

            Computer?.classList.remove('PlayerPaper')
            Computer?.classList.remove('PlayerScissors')
        }
        if(random == scissorsImg){
            Computer?.classList.add('hasScissors')
            Computer?.classList.add('PlayerScissors')


            Computer?.classList.remove('hasRock')
            Computer?.classList.remove('hasPaper')

            Computer?.classList.remove('PlayerPaper')
            Computer?.classList.remove('PlayerRock')
        }
       
        if(choice == 'scissors' ) { 
            img?.setAttribute('src',`/rock-paper-scissors-master/images/icon-scissors.svg`)
            img?.setAttribute('alt', 'scissors')
            player?.setAttribute('class','PlayerScissors Player')
        }
        if(choice == 'paper') {
            img?.setAttribute('src',`/rock-paper-scissors-master/images/icon-paper.svg`)
            img?.setAttribute('alt', 'paper')
            player?.setAttribute('class','PlayerPaper Player')
        }
        if(choice == 'rock') {
            img?.setAttribute('src',`/rock-paper-scissors-master/images/icon-rock.svg`)
            img?.setAttribute('alt', 'rock')
            player?.setAttribute('class','PlayerRock Player')
        }

        
        const points = document.getElementById('points')
  
        if(choice == 'scissors'&& Computer?.classList.contains('hasPaper')){
            if(Result) Result.textContent = 'You win'
            if(points) points.textContent = `${increase}`
            setIncrease(increase +1) 
            
        }
        
        if(choice == 'paper'&& Computer?.classList.contains('hasRock')){
            if(Result) Result.textContent = 'You win'
            if(points) points.textContent = `${increase}`
            setIncrease(increase +1) 
            
        }

        if(choice == 'rock'&& Computer?.classList.contains('hasScissors')){
            if(Result) Result.textContent = 'You win'
            if(points) points.textContent = `${increase}`
            setIncrease(increase +1) 
            
        }


        if(choice == 'scissors'&& Computer?.classList.contains('hasRock')){
            if(Result) Result.textContent = 'You Lose'
            
        }
        
        if(choice == 'paper'&& Computer?.classList.contains('hasScissors')){
            if(Result) Result.textContent = 'You Lose'
            
        }

        if(choice == 'rock'&& Computer?.classList.contains('hasPaper')){
            if(Result) Result.textContent = 'You Lose'
            
        }
        
        
        if(choice == 'scissors'&& Computer?.classList.contains('hasScissors')){
            if(Result) Result.textContent = 'Tie'
            
        }
        
        if(choice == 'paper'&& Computer?.classList.contains('hasPaper')){
            if(Result) Result.textContent = 'Tie'
            
        }

        if(choice == 'rock'&& Computer?.classList.contains('hasRock')){
            if(Result) Result.textContent = 'Tie'
            
        }


       }
    
        function startNewGame(){
            const main = document.querySelector('.Main')
            const wDiv = document.querySelector('.WinnerDiv')
            const img = document.querySelector('.playerChoice')

            
            const computerChoice = document.querySelector('.ComputerChoice')
            computerChoice?.parentElement?.removeChild(computerChoice)

            const ComputerChoicePaper = document.querySelector('.paperChoice')
            ComputerChoicePaper?.parentElement?.removeChild(ComputerChoicePaper)

            const ComputerChoiceRock = document.querySelector('.rockChoice')
            ComputerChoiceRock?.parentElement?.removeChild(ComputerChoiceRock)

            const ComputerChoiceScissors = document.querySelector('.scissorsChoice')
            ComputerChoiceScissors?.parentElement?.removeChild(ComputerChoiceScissors)

            img?.setAttribute('src','')
            main?.classList.remove('none')
            wDiv?.classList.add('none')
          

        }
}

export default Main