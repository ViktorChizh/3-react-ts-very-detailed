import React, {FC, useEffect, useState} from 'react'
import {DigitalClock} from './DigitalClock';
import {AnalogClock} from './AnalogClock';

type PropsType = {
    isClockDigital: boolean
}

export const Clock: FC<PropsType> = ({isClockDigital}) => {
    const [date, setDate] = useState<Date>(new Date())
    useEffect(() => {
        const id = setInterval(() => setDate(new Date()), 1000)
        return () => clearInterval(id)
    }, []);

    return <>
        { isClockDigital ? <DigitalClock date={date}/> : <AnalogClock date={date}/> }
    </>
}

