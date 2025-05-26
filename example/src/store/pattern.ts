import {block} from '@acrool/react-block';



export const mutationBlockEvent = {
    onMutate: () => {
        block.show();
    },
    onSettled: () => {
        block.hide();
    }
};

