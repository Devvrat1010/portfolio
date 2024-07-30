import { useEffect, useState } from "react";

export default function Test(){
    const [data, setData] = useState("");
    useEffect(() => {
        fetch("http://65.2.121.87/")
        .then((res) => res.json())
        .then((data) => setData(data.message))
    }, [])
    return(
        <div>
            <h1> Data from backend : {data}</h1>
        </div>
    )
}