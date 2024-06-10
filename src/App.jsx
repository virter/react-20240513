import { ThemeContextProvider } from './context/theme/provider';
import { UserContextProvider } from './context/user/provider';
import { Layout } from './components/layout/component';
import { restaurants } from "./constants/mock";
import { Restaurants } from "./components/restaurants/component";
import { Provider } from 'react-redux';
import { store } from './redux';

export const App = () => {
    return (
        <Provider store={store}>
            <ThemeContextProvider>
                <UserContextProvider>
                    <Layout>
                        <Restaurants />
                    </Layout>
                </UserContextProvider>
            </ThemeContextProvider>
        </Provider>
    );
}