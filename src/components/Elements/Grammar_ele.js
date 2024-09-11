import React from 'react'
import bullet from '../../assets/Suggestions/Ellipse 35.png'
import bullet_gray from '../../assets/Suggestions/Ellipse 36.png'


const Grammar_ele = () => {
    const words = 'I am'
    const error_type = 'Incorrect Word Order'

    return (
        <div>
        <div>
            <div className='my-5
                            flex
                            px-4 py-4
                            font-inter
                            border-[1px] rounded-md
                            shadow-[0_0px_10px_0px_rgba(0,0,0,0.2)]
                            '>
            <img className='my-auto
                            h-fit'
                    src={bullet} alt='bullet'/>
            <div className='text-sm mx-3'>
                {words}
            </div>
            <img className='my-auto
                            h-fit'
                src={bullet_gray} alt='bullet'/>
            <div className='text-sm text-[#818181] ml-3'>
                {error_type}
            </div>
            </div>
        </div>
        </div>
    )

}

export default Grammar_ele