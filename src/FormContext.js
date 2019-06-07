import React, { useState, createContext } from "react";

export const FormContext = createContext();

export const FormProvider = props => {
  const [usersChanged, setUsersChanged] = useState(false);

  return (
    <FormContext.Provider value={[usersChanged, setUsersChanged]}>
      {props.children}
    </FormContext.Provider>
  );
};
