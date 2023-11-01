
 
function Rules(){
    return (
        <>
            <button className="Rules" onClick={trigger}>Rules</button>
            <div className="popup none">
                <div className="popup-inner">
                    <img src="/projectRockPaperScissors/image-rules.svg" alt="Rules of the game" />
                    <button className="close-btn" onClick={Close}>X</button>
                </div>
            </div>
        </>
    )

    function trigger(){
        const elements = document.querySelector('.popup')
        const rule = document.querySelector('.Rules')
        elements?.classList.add('trigged')
        rule?.classList.add('none')
    }

    function Close(){
        const elements = document.querySelector('.popup')
        elements?.classList.remove('trigged')
        const rule = document.querySelector('.Rules')
        rule?.classList.remove('none')

    }

}

export default Rules