import {useEffect, useState} from "react"

export const useFacts = () => {
    const [dogInfo, setDogInfo] = useState(null);
    const [error, setError] = useState(false);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        // https://dogapi.dog/docs/api-v2
        const fetchExec = async () => {
          const response = await fetch("https://dogapi.dog/api/v2/facts");
          try{
            const { data } = await response.json();
            setDogInfo(data);
          }catch(error){
            setError(true);
          }finally{
            setIsPending(false);
          }

        }

        fetchExec();

      }, []);

      return {dogInfo, isPending, error}

}

