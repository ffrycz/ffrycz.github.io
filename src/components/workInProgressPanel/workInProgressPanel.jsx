import "./workInProgressPanel.css"
import DraggableWindow from "../DraggableWindow/DraggableWindow";
import cautionIcon from "../../images/uwaga.webp"

function WorkInProgressPanel() {
    return (
        <div className="workInProgressPanel">
            <DraggableWindow bounds={".workInProgressPanel"} predisabled={true} name={"Work in progress"}>
                {/*<div className={"tape"}>*/}
                {/*    <div className={"tapeContent"}>*/}
                {/*        <div className={"tapeText"}>Work in progress</div>*/}
                {/*        <div className={"tapeText"}>\\</div>*/}
                {/*        /!*<div className={"tapeText"}>Work in progress</div>*!/*/}
                {/*        /!*<div className={"tapeText"}>\\</div>*!/*/}
                {/*        /!*<div className={"tapeText"}>Work in progress</div>*!/*/}
                {/*        /!*<div className={"tapeText"}>\\</div>*!/*/}
                {/*    </div>*/}
                {/*    <div aria-hidden className={"tapeContent"}>*/}
                {/*        <div className={"tapeText"}>Work in progress</div>*/}
                {/*        <div className={"tapeText"}>\\</div>*/}
                {/*        <div className={"tapeText"}>Work in progress</div>*/}
                {/*        /!*<div className={"tapeText"}>\\</div>*!/*/}
                {/*        /!*<div className={"tapeText"}>Work in progress</div>*!/*/}
                {/*        /!*<div className={"tapeText"}>\\</div>*!/*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div className={"workInProgressMessage"}>
                    <div className={"iconContainer"}>
                        <img src={cautionIcon} alt={"work in progress icon"}/>
                    </div>
                    <div className={"messageContainer"}>
                        This feature is still in development
                    </div>
                </div>
            </DraggableWindow>
        </div>
    );
}

export default WorkInProgressPanel;