import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import "./load.scss"
const Load = () => {
    const [title, setTitle] = useState("");
    const [comments, SetComments] = useState("");
    const [page, setPage] = useState("first");
    const [showAnimation, setShowAnimation] = useState(false);
    const [showScroll, setShowScroll] = useState(false);
    const [text, setUnmount] = useState("Mount Comment Component")
    const unmount = useRef(null);

    const jsonData = (number) => {
        fetch('https://jsonplaceholder.org/posts')
            .then(response => response.json())
            .then(posts => {
                setTitle(posts[number].title);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });

        fetch("https://jsonplaceholder.org/comments")
            .then(response => response.json())
            .then(posts => {
                SetComments(posts[number].comment);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }

    const UnmountClick = () => {
        if (text === "Mount Comment Component") {
            setUnmount("Unmount Comment Component");
            unmount.current.style.background = "rgba(249, 70, 70, 0.984)";
            setShowAnimation(true);
            setTimeout(() => {
                setShowAnimation(false);
                setShowScroll(true);
                switch (page) {
                    case "first":
                        setShowScroll(true);
                        return jsonData(0);
                    case "second":
                        setShowScroll(true);
                        return jsonData(1);
                    case "third":
                        setShowScroll(true);
                        return jsonData(2);
                }
            }, 7000);
        } else {
            setUnmount("Mount Comment Component");
            unmount.current.style.background = "#4949f5";
            setShowAnimation(false);
            setShowScroll(false);
        }
    }


    return (
        <div className="Load">
            <div className="Load-navi">
                <span>Pages</span>
                <button onClick={() => setPage("first")}>1</button>
                <button onClick={() => setPage("second")}>2</button>
                <button onClick={() => setPage("third")}>3</button>
            </div>
            <button className="Load-unmount" onClick={UnmountClick} ref={unmount}>
                {text}
            </button>
            <div className="Load-pending" style={{ display: showAnimation ? "block" : "none" }}>
                <p className="Load-animation"></p>
            </div>
            <div className="Load-scroll" style={{ display: showScroll ? "block" : "none" }}>
                <div className="Load-scroll-in">
                    <h4>{title}</h4>
                    <p>{comments}</p>
                    <h4>{title}</h4>
                    <p>{comments}</p>
                    <h4>{title}</h4>
                    <p>{comments}</p>
                </div>
            </div>
        </div>
    )
}

export default Load;
