import React, {useState} from 'react'
import './style.css';
import Menu from './MenuApi';
import MenuCard from './MenuCard';

const Restaurants = () => {
     const [menuData, setMenuData] = useState(Menu);
    return (
        <div>
            <MenuCard menuData={menuData}/>
        </div>
    )
}

export default Restaurants
