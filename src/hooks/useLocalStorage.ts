const useLocalStorage = (value: any) => {
  localStorage.setItem("task", value);
}

export {
  useLocalStorage
}