import {
    makeStyles,
    Paper,
    Tab,
    Tabs,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles({ root: { flexGrow: 1 } });

export const NavTabs = ({
    currentTab,
    setCurrentTab,
}) => {
    const classes = useStyles();
    const history = useHistory();

    const handleChange = (event, newValue) => {
        setCurrentTab(newValue);
        switch (newValue) {
            case 0:
                history.push('/');
                break;
            case 1:
                history.push('/collection');
                break;
            default:
                history.push('/');
                break;
        }
    };

    return (
        <Paper className={classes.root}>
            <Tabs
                value={currentTab}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Search" />
                <Tab label="Collection" />
            </Tabs>
        </Paper>
    );
};
