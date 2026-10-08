import "./HomePage.css";
import homeIcon from "../../images/home.webp";
import {Link} from "react-router-dom";
import WorkInProgressPanel from "../../components/workInProgressPanel/workInProgressPanel";

export default function HomePage() {
    return (
        <div className={"pageContent"}>
            <div className={"aboutMe"}>
                <div className={"aboutMeHeader"}>
                    <div className={"pfpFrame"}>
                        <img src={homeIcon} alt={"pfp"}/>
                    </div>
                    <h4>O mnie</h4>
                </div>
                <p>
                    Cześć! Mam na imię Franciszek. Jestem studentem II stopnia informatyki.
                    W informatyce szczególnie interesuję się programowaniem w języku Java,
                    programowaniem współbierznym i testowaniem automaycznym.
                </p>
                <p>
                    Poza programowaniem lubię słuchać i grać muzykę, oglądać i kręcić filmy, oraz grać w gry komputerowe.
                </p>
                <p>
                    Stworzyłem tę stronę jako moje portfolio,
                    ale również jako miejsce gdzie będę mógł się kreatywnie wyrazić i dzielić pomysłami.{" "}
                    <u>Stworzyłem ją samodzielnie bez vibe codingu.</u>
                </p>
                <p>
                    Kod tej sotrony oraz innych moich projektów można znaleźć na moim profilu{" "}
                    <Link to={"https://github.com/ffrycz"}>GitHub</Link>.
                </p>
                <p>
                    <u>Póki co strona jest w trakcie budowy i niektóre podstorny mogą być niedostępne.</u>
                </p>
                <hr/>
            </div>
            <WorkInProgressPanel/>
        </div>
    )
}