import { Action, ThunkAction } from '@reduxjs/toolkit';
import { RootState } from '../store/store';

type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default AppThunk;
