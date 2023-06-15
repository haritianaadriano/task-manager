import {Type} from "@/types/localStorageType";

const useLocalStorage = (value: any, type: Type, key: string) => {
  //Here i use an enum type to see if the user want to save or get an object
  //Here is a just condition to check the action to do
  if(type === Type.GET){
    localStorage.getItem(key);
  }
  else if(type === Type.PUT){
    localStorage.setItem(key, value);
  }
}

export {
  useLocalStorage
}