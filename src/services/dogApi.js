

export const getDogImages = async (breed) => {

    let data = null;
    let error = false;

    try{
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
        const obj = await response.json();

        data = obj.message
    }catch(err){
        error = true;
    }finally{
        return {data, error}
    }

} 