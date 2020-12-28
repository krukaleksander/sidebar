import React, { useState, useContext } from 'react';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openSidebar = () => {
        setIsSidebarOpen(true);
    };
    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };
    const openModal = () => {
        setIsModalOpen(true);
    };
    const closeModal = () => {
        setIsModalOpen(false);
    };


    return <AppContext.Provider value={{
        isSidebarOpen, isModalOpen, openModal, openSidebar, closeModal, closeSidebar
    }}>{children}</AppContext.Provider>
};
// custom hook
//here u using useContext only to create custom hook, which u can use in different components

export const useGlobalContext = () => {
    return useContext(AppContext);
};




export { AppContext, AppProvider };