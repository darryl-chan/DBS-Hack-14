import { createContext } from "react";
import { useSetState } from "@mantine/hooks";

export const CompanyContext = createContext({
  companyInfo: {
    companyId: '',
    companyName: '',
    cashBalance: 0.0,
    carbonBalance: 0.0,
    activeAccount: 0,
    createdDateTime: new Date(),
    updatedDateTime: new Date(),
  },
  setCompanyInfo: () => {}
})

export const CompanyContextProvider = ({children}) => {
  const [companyInfo, setCompanyInfo] = useSetState({
    companyId: '',
    companyName: 'some comapny name',
    cashBalance: 0.0,
    carbonBalance: 0.0,
    activeAccount: 0,
    createdDateTime: new Date(),
    updatedDateTime: new Date(),
  })

  return (
    <CompanyContext.Provider value={{
      companyInfo,
      setCompanyInfo
    }}>
      {children}
    </CompanyContext.Provider>
  )
}

