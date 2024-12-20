import { createContext, ReactNode, useState } from "react";

const defaultValue = {
  metamaskAccountAddress: '',
  setMetamaskAccountAddress: (_newValue: string, _p0: unknown) => { },
}

export const MetamaskContext = createContext(defaultValue)

export const MetamaskContextProvider = (props: { children: ReactNode | undefined }) => {
  const [metamaskAccountAddress, setMetamaskAccountAddress] = useState('')

  return (
    <MetamaskContext.Provider
      value={{
        metamaskAccountAddress,
        setMetamaskAccountAddress
      }}
    >
      {props.children}
    </MetamaskContext.Provider>
  )
}
