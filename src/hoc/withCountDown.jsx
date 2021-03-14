import { useEffect, useState } from "react"

export default function WithCountDown({ WapperComponent, timeCountDown }) {
    let [time, setTime] = useState(timeCountDown)

    useEffect(() => {
        let timeinterval = setInterval(() => {
            if (time === 0) {
                return clearInterval(timeinterval)
            }
            setTime(--time)
        }, 1000)
    }, [time])

    let day = parseInt(time / 60 / 60 / 24)

    let hours = parseInt((time / 60 / 60) - day * 24)

    let minutes = parseInt(time / 60 - ((day * 24) * 60 + hours * 60))

    let seconds = time % 60

    let value = {
        day,
        hours,
        minutes,
        seconds
    }

    return <WapperComponent {...value} />
}