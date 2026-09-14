import {Link} from "react-router-dom";
import DyslexicWrapper from "../../components/DyslexicWrapper";
import DraggableWindow from "../../components/DraggableWindow/DraggableWindow";

function Dyslexia() {

    return (
        <div className={"pageContent"}>
            <DyslexicWrapper>
                <DraggableWindow name={"Dyslexia"}>
                    <div className={"pageContainer"} >
                        <abbr title={"Strona została przeze mnie przerobiona z JQuery na React"}>
                            <h3>Poniższa strona jest polskim tłumaczeniem posta ze strony{" "}
                                <Link to={"https://geon.github.io/programming/2016/03/03/dsxyliea"}>
                                    https://geon.github.io </Link>
                            </h3>
                        </abbr>
                        <p>
                            Koleżanka, która ma dysleksję opisała mi swoje doświadczenia z czytania. <i>Potrafi</i> czytać, ale wymaga to od niej dużo koncentracji, a litery zdają się "zamieniać miejscami".
                        </p>
                        <p>
                            Pamiętam, że czytałem o <Link to={"https://en.wikipedia.org/wiki/Typoglycemia"}>typoglokemi</Link>. Czy nie dałoby się zrobić tego interaktywnie na stronie internetowej przy pomocy Javascript? Oczywiście, że by sie dało.
                        </p>
                        <p>
                            Chcersz zrobić zakłakę tej storny czy coś w tym stylu? Zapraszam do <Link to={"https://github.com/geon/geon.github.com/blob/master/_posts/2016-03-03-dsxyliea.md"}>forkowania</Link> na github.
                        </p>

                        <blockquote>
                            <p>
                                Dysleksja charakteryzuje się trudnością w nauce płynnego czytania i rozumienia czytanego tekstu przy przeciętnym poziomie inteligencji. Do owych trudności zaliczamy problemy ze świadomością fonologiczną, dekodowaniem fonologicznym, prędkością przetwarzania, kodowaniem ortograficznym, słuchową pamięciom krutkotrwałą, umiejętnościami językowymi/rozumieniem werbalnym, oraz/lub szybkim nazywaniem.
                            </p>
                        </blockquote>

                        <blockquote>
                            <p>
                                Specyficzne zaburzenia czytania są najczęstszym objawem dysleksji. Chociaż dysleksję rozpoznaje się najczęściej przez problemy w czytaniu, nie wyszystkie z nich są oznaką dysleksji.
                            </p>
                        </blockquote>

                        <blockquote>
                            <p>
                                Niektórzy postrzegają dysleksję jako odrębną od trudności w czytaniu wynikających z innych przyczyn takich jak nieneurologiczne zaburzenie wzroku lub słuchu, albo słabe lub niewystarczające nauczenie czytania. Proponowane są trzy podtypy dysleksji poznawczej (słuchowa, wzrokowa oraz integracyjna), jednakże poszczególne przypadki łatwiej opisać poprzez podanie konkretnych podstawowych neuropsychologicznych deficytów i współwystępujących trudności w uczeniu się (np. deficyt uwagi/nadruchliwość, trudności z matematyką itp.). Naukowcy z MIT odkryli, że dyslektycy wykazują trudności w rozpoznawaniu głosu.
                            </p>
                        </blockquote>

                        <i>Źródło: <Link to={"http://en.wikipedia.org/wiki/Dyslexia"}>Wikipedia</Link></i>
                    </div>
                </DraggableWindow>
            </DyslexicWrapper>
        </div>
    )
}

export default Dyslexia;