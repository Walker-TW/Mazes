import React, { useContext, useState } from 'react';

export const AlertContext = React.createContext('')

export const AlertUpdateContext = React.createContext({})

export function AlertProvider({children} : any) {

    const [alertMessage, setAlertMessage] = useContext(AlertContext)

    function toggleAlert (alertMessage: any) {
      setAlertMessage(alertMessage)
    }

    return (
        <AlertContext.Provider value={alertMessage}>
            <AlertUpdateContext.Provider value={toggleAlert}>
                {children}
            </AlertUpdateContext.Provider>
        </AlertContext.Provider>
    )
}