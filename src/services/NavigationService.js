import {createNavigationContainerRef} from '@react-navigation/native';

class NavigationService {
  static navigationRef = createNavigationContainerRef();

  static screens = {
    ProductScreen:'ProductScreen',
    ProductSearchScreen: 'ProductSearchScreen',
    AllProductScreen:'AllProductScreen',
    SearchScreen:'SearchScreen'

  };

  constructor() {}

  static navigate(name, params) {
    if (this.navigationRef.isReady()) {
      this.navigationRef.navigate(name, params);
    }
  }

  static goBack() {
    if (this.navigationRef.isReady()) {

      this.navigationRef.goBack();
    }
  }
}

export default NavigationService;
