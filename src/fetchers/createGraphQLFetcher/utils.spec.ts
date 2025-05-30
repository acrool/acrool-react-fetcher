import {getVariablesFileMap} from './utils';

// 測試單一層級的物件，包含一個 File 檔案。
// 驗證 getVariablesFileMap 是否能正確將 File 欄位抽出，並將原本的 File 欄位設為 null，同時 map 與 values 也正確。
describe('getVariablesFileMap 處理 File 欄位與巢狀結構', () => {

    it('單一層級物件：能正確抽出頂層 File 欄位', async () => {

        const file1 = new File(['avatar'], 'avatar.webp', {type: 'image/jpeg'});
        const input = {
            teamId: 1,
            input: {
                name: 'Meta',
                desc: 'Meta Platforms, Inc.',
            },
            file1,
        };

        const result = getVariablesFileMap(input);

        // 預期結果
        const equalResult = {
            variables: {
                teamId: 1,
                input: {
                    name: 'Meta',
                    desc: 'Meta Platforms, Inc.',
                },
                file1: null,
            },
            map: ['variables.file1'],
            values: [file1]
        };

        expect(result).toStrictEqual(equalResult);
    });

    // 測試巢狀物件（input 內有 info 物件），且 File 欄位在巢狀物件內。
    // 驗證 getVariablesFileMap 是否能正確處理巢狀結構，將巢狀中的 File 欄位抽出，並正確記錄 map 路徑與 values。
    it('巢狀物件：能正確抽出巢狀中的 File 欄位', async () => {
        const file1 = new File(['avatar'], 'avatar.webp', {type: 'image/jpeg'});
        const input = {
            teamId: 1,
            input: {
                name: 'Meta',
                desc: 'Meta Platforms, Inc.',
                info: {
                    tel: '0900112113',
                    address: null
                },
                file1,
            },
        };

        const result = getVariablesFileMap(input);


        // 預期結果
        const equalResult = {
            variables: {
                teamId: 1,
                input: {
                    name: 'Meta',
                    desc: 'Meta Platforms, Inc.',
                    info: {
                        tel: '0900112113',
                        address: null,
                    },
                    file1: null,
                },
            },
            map: ['variables.input.file1'],
            values: [file1]
        };

        expect(result).toStrictEqual(equalResult);
    });

    // 測試多個 File 欄位，且分別位於不同巢狀層級。
    // 驗證 getVariablesFileMap 是否能同時處理多個 File 欄位，並正確記錄所有 map 路徑與 values 順序。
    it('多個 File 欄位：能正確抽出不同層級的多個 File 欄位', async () => {
        const file1 = new File(['avatar'], 'avatar.webp', {type: 'image/jpeg'});
        const file2 = new File(['thumb'], 'thumb.webp', {type: 'image/jpeg'});
        const input = {
            teamId: 1,
            input: {
                name: 'Meta',
                desc: 'Meta Platforms, Inc.',
                info: {
                    tel: '0900112113',
                    file2,
                },
                file1,
            },
        };

        const result = getVariablesFileMap(input);


        // 預期結果
        const equalResult = {
            variables: {
                teamId: 1,
                input: {
                    name: 'Meta',
                    desc: 'Meta Platforms, Inc.',
                    info: {
                        tel: '0900112113',
                        file2: null,
                    },
                    file1: null,
                },
            },
            map: ['variables.input.info.file2', 'variables.input.file1'],
            values: [file1, file2]
        };

        expect(result).toStrictEqual(equalResult);
    });

});
