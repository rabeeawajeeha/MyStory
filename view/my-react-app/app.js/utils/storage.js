export function getFromStorage(key) {
    if(!key) {
        return null;
    }
    try{
        const valueStr = localStorage.getItem(key);
        if (valueStr) {
            return JSON.parse(valueStr);
        }
        return null;
    } catch (err) {
        return null;
    }
}

export function setInStorage(key,object) {
    if (!key) {
        console.error('Error: Key is missing');
    }

    try {
        localStorage.setItem(key, JSON.stringify(object))
    } catch(err) {
        console.error(err);
    }
}