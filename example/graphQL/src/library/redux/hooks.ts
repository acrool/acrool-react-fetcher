import {ThunkDispatch} from '@reduxjs/toolkit';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {UnknownAction} from 'redux';

import {TAppState} from '@/store/appReducer';

export {Provider} from 'react-redux';

type AppDispatch = () => ThunkDispatch<TAppState, void, UnknownAction>;
export const useAppSelector: TypedUseSelectorHook<TAppState> = useSelector;
export const useAppDispatch: AppDispatch = useDispatch;
