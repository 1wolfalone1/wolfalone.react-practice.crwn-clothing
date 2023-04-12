
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js'
import {createContext, useState, useEffect} from 'react'



export const CategoriesContext = createContext({
    categoryMap: {}, 
})


export const CategoriesProvider = ({children}) => {
    const [categoryMap, setCategoryMap] = useState({})

    useEffect(() => {
        const getCategoryMap = async () => {
            const categoryMap = await getCategoriesAndDocuments();
            setCategoryMap(categoryMap);
        }
        getCategoryMap();
    }, [])
    const value = {categoryMap};

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    )
}