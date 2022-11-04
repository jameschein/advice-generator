document.addEventListener('DOMContentLoaded', () => {

    let advice = ['My advice to you at last in the day!','My advice to you Rudy.', 'Once upon a word of wisdom we flew high']

    const die = document.querySelector('.cta-change-advice')

    const actualAdvice = document.querySelector('.actual-advice')

    const generateNum = () => {
        return Math.random()
        
    } 
    
    die.addEventListener('click', (e)=>{
        actualAdvice.innerHTML = advice[Math.floor(generateNum() * advice.length)]
    })
    
    

})
