import {
    useEffect,
    useState,
} from 'react';
import {
    Route,
    Switch,
    useLocation,
} from 'react-router-dom';

import { NavTabs } from './components/Controls/navTabs.jsx';
import { CollectionPage } from './components/Pages/collectionPage.jsx';
import { SearchPage } from './components/Pages/searchPage.jsx';

export const App = () => {
    const { pathname } = useLocation();
    const [
        currentTab,
        setCurrentTab,
    ] = useState(0);
    console.log(pathname);

    useEffect(
        () => {
            switch (pathname) {
                case '/':
                    setCurrentTab(0);
                    break;
                case '/collection':
                    setCurrentTab(1);
                    break;
                default:
                    break;
            }
        },
        [pathname],
    );

    return (
        <>
            <NavTabs
                currentTab={currentTab}
                setCurrentTab={setCurrentTab}
            />
            <Switch>
                <Route
                    path="/"
                    exact
                >
                    <SearchPage setCurrentTab={setCurrentTab} />
                </Route>
                <Route
                    path="/collection"
                    exact
                >
                    <CollectionPage />
                </Route>
            </Switch>
        </>
    );
};
