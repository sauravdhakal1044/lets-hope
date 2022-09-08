import React, { useState, useEffect, useRef } from 'react'
import education from './education';
import Eitem from './Eitem';

function Education() {

    const [scroll, setscroll] = useState(false)
    const [inView, setInView] = React.useState(false);
    const [cName, setcName] = useState("full")
    const [opacity, setopacity] = useState(0)
    const [educationValue, seteducation] = useState([])

    useEffect(() => {

        if (inView) {
            setopacity(100)
            setcName("slideOutRight")
        }
    }, [inView])

    useEffect(() => {

        seteducation(education)

    }, [])



    return (
        <>
            <div className='lg:px-20 pt-20 gap-y-14 pb-8 grid grid-cols-1 '>

                {
                    educationValue.map((item, index) => {
                        return <Eitem
                            key={index}
                            value={item}
                        />

                    })
                }

                
            </div>
        </>
    )
}

export default Education