export const handleFetch = async (url, options) => {
    try {
        const r = await fetch(url, options);
        const data = await r.json();
        return data;
    } catch(err){
        console.log(err) 
        return null;
    }
}