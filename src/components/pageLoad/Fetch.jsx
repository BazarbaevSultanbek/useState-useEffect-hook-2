import { useState, useRef, useEffect } from "react";
import "./fetch.scss";

function Fetch() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [image, setImg] = useState("");
    const pend = useRef(null);
    const el = useRef(null);

    const fetchData = () => {
        fetch('https://randomuser.me/api/')
            .then((result) => { return result.json() })
            .then(users => {
                setName(users.results[0].name.first);
                setEmail(users.results[0].email);
                setPhone(users.results[0].phone);
                setImg(users.results[0].picture.large);

                setTimeout(() => {
                    el.current.style.display = "none";
                    pend.current.style.display = 'block';
                    setName("");
                    setEmail("");
                    setPhone("");
                    setImg("");

                    setTimeout(() => {
                        fetchData();
                        el.current.style.display = "block";
                        pend.current.style.display = 'none';
                    }, 1000);
                }, 5000);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        setTimeout(() => {
            pend.current.style.display = 'block';
            fetchData();
        }, 1000);
    }, []);

    return (
        <div className="Fetch">
            <div className="Fetch-response">
                <div className="Fetch-pending">
                <p ref={pend}>Pending...</p>
                </div>
                <ul ref={el} style={{ display: "none" }}>
                    <li>Name: {name}</li>
                    <li>Email: {email}</li>
                    <li>Phone: {phone}</li>
                    <img src={image} alt="user" />
                </ul>
            </div>
        </div>
    );
}

export default Fetch;
