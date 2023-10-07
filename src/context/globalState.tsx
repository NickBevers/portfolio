'use client'
import { createContext, useContext, useState } from "react";

const Context = createContext({});

export function ProjectProvider({ children }: { children: any }) {
    const [currentProject, setCurrentProject] = useState({} as {[key: string]: string | Array<string> | Array<{[key: string]: string}>});
    return (
        <Context.Provider value={[currentProject, setCurrentProject]}>
            {children}
        </Context.Provider>
    );
}

export function useProjectContext() {
    return useContext(Context);
}
