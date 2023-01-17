


export default function Buttons(props){

return (
    <div className="buttons">
        <button onClick={props.djSmall}className="dj-small">DJ small</button>
        <button onClick={props.partydj}className="party-dj">Party DJ</button>
        <button onClick={props.leftblue}className="left-blue">Left Blue</button>
        <button onClick={props.rightblue}className="right-blue">Right Blue</button>
        <button onClick={props.bigdj1}className="big-dj-one">Big-DJ-1</button>
        <button onClick={props.bigdj2}className="big-dj-two">Big-DJ-2</button>
        <button onClick={props.bigdj3}className="big-dj-three">Big-DJ-3</button>
        <button onClick={props.bigdj4}className="big-dj-four">Big-DJ-4</button>
        <button onClick={props.makeNoise} className="makeNoise">Make Noise</button>
    </div>
    )
}