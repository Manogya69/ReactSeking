import mealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import {Fragment} from 'react';
import HeaderCartButton from './HeaderCartButton';


const Header = props => {

    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
    <HeaderCartButton></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
        <img src={mealsImage} alt="Food Background"/>

        </div>
    </Fragment>
}

export default Header;