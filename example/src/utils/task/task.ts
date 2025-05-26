import {isNotEmpty} from '@acrool/js-utils/equal';
import dayjs from 'dayjs';

import {ExpiringType} from '@/config/task';


/**
 * 判斷過期時間
 * @param startDate
 * @param endDate
 */
export const getExpiringType = (startDate: string, endDate: string): ExpiringType => {
    let expiringType = ExpiringType.none;
    const today = dayjs();


    if(isNotEmpty(startDate) && isNotEmpty(endDate)){
        const start = dayjs(`${startDate} 09:00:00`);
        const end = dayjs(`${endDate} 18:00:00`);

        const estimateHour = end.diff(start, 'hour');
        const diffExpiringHour = end.diff(today, 'hour');
        if(diffExpiringHour < 0){
            expiringType = ExpiringType.expired;
        }else if(estimateHour > (24 * 2) && diffExpiringHour <= 24){
            expiringType = ExpiringType.expiringSoon;
        }else if(diffExpiringHour <= 5){
            expiringType = ExpiringType.expiringSoon;
        }
    }

    return expiringType;
};

interface IAvatar {
    id: string
    name: string
    avatarUrl?: string
}

/**
 * 合併指派者顯示
 * @param assigners
 */
export const mergeAssigners = (assigners: Array<IAvatar|undefined>) => {

    return assigners.reduce((curr: IAvatar[], row) => {
        if (row) {
            if (curr.findIndex(currRow => currRow.id === row.id) === -1) {
                return [...curr, row] as IAvatar[];
            }
        }
        return curr;
    }, []);
};
