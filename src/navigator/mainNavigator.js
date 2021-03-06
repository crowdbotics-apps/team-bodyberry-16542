import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile37103Navigator from '../features/UserProfile37103/navigator';
import Tutorial37102Navigator from '../features/Tutorial37102/navigator';
import NotificationList37074Navigator from '../features/NotificationList37074/navigator';
import Settings37073Navigator from '../features/Settings37073/navigator';
import Settings37065Navigator from '../features/Settings37065/navigator';
import UserProfile37063Navigator from '../features/UserProfile37063/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile37103: { screen: UserProfile37103Navigator },
Tutorial37102: { screen: Tutorial37102Navigator },
NotificationList37074: { screen: NotificationList37074Navigator },
Settings37073: { screen: Settings37073Navigator },
Settings37065: { screen: Settings37065Navigator },
UserProfile37063: { screen: UserProfile37063Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
