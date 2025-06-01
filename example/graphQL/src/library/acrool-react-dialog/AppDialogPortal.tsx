import {DialogPortal as OriginDialogPortal} from '@acrool/react-dialog';
import styled from 'styled-components';




const localeDictionaries = {
    'zh-TW': {
        'com.dialog.success': '成功',
        'com.dialog.error': '失敗',
        'com.dialog.info': '资讯',
        'com.dialog.warning': '警告',
        'com.dialog.confirm': '確認',
        'com.dialog.ok': '確定',
        'com.dialog.cancel': '取消',
    },
};

const AppDialogPortal = () => {

    return (
        <DialogPortal
            className="mt-5"
            localeDictionaries={localeDictionaries}
            locale="zh-TW"
            isStatusIconVisible={false}
        />
    );
};

export default AppDialogPortal;


const DialogPortal = styled(OriginDialogPortal)`
`;
