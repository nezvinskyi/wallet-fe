import { createAction } from '@reduxjs/toolkit';

export const openModalAddTransaction = createAction('global/openModalAddTransaction');
export const closeModalAddTransaction = createAction('global/closeModalAddTransaction');
export const openLogoutModal = createAction('global/openLogoutModal');
export const closeLogoutModal = createAction('global/closeLogoutModal');
