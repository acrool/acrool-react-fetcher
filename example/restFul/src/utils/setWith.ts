

export function getByPath(object: any, path: string){
    if(object === null){
        return object;
    }
    const pathArr = path.split('.');

    return pathArr.reduce((prev: any, row) => {
        if(typeof prev === 'undefined' || typeof prev[row] === 'undefined'){
            return undefined;
        }

        return prev[row];
    }, object);
}

export function setWith(object: any, path: string, value: any) {
    if(object === null){
        return object;
    }
    const pathArr = path.split('.');

    let index = 0;

    pathArr.reduce((prev: any, row) => {
        index += 1;
        if(typeof prev === 'undefined'){
            prev = {};
        }
        if(typeof prev[row] === 'undefined'){
            prev[row] = {};
        }
        if(pathArr.length === index){
            prev[row] = value;
        }

        return prev[row];
    }, object);

    return object;

}