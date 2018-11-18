import { ALERTCONSTANS } from './types';

export const alertActions = {
    error
};

function error(message) {
    return { type: ALERTCONSTANS.ERROR, message };
}