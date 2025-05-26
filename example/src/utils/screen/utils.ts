import {removeByIndex} from '@acrool/js-utils/array';


// 控制開啟的光箱列表
export let screenList: string[] = [];


/**
 * 進入
 * @param screenKey
 */
const enter= (screenKey: string) => {
    screenList.push(screenKey);
};
/**
     * 離開
     * @param screenKey
     */
const leave= (screenKey: string) => {
    const currIndex = screenList.findIndex(keyRow => keyRow === screenKey);
    screenList = removeByIndex(screenList, currIndex);
};
/**
     * 確認是否在同一層
     * @param screenKey
     */
const checkIsCurrent= (screenKey?: string) => {
    if(screenKey === undefined){
        return screenList.length === 0;
    }
    return current() === screenKey;
};


/**
     * 取得目前層
     */
const current= () => {
    return screenList[screenList.length - 1];
};


export const ScreenState = {
    current,
    enter,
    leave,
    checkIsCurrent
};


