"use client";
import CardBox from "./cardBox"
import { CSSProperties} from "react"

const headStyl: CSSProperties = {
    textAlign: 'center',
}
export default function CardTab(){
    const image = {
        0 : "https://infifashion.com/wp-content/uploads/2023/11/Crios.png.webp",
        1 : "https://infifashion.com/wp-content/uploads/2023/09/Penfolds.webp",
        2 : "https://infifashion.com/wp-content/uploads/2023/09/Lafite.webp",
        3 : "https://infifashion.com/wp-content/uploads/2023/09/Charosa.webp",
        4 : "https://infifashion.com/wp-content/uploads/2023/09/Changyu.webp",
        5 : "https://infifashion.com/wp-content/uploads/2023/09/Yellow-tail-1536x1024.webp",
        6 : "https://infifashion.com/wp-content/uploads/2023/09/Vallonne.webp",
        7 : "https://infifashion.com/wp-content/uploads/2022/08/York-Arros-wines-in-india-1-1536x1024.jpg.webp",
        8 : "https://infifashion.com/wp-content/uploads/2022/08/La-Reserve-by-Grover-Zampa-1536x1023.jpg.webp",
        9 : "https://infifashion.com/wp-content/uploads/2022/08/KRSMA-Sangiovese-medium.jpeg.webp",
        10 : "https://infifashion.com/wp-content/uploads/2022/08/Reveille-Reserve-Cabernet-Sauvignon-1.jpg.webp",
        11 : "https://infifashion.com/wp-content/uploads/2022/08/Reserve-Tempranillo-By-Charosa.png.webp",
        12 : "https://infifashion.com/wp-content/uploads/2022/08/Big-Banyan-Merlot-2-medium.jpg.webp",
        13 : "https://infifashion.com/wp-content/uploads/2022/08/Sette-by-Fratelli-Wines.webp",
        14 : "https://infifashion.com/wp-content/uploads/2022/08/Four-Seasons-Barrique-Reserve-Shiraz.jpg.webp",
        15 : "https://infifashion.com/wp-content/uploads/2022/08/Cabernet-Shiraz-By-Sula-1-1536x1081.jpg",
    }
    return(
        <>
            <div style={{background:'rgba(1, 16, 13, 0.83)'}}>
            <hr style={{color:"white"}} /><hr style={{color:"white"}} /><hr style={{color:"white"}}/><hr style={{color:"white"}}/>
                <div style={headStyl} className="head">
                    <h1 style={{fontSize:'1.8rem', fontWeight:'700',color:'white',padding:'20px'}}>Find Your Own Brands.</h1>
                </div>

                <div style={{display:'flex', alignItems:'center', justifyContent:'center', padding:'0 40px 90px 40px', flexWrap:'wrap'}}>
                    <CardBox image = {image[0]} title = {"Crios Torrontes"}/>
                    <CardBox image = {image[1]} title = {"Penfolds"}/>
                    <CardBox image = {image[2]} title = {"Lafite Rothschild"}/>
                    <CardBox image = {image[3]} title = {"Charosa"}/>
                    <CardBox image = {image[4]} title = {"Changyu"}/>
                    <CardBox image = {image[5]} title = {"Yellow Tail"}/>
                    <CardBox image = {image[6]} title = {"Vallonne "}/>
                    <CardBox image = {image[7]} title = {"York Arros"}/>
                    <CardBox image = {image[8]} title = {"La Reserve"}/>
                    <CardBox image = {image[9]} title = {"KRSMA"}/>
                    <CardBox image = {image[10]} title = {"Reveille"}/>
                    <CardBox image = {image[11]} title = {"Reserve Tempranillo"}/>
                    <CardBox image = {image[12]} title = {"Big Banyan Merlot"}/>
                    <CardBox image = {image[13]} title = {" Sette by Fratelli Wines"}/>
                    <CardBox image = {image[14]} title = {"Four Seasons Barrique Reserve Shiraz "}/>
                    <CardBox image = {image[15]} title = {"Sula"}/>
                </div>
            </div>
        </>
    )
}