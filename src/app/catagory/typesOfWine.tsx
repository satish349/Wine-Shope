
import { CSSProperties } from "react"

export default function TypesOfWine({img, title}:{img:string,title:string}){
    const boxStyle:CSSProperties = {
        backgroundImage:`url(${img})`,
        backgroundSize:'cover',
        height:'300px',
        width:'250px',
        border:'1px solid black',
        margin:'40PX',
        borderRadius:'20px',
        boxShadow:'2px 2px 30px 3px rgb(0, 0, 0)',
        cursor:'pointer',
    }
    const titleStyle:CSSProperties = {
        color:'rgb(214, 230, 0)',
        textAlign:'center',
        margin:'250px 0 0 0',
        fontSize:'1.2rem',
        fontWeight:'bold',
        textShadow:'2px 2px 4px black'
    }
    return(
        <>
            <div >
                <div style={boxStyle}>
                    <p style={titleStyle}>{title}</p>
                </div>

            </div>
        </>
    )
}