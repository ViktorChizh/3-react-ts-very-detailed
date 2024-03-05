import React, {FC} from 'react';
import {DateType} from './DigitalClock';

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
            transform: `rotate(${180 + Number(date.getSeconds()) * 6}deg)`,
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
            transform: `rotate(${180 + Number(date.getMinutes()) * 6}deg)`,
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
            transform: `rotate(${180 + Number( date.getHours()) * 30}deg)`,
            transformOrigin: 'top'
        }}/>
        <div style={{
            position: 'absolute',
            left: 'calc(50% - 4px)',
            top: 'calc(50% - 4px)',
            width: '8px',
            height: '8px',
            backgroundColor: 'black',
            borderRadius: '50%'
        }}/>
    </div>
}