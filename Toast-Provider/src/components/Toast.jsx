import React, { createContext, useContext, useState } from 'react'

const ToastContext = createContext();

export const useToast = () => useContext(ToastContext);

const Toast = ({ children }) => {
    const [toasts, setToasts] = useState([]);

    const addToast = (message, type = "info") => {
        const id = Date.now();
        setToasts([...toasts, { id, message, type }]);

        setTimeout(() => {
            removeToast(id);
        }, 3000)
    };

    const removeToast = (id) => {
        setToasts((prev) => prev.filter((toast) => toast.id !== id));
    }

    return (
        <ToastContext.Provider value={{ addToast }}>
            {children}
            <div className='fixed top-5 right-5 space-y-2'>
                {toasts.map((toast) => (
                    <div
                        key={toast.id}
                        className={`px-4 py-2 rounded shadow text-white flex justify-between items-center
                    ${toast.type === "success" && "bg-green-500"}
                    ${toast.type === "error" && "bg-red-500"}
                    ${toast.type === "info" && "bg-blue-500"}
                    ${toast.type === "warning" && "bg-yellow-500 text-black"}
                `}
                    >
                        <span>{toast.message}</span>
                        <button
                            className='ml-3 font-bold'
                            onClick={() => removeToast(toast.id)}>✖ </button>
                    </div>
                ))}

            </div>
        </ToastContext.Provider>
    )
}

export default Toast
