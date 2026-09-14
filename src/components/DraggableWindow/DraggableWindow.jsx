import "./DraggableWindow.css"
import {useState, useRef} from "react";
import Draggable from "react-draggable";
import { FaLock, FaLockOpen } from "react-icons/fa"

function DraggableWindow({ children, name="" }) {
    const nodeRef = useRef(null);
    const [isDisabled, setDisabled] = useState(false);

    const toggleDisabled = () =>
        setDisabled(!isDisabled);

    return (
        <Draggable
            nodeRef={nodeRef}
            handle={".handle"}
            disabled={isDisabled}
        >
            <div ref={nodeRef}>
                <div className={"handle"}>
                    <p className={"draggableWindowTitle"}>{name}</p>
                    <button
                        onClick={toggleDisabled}
                        className={isDisabled ? "lockedHandleButton" : "unlockedHandleButton"}
                    >
                        {isDisabled ?
                            <FaLock className={"lockIcon"}/> :
                            <FaLockOpen className={"lockIcon"} />
                        }
                    </button>
                </div>
                <div className={"windowContent"}>
                    {children}
                </div>
            </div>
        </Draggable>
    )
}

export default DraggableWindow;