"use client";
import Link from "next/link";


export default function FooterLink(){

    return(
        <>
            <div style={{display:'flex',alignItems:'center'}}>
                <div className="logo" style={{padding:'10px',margin:'50px 100px 50px 100px'}}>
                    logo
                </div>
                <div className="allLink" style={{display:'flex',opacity:'0.7'}}>
                    <div className="webLink" style={{display:'flex', padding:'0 50px'}}>
                        
                        <ul>
                            <p style={{fontSize:'1.1rem', fontWeight:'700', color:'GrayText'}}>Brouser Link</p>
                            <li>Home</li>
                            <li>About</li>
                            <li>Brands</li>
                            <li>Profile</li>
                        </ul>
                    </div>
                    <div className="termsAndCondition" style={{display:'flex',alignItems:'center', padding:'0 50px'}}>
                        <p>Terms & Conditions</p>
                    </div>
                    <div className="contectMe" style={{display:'flex',alignItems:'center', padding:'0 50px'}}>
                        <ul>
                            <p style={{fontSize:'1.1rem', fontWeight:'700', color:'GrayText'}}>contect Me By</p>
                            <li>satishkumar848210@gmail.com</li>
                            <li>satishskjoy@gmail.com</li>
                            <li>satishkumar848210@gmail.com</li>
                        </ul>
                    </div>
                    <div className="spcialMedia" style={{alignItems:'center', padding:'0 50px'}}>
                        <p style={{fontSize:'1.1rem', fontWeight:'700', color:'GrayText'}}>Social Media App</p>
                        <Link href="#">Instagram</Link><br />
                        <Link href="#">LinkedIn</Link><br />
                        <Link href="#">GitHub</Link><br />
                        <Link href="#">Facebook</Link><br />
                    </div>

                </div>
            </div>
            <p style={{textAlign:'center', padding:'20px 0 50px 0'}}>copy &copy; right clime</p>
        </>
    )
}