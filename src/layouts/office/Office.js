import React from 'react' 
import classes from './../../style.module.scss'
import Navbar from './../../modules/Navigation/Navbar';
import Header from './../../modules/Navigation/Header';

const Office = ({
    children
}) => {
    return (
        <div className={classes.main}>
            <div className={classes.main__navigation}>
                <Navbar />
            </div>
            <div className={classes.main__content}>
                <Header />
                {children}
            </div>
        </div>
    )
}
export default Office