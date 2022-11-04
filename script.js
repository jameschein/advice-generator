document.addEventListener('DOMContentLoaded', () => {

    let advice = ['My advice to you at last in the day!','My advice to you Rudy.', 'Once upon a word of wisdom we flew high']

    const die = document.querySelector('.cta-change-advice')

    const actualAdvice = document.querySelector('.actual-advice')

    const adviceNum = document.querySelector('.advice-num')

    const generateNum = () => {
        
        return Math.floor(Math.random() * advice.length)
        
    } 
    
    die.addEventListener('click', (e)=>{

        randomNum = generateNum()

        while(randomNum === counter){
            randomNum = generateNum()
        }

        actualAdvice.innerHTML = advice[randomNum]
        adviceNum.innerHTML = randomNum+1 
        
        counter = randomNum 
        
        
    })
    
    
    // RANDO NUMBER AND ADVICE ON PAGE LOAD
    
    let randomNum = generateNum()

    let counter = randomNum
        
    actualAdvice.innerHTML = advice[randomNum]
    adviceNum.innerHTML = randomNum + 1

    

})
