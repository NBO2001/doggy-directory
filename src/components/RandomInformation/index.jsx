import React from 'react';
import { useFacts } from '../../hooks/useFacts';

export const RandomInformation = () => {

    const {dogInfo, isPending, error} = useFacts();

    if(error) return (<div>Error</div>);

    return !isPending ? (
        <div className="mt-5">
            <h5>Random Dog Info:</h5>
            <p>{dogInfo[0].attributes.body}</p>
        </div>
    ): (<div>Did you know?...</div>);
}