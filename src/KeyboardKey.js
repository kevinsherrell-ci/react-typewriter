import {keyboard} from "@testing-library/user-event/dist/keyboard";

export default function KeyboardKey(props){
    const {keyObject} = props;
    return (
        <div className="Keyboard-key">
            <p>{keyObject.letter}</p>
        </div>
    )
}