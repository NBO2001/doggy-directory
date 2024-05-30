import React, {useState, useEffect} from 'react';

export const RandomInformation = () => {
    const [randomDogInfo, setRandomDogInfo] = useState("");

    useEffect(() => {
        // https://dogapi.dog/docs/api-v2
        const fetchExec = async () => {
          const response = await fetch("https://dogapi.dog/api/v2/facts");
          try{
            const { data } = await response.json();
            setRandomDogInfo(data);
          }catch(error){
            console.log(error)
            throw Error(`${error} - ${response}`)
          }

        }

        fetchExec();

      }, []);

    return randomDogInfo && (
        <div className="mt-5">
            <h5>Random Dog Info:</h5>
            <p>{randomDogInfo[0].attributes.body}</p>
        </div>
    );
}