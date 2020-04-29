import React from 'react';

import classes from './SideDrawer.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import BackDrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Auxiliary/Auxiliary';

const sideDrawer = (props) => {

    let cssClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        cssClasses = [classes.SideDrawer, classes.Open];
    }

    return(
        <Aux>
            <BackDrop show={props.open} clicked={props.closed} />
            <div className={cssClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;