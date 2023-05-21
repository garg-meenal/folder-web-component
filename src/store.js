import { writable } from 'svelte/store';

export const selectedType = writable('');
export const folders = writable([]);
export const selectedFolder = writable(null);
export const selectedLevel = writable(null);