import React from 'react';

import classes from './Layout.module.css';

import Aux from '../../hoc/Auxiliary';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = (props) => (
    <Aux>
        <Toolbar />
        <div> Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;