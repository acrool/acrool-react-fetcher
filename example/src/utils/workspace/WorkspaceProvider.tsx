import Logger from '@acrool/js-logger';
import {isEmpty} from '@acrool/js-utils/equal';
import {media} from '@acrool/react-grid';
import React, {createContext, useCallback, useContext, useMemo} from 'react';
import {Outlet} from 'react-router-dom';
import styled, {css} from 'styled-components';

import MetaTitle from '@/components/atoms/MetaTitle';
import {BlockWrapper} from '@/library/acrool-react-block';
import {useAppSelector} from '@/library/redux';
import {useGetDashboardSettingQuery} from '@/store/__generated__';
import {authSelector} from '@/store/main/auth';


interface IActiveWorkspace {id: string, name: string, avatarUrl?: string, isPersonal: boolean, virtualProjectId: string}

interface IContextProps {
    activeWorkspace: IActiveWorkspace
    personalWorkspace: IActiveWorkspace
    findWorkspace: (workspaceId: string) => IActiveWorkspace|undefined
}

const initWorkspace = {id: '', name: '...', avatarUrl: undefined, isPersonal: false, virtualProjectId: ''};

const WorkspaceContext = createContext<IContextProps>({
    activeWorkspace: {...initWorkspace},
    personalWorkspace: {...initWorkspace},
    findWorkspace: () => {
        Logger.warning('WorkspaceProvider findWorkspace not yet ready');
        return undefined;
    },
});

export const useWorkspace = () => useContext(WorkspaceContext);


/**
 * 工作區提供者
 */
const WorkspaceProvider = () => {
    const workspaceId = useAppSelector(authSelector.workspaceId);
    const DashboardSettingQuery = useGetDashboardSettingQuery({});
    const workspaces = DashboardSettingQuery.data?.workspaceAllows.workspaces;


    /**
     * 個人的工作區
     */
    const personalWorkspace = useMemo(() => {
        return workspaces?.find(row => row.isPersonal) ?? {...initWorkspace};
    }, [workspaces]);


    /**
     * 查詢 Workspace
     */
    const findWorkspace = useCallback((workspaceId: string|null) => {
        return workspaces?.find(row => row.id === workspaceId) ?? {...initWorkspace};
    }, [workspaces]);


    const activeWorkspace = findWorkspace(workspaceId);


    if(isEmpty(activeWorkspace.id)){
        return <PageOutletRoot $isVisiblePanel className="pt-9">
            <BlockWrapper />
        </PageOutletRoot>;
    }


    return (
        <WorkspaceContext.Provider value={{
            activeWorkspace,
            personalWorkspace,
            findWorkspace,
        }}>
            <MetaTitle/>

            <Outlet/>
        </WorkspaceContext.Provider>
    );
};

export default WorkspaceProvider;



const PageOutletRoot = styled.div<{
    $isVisiblePanel: boolean,
}>`

    display: flex;
    //background-color: #fff;
    width: 100%;
    //height: 100%; // 手機版會限制高度
    flex: 1;

    padding-left: 0;
    position: relative;
    transition: transform .25s ease, padding-left .2s;

    > div {
        flex: 1;
    }


    ${media.md`
        padding-left: 60px;
    `}

    ${media.lg`
        flex: 0 0 auto;
        height: 100%;
    `} ${media.xl`
        padding-left: 60px;

        ${(props: any) => props.isVisiblePanel && css`
            padding-left: 280px;
        `}
    `}
    @media print {
        padding: 0;
    }
`;
