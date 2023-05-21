import { useEffect } from "react"

const useTitle = title => {
    useEffect(() =>{
        document.title = `Baby Toys -${title}`;
    },[title])
};

export default useTitle;