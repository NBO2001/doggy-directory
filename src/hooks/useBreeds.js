import { useEffect, useState } from "react"



export const useBreeds = () => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending ] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {

        const getBreeds = async () => {
            
            try{
                const response = await fetch("https://dog.ceo/api/breeds/list/all");
            
                const breeds = await response.json();

                setData(Object.keys(breeds.message));
            }catch(error){
                setError(true);
            }finally{
                setIsPending(false);
            }
        }

        getBreeds();
        
    }, [])

    return { data, isPending, error}

}