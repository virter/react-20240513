import { ThemeContextProvider } from './context/theme/provider';
import { UserContextProvider } from './context/user/provider';
import { Layout } from './components/layout/component';
import { restaurants } from "./constants/mock_copy";
import { Restaurants } from "./components/restaurants/component";

export const App = () => {
    return (
        <ThemeContextProvider>
            <UserContextProvider>
                <Layout>
                    <Restaurants restaurants={restaurants} />
                </Layout>
            </UserContextProvider>
        </ThemeContextProvider>
    );
}