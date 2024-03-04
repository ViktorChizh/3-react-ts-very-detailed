import {Clock} from './Clock'

export default {
    title: 'Clock',
    component: Clock
}

export const AnalogClock = () => {
    return <Clock isClockDigital={false}/>
}

export const DigitalClock = () => {
    return <Clock isClockDigital={true}/>
}