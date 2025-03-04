"use client"
import {useState } from "react"


const imgStyl = {
    height:'600px',
    width:'100%',
    backgroundSizeL:'cover',
    backgroundPosition:'center',
    backgroundRepeat:'no-repeat',
}
const preBtnStyl = {
    cursor: 'pointer',
    padding:'0 700px 0 30px ',
    color:'white',
}
const nextBtnStyl = {
    cursor: 'pointer',
    padding:'0 0 0 680px ',
    color:'white',

}
const urlArr = ["https://png.pngtree.com/background/20240110/original/pngtree-sleek-wine-bottles-and-glasses-in-3d-perfect-for-advertising-picture-image_7210245.jpg", "https://infifashion.com/wp-content/uploads/2022/08/sprakling-wine-2-1536x1022.jpg.webp", "https://infifashion.com/wp-content/uploads/2022/08/Big-Banyan-Merlot-2-medium.jpg.webp", "https://thumbs.dreamstime.com/b/still-life-wine-bottles-glasses-grapes-69457817.jpg", "https://img.freepik.com/premium-photo/wine-bottle-glass-grape-vine-old-wine-barrel_645697-2657.jpg","https://cdn.pixabay.com/photo/2017/06/26/12/49/red-wine-2443699_640.jpg","https://media.istockphoto.com/id/1436116103/photo/bartender-pouring-red-wine-into-glass-indoors-closeup-space-for-text.jpg?s=612x612&w=0&k=20&c=pcZE7EHZzR-XAQZI0XobndrcJ174GPlFyMpnNE5TIsQ="];

const SliderPage = () => {
    
    const [count, setCount] = useState(0);
    const [url, setUrl] = useState(urlArr[count]);
    
    if(count === urlArr.length-1){
        setCount(0);
    } else if(count===-1){
        setCount(5);
    }

     // Handle increasing the counter
  const incCount = (): void => {
    setCount(prevCounter => prevCounter + 1);
    console.log(count+1);
    setUrl(urlArr[count+1]);
  };

  // Handle decreasing the counter
  const decCount = (): void => {
    setCount(prevCounter => prevCounter - 1);
    console.log(count-1);
    setUrl(urlArr[count-1]);
    
  };

    return(
        <>
            <div style={{margin:'83px 0 0 0'}}>
                <img style={imgStyl} src={url} alt="Wine Image"/>
            </div>
            <div className="btn" style={{margin:'-320px 0 0 0',}}>
                <button onClick={decCount} style={preBtnStyl} >Prev</button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <button onClick={incCount} style={nextBtnStyl} >next</button>
            </div>
        </>
    )
}

export default SliderPage;