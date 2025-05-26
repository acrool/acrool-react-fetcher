import {MutableRefObject, Ref} from 'react';
import {RefCallBack} from 'react-hook-form';


/**
 * 設定2個Ref控制
 * ex:
 *   const contentRef = useRef<HTMLInputElement|null>(null);
 *   const HookForm = useForm<IFormData>()
 *
 * <Controller
 *    control={HookForm.control}
 *    name="content"
 *    render={({field}) => {
 *       return <Commend
 *            {...field}
 *            ref={setRef(field.ref, contentRef)}
 *          />;
 *        }}
 *    />
 *
 *
 * @param hookFormRef
 * @param forwardedRef
 */
export const setRef = <T = HTMLDivElement>(hookFormRef: RefCallBack, forwardedRef: MutableRefObject<T|null>) => {
    return (ref: T|null) => {
        hookFormRef(ref);
        forwardedRef.current = ref;
    };
};


// export const setForwardedRef = <T = HTMLDivElement>(forwardedRef: T, mutableRefObject: MutableRefObject<T|null>) => {
//     return (ref: T|null) => {
//         // hookFormRef = ref;
//         mutableRefObject.current = ref;
//         forwardedRef = ref;
//     };
// };



/**
 * Assign the refs
 *
 * <textarea
 *     {...props}
 *     ref={node => {
 *         mainRef.current = node;
 *         if (typeof ref === 'function') {
 *             ref(node);
 *         } else if (ref) {
 *             ref.current = node;
 *         }
 *     }}
 *     className={clsx(styles.mainTextarea, props.className)}
 *     aria-multiline="false"
 *     aria-readonly="false"
 *     spellCheck="false"
 * />
 * @param forwardedRef
 * @param localRef
 */
export const setForwardedRef = <T>(
    forwardedRef: Ref<T>|undefined,
    localRef: React.MutableRefObject<T|null>
) => {
    return (node: T | null) => {
        localRef.current = node;
        if (forwardedRef) {
            if (typeof forwardedRef === 'function') {
                forwardedRef(node);
            } else if (forwardedRef) {
                (forwardedRef as {current: T|null}).current = node as T|null;
            }
        }
    };
};




// type ForwardRefFunction<T, P = {}> = (
//     props: P & React.RefAttributes<T>
// ) => React.ReactElement | null;
//
//
// export function forwardRefOfGenerics<T, P = {}>(
//     render: (props: P, ref: React.Ref<T>) => React.ReactElement | null
// ): ForwardRefFunction<T, P> {
//     return (props: P & React.RefAttributes<T>) => render(props, props.ref);
// }
