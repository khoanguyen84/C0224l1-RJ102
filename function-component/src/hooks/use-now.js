import { useState } from "react"

export default function useNow() {
    const [now, setNow] = useState([])
    function updateTime() {
        let now = new Date()
        
        let hour = now.getHours()
        hour = hour > 12 ? hour - 12 : hour
        hour = hour < 10 ? `0${hour}` : hour
        
        let minute = now.getMinutes()
        
        let second = now.getSeconds()
        second = second < 10 ? `0${second}` : second

        let ampm = hour > 12 ? 'AM' : 'PM'
        setNow([
            hour,
            minute,
            second,
            ampm
        ])
    }
    setInterval(() => {
        updateTime()
    }, 1000)


    return now
}