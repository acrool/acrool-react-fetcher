import React, {useCallback, useMemo} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import {HotkeyListener} from '@/library/acrool-react-hotkey';
import {EKeyboardKey} from '@/library/acrool-react-hotkey';
import {useAppDispatch} from '@/library/redux';
import {useGetDashboardSettingQuery} from '@/store/__generated__';
import {authActions} from '@/store/main/auth';


/**
 * 工作區切換快速鍵
 */
const ChangeWorkspaceHotkey = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const {pathname} = useLocation();

    const DashboardSettingQuery = useGetDashboardSettingQuery({});
    const workspaces = DashboardSettingQuery.data?.workspaceAllows.workspaces;

    /**
     * 個人的工作區
     */
    const personalWorkspace = useMemo(() => {
        return workspaces?.find(row => row.isPersonal);
    }, [workspaces]);

    /**
     * 取得 Workspace
     */
    const otherWorkspaces = useMemo(() => {
        return workspaces?.filter(row => !row.isPersonal) ?? [];
    }, [workspaces]);




    const handleHotkey = useCallback((e: React.KeyboardEvent) => {

        switch (e.key){
        case '1':
            if(!personalWorkspace) return;

            dispatch(authActions.changeWorkspace({
                workspaceId: personalWorkspace.id,
            }));
            break;

        case '2':
            if(!otherWorkspaces[0]) return;
            dispatch(authActions.changeWorkspace({
                workspaceId: otherWorkspaces[0].id,
            }));
            break;

        case '3':
            if(!otherWorkspaces[1]) return;
            dispatch(authActions.changeWorkspace({
                workspaceId: otherWorkspaces[1].id,
            }));
            break;

        case '4':
            if(!otherWorkspaces[2]) return;
            dispatch(authActions.changeWorkspace({
                workspaceId: otherWorkspaces[2].id,
            }));
            break;
        }

        navigate({
            pathname: `/${pathname.split('/').slice(1, 3).join('/')}`,
            hash: undefined,
        }, {replace: true});


    }, [personalWorkspace, otherWorkspaces, pathname]);


    return <HotkeyListener hotKey={[
        EKeyboardKey.CtrlAnd1,
        EKeyboardKey.CtrlAnd2,
        EKeyboardKey.CtrlAnd3,
        EKeyboardKey.CtrlAnd4,
    ]}
    onKeyDown={handleHotkey}
    preventDefault
    />;

};

export default ChangeWorkspaceHotkey;





