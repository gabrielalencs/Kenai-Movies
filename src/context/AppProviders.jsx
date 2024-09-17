// Context

import { CategoryInformationProvider } from "./CategoryInformationContext";
import { FavoriteListProvider } from "./FavoriteListContext";

const AppProviders = ({ children }) => {
    return (
        <CategoryInformationProvider>
            <FavoriteListProvider>
                {children}
            </FavoriteListProvider>
        </CategoryInformationProvider>
    );
};

export default AppProviders;