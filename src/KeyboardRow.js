import KeyboardKey from "./KeyboardKey";

export default function KeyboardRow(props){
    const {keyRow} = props;
    return(
        <div className="Keyboard-row">
            {keyRow.map((keyObject)=>{
                return <KeyboardKey keyObject={keyObject}/>
            })}
        </div>
    )
}