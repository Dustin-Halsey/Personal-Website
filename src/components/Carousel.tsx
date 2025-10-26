import { useCallback, useEffect, useState, KeyboardEvent } from "react"




export default function Carousel() {
    const style= {
        width:'100%',
        aspectRatio:16/9,
        backgroundColor:'#333333',
        borderRadius: '0.25em',
        margin: '5px',
        display:'flex',
        flexDirection:'row',
    };

    return (
        <div style={style}>
            <ol>
                <li data-target="#carouselExampleIndicators" data-slide-to="0"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
        </div>
    )
}