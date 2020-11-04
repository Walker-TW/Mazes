import React, { useContext, useState } from 'react'
import { Toast } from 'react-bootstrap'
import { AlertContext } from '../../Contexts/ErrorContext'

export default function Alerts() {
    const alertMessage = useContext(AlertContext)
    const [show, setShow] = useState(true) 

    const toggleShow = () => setShow(!show)
        return (
            <Toast     
                style={{
                minWidth: '200px',
                position: 'absolute',
                top: 0,
                right: 0,
              }} 
              show={show} 
              onClose={toggleShow} 
              >
                  <Toast.Header>
                    <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
                    <strong className="mr-auto">Admin</strong>
                    <small>Error</small>
                </Toast.Header>
                <Toast.Body>{alertMessage}</Toast.Body>
            </Toast>
        )
}