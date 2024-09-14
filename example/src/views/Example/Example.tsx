import {Fetcher, FetcherMulti, IFetcherOption, TOption} from '@acrool/react-fetcher';
import {Flex} from '@acrool/react-grid';
import {groupBy} from '@acrool/js-utils/array';
import {data} from '../../config/data';
import {useMemo, useState} from 'react';
import Select2 from '../../components/Select2';


const Example = () => {

    const [value, setValue] = useState<string|null>(null);
    const [multiValue, setMultiValue] = useState<string[]>([]);

    const groupData = groupBy(data, row => row.role);
    const options3 = Object.keys(groupData)
        .map(groupKey => {
            const curr = groupData[groupKey];
            return {
                groupName: groupKey,
                children: curr.map(row => {
                    return {
                        text: row.name,
                        value: row.id,
                        avatarUrl: row.avatar
                    };
                }),
            };
        });


    const placeholderOptions: TOption<any>[] = useMemo(() => {
        const placeholderOption: IFetcherOption<string|null> = {text: 'Select assigner...', value: null};
        return [placeholderOption].concat(options3 as any);

    }, [value, options3]);


    return <Flex className="flex-wrap align-items-start justify-content-start mb-5 gap-4">
        {/*<Fetcher value={value} onClick={setValue} options={null} isDark />*/}
        <Select2
            value={value}
            options={placeholderOptions}
            onChange={setValue}
            isSearchEnable
        />

        <Fetcher value={value} onClick={setValue} options={undefined} isDark/>


        <Fetcher value={value} onClick={setValue} options={options3} isDark isAvatarEnable />
        <Fetcher value={value} onClick={setValue} onEnter={setValue} options={placeholderOptions} isDark isSearchEnable={false} />

        <FetcherMulti value={multiValue} onClick={val => setMultiValue(val)} options={options3} isDark/>
        <FetcherMulti value={multiValue} onClick={val => setMultiValue(val)} onEnter={val => setMultiValue(val)} isSearchEnable options={options3} isDark/>

    </Flex>;
};


export default Example;
