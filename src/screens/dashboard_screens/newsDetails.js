import { Button } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NewsDetails({ data = [] }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { item } = location.state ?? {}
    if(!item ) navigate('news-data')
    return (
        <>
            <Button onClick={() => navigate('/dashboard/news-data')}>{'<'}</Button>
            <h1>News Api</h1>
            <div className="Articles-div"
                style={{
                    width: "100%", padding: '10%', height: "80%",
                    // backgroundColor: "yellow"
                }}
            >
                <div
                    style={{
                        margin: "2%",
                        backgroundColor: 'whitesmoke'
                    }}
                >
                    <h3 style={{ width: "100%", }} >{item.title}</h3>
                    <img height="200px"  src={item.image}></img>
                    <p style={{ width: "100%", }} >{item.content}</p>
                    <a style={{ width: "max-content", background:'lightblue' , padding:'10px 5px',cursor:'pointer'  , textDecoration:'none' }} target="_blank" href={item.url} >ReadMore</a>
                    <p style={{ backgroundColor: "black",paddingLeft:10, color: 'white', textAlign:'left' }} >
                        {item.author} 
                        
                        <span style={{
                            float:'right',
                            marginRight:10
                        }}>
                            {item.publishedAt}
                        </span>
                        </p>
                </div>
            </div>
            {/* <button >fetch Api</button> */}
        </>
    )
}

// onClick={() => consoleFunc()}