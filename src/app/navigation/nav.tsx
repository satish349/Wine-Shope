import Link from "next/link";

const NavBar: React.CSSProperties = {
    display:'flex',
    width:'100%',
    alignItems:'center',
    backgroundColor:'rgba(0, 3, 20, 0.89)',
    padding:'20px',
    color:'white',
    position:'fixed',
    zIndex: 1000,
}
const ulStyle: React.CSSProperties = {
    display:'flex',
    margin:'0 0 0 200px'
}
const liStyle: React.CSSProperties = {
    padding:'5px 20px',
    fontSize:'1rem'
}
const searchSty: React.CSSProperties = {
    padding:'10px 20px',
    backgroundColor:'rgba(255, 255, 255, 0.28)',
    color:'white',
    borderRadius:'10px',
    width:'400px',
}
const NavigationPage = () => {
    return(
        <>
            <div className="NavBar" style={NavBar}>
                <div className="logo" style={{margin:'0 30px'}}>
                    Joy <sup>98</sup>
                </div>
                <div style={{margin:'0 0 0 200px'}} className="search">
                    <input style={searchSty} type="text" placeholder="Search somthing..." />
                </div>
                <div className="navContant">
                    <ul style={ulStyle}>
                        <li style={liStyle}>
                            <Link href="/navigation">Home</Link>
                        </li>
                        <li style={liStyle}>
                            <Link href="/navigation/about">About</Link>
                        </li>
                        <li style={liStyle}>
                            <Link href="/navigation/brand">Brands</Link>
                        </li>
                        <li style={liStyle}>
                            <Link href="/navigation/myProfile">MyProfile</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default NavigationPage;
