import { useState, useEffect } from "react";
const Clock = () => {
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);//estableciendo intervalo de actualización de hora actual cada segundo
        return () => clearInterval(interval);//removiendo el intervalo
    }, []);
    const hora = date.getHours() * 30; //se moverá 30 grados cada hora, * 12 = 360 grados
    const minuto = date.getMinutes() * 6; //6 grados cada minuto
    const segundo = date.getSeconds() * 6; //6 grados cada segundo
    return (
        <div className="clock">
            <div className="hand hour" style={{ transform: 'rotate(' + hora + 'deg)' }} data-hour-hand></div>
            <div className="hand minute" style={{ transform: 'rotate(' + minuto + 'deg)' }} data-minute-hand></div>
            <div className="hand second" style={{ transform: 'rotate(' + segundo + 'deg)' }} data-second-hand></div>
            <div className="number number1">1</div>
            <div className="number number2">2</div>
            <div className="number number3">3</div>
            <div className="number number4">4</div>
            <div className="number number5">5</div>
            <div className="number number6">6</div>
            <div className="number number7">7</div>
            <div className="number number8">8</div>
            <div className="number number9">9</div>
            <div className="number number10">10</div>
            <div className="number number11">11</div>
            <div className="number number12">12</div>
        </div>
    );
};

export default Clock;