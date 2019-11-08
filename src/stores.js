import {
  writable
} from 'svelte/store';

const makeStore = (name) => {
  let localItem = undefined;
  try {
    localItem = JSON.parse(localStorage.getItem(name));
  } catch (error) {
    console.error(error);
  }
  const store = writable(localItem);
  store.subscribe(value => {
    try {
      localStorage.setItem(name, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    };
  });
  return store;
}

// names must be unique or dumb things happen
export const exampleStore = makeStore("exampleStore");