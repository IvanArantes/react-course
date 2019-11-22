import React from 'react'
import Option from './Option';



const Options = (props) => {
    return (
        <div>
            <button onClick={props.deleteAllOptions}>Remove All</button>
            <ol>
                {
                    props.options.map(option => {
                        return <Option
                            key={option}
                            optionText={option}
                            handleDeleteOption={props.handleDeleteOption}
                        />
                    })
                }
            </ol>
        </div>
    )
}

export default Options;