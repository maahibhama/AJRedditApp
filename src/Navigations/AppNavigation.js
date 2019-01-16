import {
    Platform,
} from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Routes from './Routes';
import ListingView from '../Views/ListingView';
import DetailsView from '../Views/DetailsView';

export const AppNavigator = createStackNavigator(
    {
        [Routes.Listing]: { screen: ListingView },
        [Routes.Details]: { screen: DetailsView }
    },
    {
        initialRouteName: Routes.Listing,
    }
);

export default createAppContainer(AppNavigator);