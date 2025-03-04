
import TypesOfWine from "./typesOfWine"

export default function CategoryPage() {
    const img = {
        0 : "https://infifashion.com/wp-content/uploads/2022/08/red-wine-1536x1025.jpg.webp",
        1 : "https://infifashion.com/wp-content/uploads/2022/08/white-wine-1536x1025.jpg.webp",
        2 : "https://infifashion.com/wp-content/uploads/2022/08/rose-wine-1536x1024.jpg.webp",
        3 : "https://infifashion.com/wp-content/uploads/2022/08/sprakling-wine-2-1536x1022.jpg.webp",
        4 : "https://infifashion.com/wp-content/uploads/2022/08/Dessert-wine-1536x1024.jpg.webp",
        5 : "https://infifashion.com/wp-content/uploads/2022/08/Fortified-Wines-1536x1024.jpg.webp",
    }
    return(
        <>
            <hr style={{color:'white'}} /><hr style={{color:'white'}} /><hr style={{color:'white'}} /><hr style={{color:'white'}} />
            <div style={{display:'flex', background:'linear-gradient(40deg,rgba(5, 83, 131, 0.58),rgb(31, 94, 133),rgba(5, 83, 131, 0.58)',padding:'30px 60px 0 100px', overflow:'auto' }}>
                
                <TypesOfWine img = {img[0]} title = {"Red Wines"}/>
                <TypesOfWine img = {img[1]} title = {"White wines"}/>
                <TypesOfWine img = {img[2]} title = {"Rosé Wines"}/>
                <TypesOfWine img = {img[3]} title = {"Sparkling Wines"}/>
                <TypesOfWine img = {img[4]} title = {"Dessert Wines"}/>
                <TypesOfWine img = {img[5]} title = {"Fortified Wines"}/>
            </div>
        </>
    )
}