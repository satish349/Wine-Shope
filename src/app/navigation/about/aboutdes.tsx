
import { CSSProperties } from "react";

const imgStyle:CSSProperties = {
    background:`url("https://img.freepik.com/premium-photo/bottle-wine-with-glass-wine-it_771335-50846.jpg")`,
    height:'390px',
    width:'390px',
    backgroundSize:'cover',
    borderRadius:'10px',
    boxShadow:'2px 2px 20px 5px rgb(56, 55, 5)',
    border:'1px solid rgba(255,255,255,0.5)',
    filter:'blur(0.5px)',
    margin:'0 150px 0 130px'
}
const aboutStyle:CSSProperties = {
    padding:'120px'
}
export default function AboutDes() {
    return(
        <>
            <div style={{display:'flex',alignItems:'center',}}>
                <div style={imgStyle}>
                    <img style={{margin:'60px 0 0 120px', border:'1px solid white', borderRadius:'40% 10px 40% 10px'}} src="https://img.freepik.com/premium-photo/bottle-wine-with-glass-wine-it_771335-50846.jpg" alt="" />
                </div>
                <div style={aboutStyle}>
                    <h1 style={{fontSize:'1.5rem', fontWeight:'900', padding:'10px 0'}}>About Us</h1>
                    <p style={{width:'500px'}}>This plateform is provides different kind of wine such as Brands or Category. Also this help you to easy to purches your lovely brands of wine.</p>
                    <p style={{margin:'1px 40px', fontStyle:'italic'}}>Wine makes daily living easier, less hurried, with fewer tensions and more tolarance.</p>
                </div>
            </div>
        </>
    )
}