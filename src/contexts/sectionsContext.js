import { createContext, useContext } from "react";

export const SectionsContext = createContext(undefined)

export const useSectionsContext = () => {
    const sections = useContext(SectionsContext)

    if (sections === undefined) {
        throw new Error('useSectionContext must be used with a sectionsContext')
    }

    return sections
}