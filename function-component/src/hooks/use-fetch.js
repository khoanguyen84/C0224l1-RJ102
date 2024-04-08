/**
 * Custom Hook (Hook do LTV chủ động tạo ra)
 * Bắt buộc:
 * tên của custom hook phải bắt đầu bởi từ "use"
 */

import { useEffect, useState } from "react";

function useFetch(url){
    const [categoryList, setCategoryList] = useState([])
    useEffect(() => {
        async function fetchCategory(){
            let res = await fetch(url)
            let data = await res.json()
            setCategoryList(data)
         }

        fetchCategory()
    }, [])

    console.log(categoryList);
    return categoryList
}
export default useFetch;