import { useParams } from "react-router-dom"
import MenuItems from "../components/MenuItems"
import OrderThroughApps from "../components/OrderThroughApps"
import HeroInformation from "../components/HeroInformation"

const Menu = () => {
      const { category } = useParams()
    
    return (
        <>
            <div>
                <HeroInformation title={"Our Menu"}/>
                <MenuItems category={category}/>
                <OrderThroughApps />
            </div>
        </>
    )
}

export default Menu
