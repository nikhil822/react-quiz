import { useState } from "react"
import data from "../database/data"

const Questions = () => {
    const [checked, setChecked] = useState(undefined)

    const question = data[0]
    const onSelect = () => {
        console.log('qns 1')
    }

    return (
        <div className='questions'>
            <h2 className='text-light'>Sample Question 1</h2>

            <ul key={question.id}>
                {
                    question.options.map((q, i) => (
                        <li key={i}>
                            <input 
                                type="radio"
                                value={false}
                                name="options"
                                id={`q${i}-option`}
                                onChange={onSelect()}
                            />

                            <label className='text-primary' htmlFor={`q${i}-option`}>{q}</label>
                            <div className='check'></div>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Questions