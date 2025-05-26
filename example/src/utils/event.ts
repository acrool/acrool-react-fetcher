import React from 'react';

export type SliderFieldOnChangeType = (event: React.ChangeEvent<HTMLInputElement>) => void;



/**
 * 生成阻擋冒泡連結按鈕
 * @param path
 * @param cb
 */
export const generatePropagationClick = (cb: () => void) => {
    return (event: React.MouseEvent) => {
        event.stopPropagation();
        cb();
    };
};
