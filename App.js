import { LogBox } from 'react-native';
import ShopProvider from './context/ShopProvider';
import MainNavigator from './navigation';

export default function App() {

  return (
    <ShopProvider>
      <MainNavigator />
    </ShopProvider>
  );
}