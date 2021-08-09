import {
    useLayoutEffect,
    useState,
} from 'react';
import {
    Route,
    Switch,
} from 'react-router-dom';

import { NavTabs } from './components/Controls/navTabs.jsx';
import { CollectionPage } from './components/Pages/collectionPage.jsx';
import { SearchPage } from './components/Pages/searchPage.jsx';

export const App = () => {
    const [
        currentTab,
        setCurrentTab,
    ] = useState(Number(localStorage.getItem('tab')) || 0);

    useLayoutEffect(
        () => localStorage.setItem('tab', currentTab),
        [currentTab],
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
