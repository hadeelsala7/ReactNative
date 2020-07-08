import {createStackNavigator} from 'react-navigation-stack' ;
import { createAppContainer} from 'react-navigation';
import Home from '../screens/Home';
import Types from '../screens/Types';

const screens = {
    main: {
        screen: Home
    },
    Categories: {
        screen: Types
    }

}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);