import {useEffect, useRef} from "react";

function DyslexicWrapper({ children }) {
    const textNodesRef = useRef([]);
    const containerRef = useRef(null);

    useEffect(() => {

        const walker = document.createTreeWalker(
            containerRef.current,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {
                    const parent = node.parentElement;
                    const forbiddenTagNames = ['IFRAME', 'SCRIPT'];
                    if (parent && (forbiddenTagNames.includes(parent.tagName))) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return node.nodeValue.trim() ?
                        NodeFilter.FILTER_ACCEPT :
                        NodeFilter.FILTER_REJECT;
                }
            }
        );

        const nodes = [];
        let node = walker.nextNode();
        while (node) {
            nodes.push(node);
            node = walker.nextNode();
        }

        textNodesRef.current = nodes;

        const re = /\w+/g;
        const wordsInTextNodes = nodes
            .map((node) => {
                const words = []
                let match
                while ((match = re.exec(node.nodeValue)) != null) {
                    words.push({
                        length: match[0].length,
                        position: match.index
                    })
                }
                return words;
            })


        // From https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
        const getRandomInt = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        const messUpWord = (word) => {
            if (word.length < 3) {
                return word;
            }

            return word[0] + messUpMessyPart(word.slice(1, -1)) + word[word.length - 1];
        }

        const messUpMessyPart = (messyPart) => {
            if (messyPart.length < 2) {
                return messyPart;
            }

            let a, b;
            while (!(a < b)) {
                a = getRandomInt(0, messyPart.length - 1);
                b = getRandomInt(0, messyPart.length - 1);
            }

            return messyPart.slice(0, a) + messyPart[b] + messyPart.slice(a + 1, b) + messyPart[a] + messyPart.slice(b + 1);

        }



        const messUpWords = () => {
            textNodesRef.current.forEach((node, index) => {
                wordsInTextNodes[index].forEach((wordMeta) => {
                    if (Math.random() > 1 / 10) {
                        return;
                    }

                    const word = node.nodeValue.slice(wordMeta.position, wordMeta.position + wordMeta.length);
                    const before = node.nodeValue.slice(0, wordMeta.position);
                    const after = node.nodeValue.slice(wordMeta.position + wordMeta.length);


                    // node.nodeValue = '44444444444';
                    node.nodeValue = before + messUpWord(word)+ after;
                })
            })
        }

        const messUpInterval = setInterval(messUpWords, 50);
        return () => {
            clearInterval(messUpInterval);
        }
    }, [textNodesRef, containerRef]);

    return (
        <div ref={containerRef}>
        {children}
        </div>
    )
}

export default DyslexicWrapper;