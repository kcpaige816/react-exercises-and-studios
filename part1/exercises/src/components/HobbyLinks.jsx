export default function HobbyLinks() {
    let hobbyLinks = ["https://www.dmc.com/US/en/patterns/free-patterns-by-craft/embroidery?products_en_production%5Bquery%5D=","https://www.rollerblade.com/usa/en"];
    return (
        <div>
        <ul>
            <h3>My Hobbies</h3>
          <li a href={hobbyLinks[0]}>Embroidery</li>
          <li a href={hobbyLinks[1]}>Roller Blading</li>
        </ul>
        </div>
    )
}