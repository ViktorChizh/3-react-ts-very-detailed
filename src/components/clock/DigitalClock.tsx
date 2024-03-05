import React, {FC} from 'react';

export type DateType = {
    date: Date
}
export const DigitalClock: FC<DateType> = ({date}) => {
    const timeUtility = (num: number) => num < 10 ? '0' + num : num
    return <div style={{fontSize: '48px', fontWeight: '900'}}>
        <span>{timeUtility(date.getHours())}</span>
        {' : '}
        <span>{timeUtility(date.getMinutes())}</span>
        {' : '}
        <span>{timeUtility(date.getSeconds())}</span>
    </div>
}