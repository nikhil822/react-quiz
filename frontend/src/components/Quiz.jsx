import Questions from './Questions'

const Quiz = () => {

    const onNext = () => {
        console.log("next")
    }
    const onPrev = () => {
        console.log("prev")
    }

    return (
        <div className="container">
            <h1 className='title text-light'>Quiz Application</h1>

            <Questions />

            <div className="grid">
                <div className="btn prev" onClick={onPrev}>Prev</div>
                <div className="btn next" onClick={onNext}>Next</div>
            </div>

        </div>
    )
}

export default Quiz