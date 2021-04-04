import React from 'react';

export const Categories = () => {
    const list = [
        "Мясные", 
        "Вегетарианская", 
        "Гриль",
        "Острые",
        "Закрытые",
    ];
    const [activeItem, selectItem] = React.useState(null);

    const onChoice = (category, index = null) => {
        selectItem(index);
    }

    const categoriesList = list.map((el, index) => { 
        return (
            <li 
            className = {activeItem === index && 'active'} 
            onClick = {() => onChoice(el, index)} 
            key={el} 
            > 
                { el } 
            </li>
        )
    });

    return (
        <div className="categories">
            <ul>
                <li 
                className = {activeItem === null && 'active'} 
                onClick = {() => onChoice()} 
                >
                    Все
                </li>
                { categoriesList }
            </ul>
        </div>
    )
}
