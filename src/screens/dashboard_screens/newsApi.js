import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewsApi({ data = [] }) {
    const navigate = useNavigate();

    // console.log(apiAdress)
    return (
        <>
            <h1>News Api</h1>
            <div className="Articles-div"
                style={{
                    width: "100%", padding: '10%', height: "80%",
                    // backgroundColor: "yellow"
                }}
            >
                {data.map((e, i) => {
                    return (
                        <div
                            key={i}
                            style={{
                                margin: "2%",
                                backgroundColor: 'whitesmoke'
                            }}
                            onClick={() => navigate('/dashboard/news-data/details', {
                                state: {
                                    item:e
                                }
                            })}
                        >
                            <h3 style={{ width: "100%", }} >{e.title}</h3>
                            <p style={{ width: "100%", }} >{e.description}</p>
                            <p style={{ backgroundColor: "black", color: 'white' }} >{e.author}</p>
                        </div>
                    )
                })
                }
            </div>
            {/* <button >fetch Api</button> */}
        </>
    )
}

// onClick={() => consoleFunc()}