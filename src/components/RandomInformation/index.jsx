import React, {useState, useEffect} from 'react';

export const RandomInformation = () => {

    const [randomDogInfo, setRandomDogInfo] = useState("");

    useEffect(() => {
        // https://dogapi.dog/docs/api-v2

        const fetchExec = async () => {
          const response = await fetch("https://dogapi.dog/api/v2/facts");
          const data = await response.json();

          console.log(data)
        }

        fetchExec();
        // fetch("https://dogapi.dog/api/v2/facts")
        //   .then((response) => {
        //     if (response.status === 200 || response.ok) {
        //       return response.json();
        //     } else {
        //       throw new Error(`HTTP error status: ${response.status}`);
        //     }
        //   })
        //   .then((json) => {
        //     setRandomDogInfo(json.data);
        //   });
      }, []);

    return randomDogInfo && (
        <div className="mt-5">
            <h5>Random Dog Info:</h5>

            <p>{randomDogInfo[0].attributes.body}</p>
        </div>
    );
}