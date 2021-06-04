import React, { useState } from 'react';
import './_categoriesBar.scss';


const keywords = [
    'All',
    'React js',
    'Angular js',
    'React Nativ',
    'Use of Api',
    'Redux',
    'Music',
    'Algorithm Art',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Shwetabh',
]



const CategoriesBar = () => {

    const [activeElement, setActiveElement] = useState('All')

    const handleClick = (value) => {
        setActiveElement(value)
    }

    return <div className="CategoriesBar">

        {
            keywords.map((value, i) => (
                <span onClick={() => handleClick(value)} key={i}
                    className={activeElement === value ? 'active' : ''} >

                    {value}
                </span>
            ))
        }


    </div>
}

export default CategoriesBar
