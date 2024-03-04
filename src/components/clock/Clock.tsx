import React, {FC, useEffect, useState} from 'react'

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
        { isClockDigital ? <DigitalClock date={date}/> : <AnalogClock date={date}/>}
    </>
}

type DateType = {
    date: Date
}
export const DigitalClock: FC<DateType> = ({date}) => {
    const timeUtility = (num: number) => num < 10 ? '0' + num : num
    return <div>
        <span>{timeUtility(date.getHours())}</span>
        {' : '}
        <span>{timeUtility(date.getMinutes())}</span>
        {' : '}
        <span>{timeUtility(date.getSeconds())}</span>
    </div>
}

export const AnalogClock: FC<DateType> = ({date}) => {
    return <div style={{
        position: 'relative',
        width: '110px',
        height: '110px',
        border: '2px solid black',
        borderRadius: '50%'
    }}>
        <div style={{
            position: 'absolute',
            left: 'calc(50% - 1px)',
            top: '50%',
            width: '0px',
            height: '50px',
            border: '1px solid black',
            borderRadius: '1px',
            transform: `rotate(${Number(date.getSeconds()) * 6}deg)`,
            transformOrigin: 'top'
        }}/>
        <div style={{
            position: 'absolute',
            left: 'calc(50% - 2px)',
            top: '50%',
            width: '0px',
            height: '40px',
            border: '2px solid black',
            borderRadius: '2px',
            transform: `rotate(${Number(date.getMinutes()) * 6}deg)`,
            transformOrigin: 'top'
        }}/>
        <div style={{
            position: 'absolute',
            left: 'calc(50% - 3px)',
            top: '50%',
            width: '0px',
            height: '25px',
            border: '3px solid black',
            borderRadius: '3px',
            transform: `rotate(${Number(date.getHours()) * 15}deg)`,
            transformOrigin: 'top'
        }}/>
        <div style={{
            position: 'absolute',
            left: 'calc(50% - 3px)',
            top: 'calc(50% - 3px)',
            width: '6px',
            height: '6px',
            backgroundColor: 'black',
            borderRadius: '50%'
        }}/>
    </div>
}