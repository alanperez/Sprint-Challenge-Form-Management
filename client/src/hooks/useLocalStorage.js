import {useState} from 'react'
                            // passing 2 parameters key, initialValue
 export const useLocalStorage = (key, initialValue) => {


  const [storedValue, setStoredValue] = useState(() => {
      //  we're passing the key into the getItem method and assigning it to item
    const item = localStorage.getItem(key);
      // return item if not then return initialValue
    return item ? item : initialValue;
  });
                  //passing value
  const setValue = value => {
    // setting the state by passing the value in it
    setStoredValue(value);
    // setting key and stringifying the value
    localStorage.setItem(key, value);
  };
  return [storedValue, setValue];
};

// const [storedToken, setToken] =useLocalStorage("token", token)