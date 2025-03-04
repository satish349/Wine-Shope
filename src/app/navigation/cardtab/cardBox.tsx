
"use client";
import { CSSProperties} from 'react';

const boxStyle:CSSProperties = {
    color:'white',
    height:'350px',
    width:'280px',
    border:'1px solid rgba(255, 255, 255, 0.37)',
    borderRadius:'10px 50% 10px 50%',
    margin:'30px 40px',
    boxShadow:'2px 2px 10px 2px rgba(149, 136, 67, 0.3)',
    cursor:'pointer',
}
export default function CardBox({image, title}:{image:string, title:string}){
    const innerPro:CSSProperties = {
        background:`url(${image})`,
        backgroundSize:'cover',
        backgroundPosition:'center',
        height:'100%',
        width:'100%',
        borderRadius:'10px',
        opacity:'0.7',
    }
    return(
        <>
            <div>
                <div >
                    <div style={boxStyle}>
                        <div style={innerPro}>
                            <h1 style={{textAlign:'center',paddingTop:'300px',fontWeight:'bold', textShadow:'4px 5px 3px black'}}>{title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}