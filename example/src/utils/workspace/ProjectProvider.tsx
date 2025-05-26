import {FCChildrenProps} from '@acrool/react-grid';
import {useLocale} from '@acrool/react-locale';
import React, {createContext, useContext} from 'react';
import {Outlet, useParams} from 'react-router-dom';

import MetaTitle from '@/components/atoms/MetaTitle';
import {useOnTaskSubscription} from '@/store/custom/task/subscription';

import {useWorkspace} from './WorkspaceProvider';

interface IContextProps {
    projectId: string
    isVirtual: boolean
}

export const ProjectContext = createContext<IContextProps>({
    projectId: '',
    isVirtual: false,
});

export const useProject = () => useContext(ProjectContext);


interface IProps extends FCChildrenProps{
    isVirtual?: boolean
}

const ProjectProvider = ({
    isVirtual = false,
}: IProps) => {
    const {t} = useLocale();
    const {activeWorkspace} = useWorkspace();
    const {projectId} = useParams<{ projectId: string }>();

    // 訂閱更新
    useOnTaskSubscription({workspaceId: activeWorkspace.id});

    return (
        <ProjectContext.Provider value={{
            projectId: isVirtual ? activeWorkspace.virtualProjectId: projectId,
            isVirtual,
        }}>
            <MetaTitle name={t(isVirtual ? 'page.workspaceTask.title': 'page.project.title')}/>

            <Outlet/>
        </ProjectContext.Provider>
    );
};

export default ProjectProvider;

