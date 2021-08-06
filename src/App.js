import {
    Route,
    Switch,
} from 'react-router-dom';

import { CollectionPage } from './components/Pages/collectionPage.jsx';
import { SearchPage } from './components/Pages/searchPage.jsx';

export const App = () => (
    <Switch>
        <Route
            path="/"
            exact
        >
            <SearchPage />
        </Route>
        <Route
            path="/collections"
            exact
        >
            <CollectionPage />
        </Route>
    </Switch>
);
