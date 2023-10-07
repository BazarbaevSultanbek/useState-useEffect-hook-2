import { useEffect, useState } from "react";
import "./time.scss";

function Time() {
    const [secondRotate, setSecondRotate] = useState(0);
    const [minuteRotate, setMinuteRotate] = useState(0);
    const [hoursRotate, setHourRotate] = useState(0);
    useEffect(() => {
        const updateSecondRotate = () => {
            const seconds = new Date().getSeconds();
            const minutes = new Date().getMinutes();
            const hours = new Date().getHours();
            setSecondRotate(((seconds % 60) * 6) + 180);
            setMinuteRotate(((minutes % 60) * 6) + 180);
            setHourRotate(((hours % 12) * 30) + 180);
        };
        updateSecondRotate();
        const intervalId = setInterval(updateSecondRotate, 1000);

        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className="Time">
            <div className="Time-clock">
                <span className="Time-hour" style={{ transform: `rotate(${hoursRotate}deg)` }}></span>
                <span className="Time-minute" style={{ transform: `rotate(${minuteRotate}deg)` }}></span>
                <span className="Time-second" style={{ transform: `rotate(${secondRotate}deg)` }}></span>
                <span className="Time-center"></span>
                <ul className="Time-numbers">
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                    <li>5</li>
                    <li>6</li>
                    <li>7</li>
                    <li>8</li>
                    <li>9</li>
                    <li>10</li>
                    <li>11</li>
                    <li>12</li>
                </ul>
            </div>
        </div>
    );
}

export default Time;
