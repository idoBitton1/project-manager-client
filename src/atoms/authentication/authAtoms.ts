import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';

export const isLoadingAtom = atom<boolean>(true);
export const isAuthenticatedAtom = atom<boolean>(false);
export const accessTokenAtom = atomWithStorage<string | null>('accessToken', null);
