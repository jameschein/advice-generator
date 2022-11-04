document.addEventListener('DOMContentLoaded', () => {

    let advice = ['My advice to you at last in the day!','My advice to you Rudy.', 'Once upon a word of wisdom we flew high']

    let randomNum = 0

    const die = document.querySelector('.cta-change-advice')

    const actualAdvice = document.querySelector('.actual-advice')

    const adviceNum = document.querySelector('.advice-num')

    const generateNum = () => {
        return Math.random()
        
    } 
    
    die.addEventListener('click', (e)=>{

        randomNum = Math.floor(generateNum() * advice.length)
        
        actualAdvice.innerHTML = advice[randomNum]
        adviceNum.innerHTML = randomNum + 1
    })
    
    
    randomNum = Math.floor(generateNum() * advice.length)
        
    actualAdvice.innerHTML = advice[randomNum]
    adviceNum.innerHTML = randomNum + 1

    

})
