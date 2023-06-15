import {Type} from "@/types/localStorageType";

const useLocalStorage = (value: any, type: Type, key: string) => {
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