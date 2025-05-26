import {IDropdownGroupOption, IDropdownOption} from '@acrool/react-dropdown';

import {
    IGetWorkspaceTeamReposSetting,
    IGetWorkspaceTeamSetting
} from '@/store/__generated__';
import {generateSortByProperty} from '@/utils/array';



/**
 * 取得 Project ID
 */
export const getProjectId = (): string|undefined => {
    const pathname = window.location.pathname;

    const reg = new RegExp(/^\/ws\/project\/(\w+)/);
    const res = reg.exec(pathname);
    if(res) {
        return res[1];
    }
    return undefined;
};

export enum TaskMode {statusTask= 'statusTask', scrumTask= 'scrumTask',defaultTask='defaultTask', quotation='quotation'}
export const getTaskMode = (): TaskMode => {
    const pathname = window.location.pathname;

    const reg = new RegExp(/statusTask|scrumTask|quotation/);
    const res = reg.exec(pathname);
    if(res) {
        return res[0] as unknown as TaskMode;
    }
    return TaskMode.defaultTask;
};




/**
 * 群組化 團隊 -> 倉庫
 */
export const getTeamRepos = (data?: IGetWorkspaceTeamReposSetting['teamRepos'], options?: {blockTeamId?: string, blockRepoId?: string}): IDropdownGroupOption<string>[]|undefined=> {

    // @TODO: IDE無法判別 data 最後是 undefined
    return data
        ?.filter(row => options?.blockTeamId ? row.id !== options.blockTeamId: true)
        ?.map(row => {
            const k: IDropdownGroupOption<string> = {
                groupName: row.name,
                children: row.repos
                    ?.filter(repoRow => options?.blockRepoId ? repoRow.id !== options.blockRepoId: true)
                    .map(repoRow => {
                        return {
                            text: repoRow.name,
                            value: repoRow.id,
                            avatarUrl: repoRow.avatarUrl,
                        };
                    })
                    .sort(generateSortByProperty(curr => curr.text, 'asc')) as IDropdownOption<string>[]
            };

            return k;
        });
};


/**
 * 團隊
 */
export const getTeams = (data?: IGetWorkspaceTeamSetting['teams'], blockTeamId?: string): IDropdownOption<string>[] => {
    return data
        ?.filter(row => blockTeamId ? row.id !== blockTeamId: true)
        .map(row => {
            return {
                text: row.name,
                value: row.id,
                color: row.theme?.color,
            };
        }) as IDropdownOption<string>[];
};
