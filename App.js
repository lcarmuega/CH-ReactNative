import { auth } from './firebase/config';
import MainNavigator from './navigation';

console.log(auth);

export default function App() {
  return (
    <MainNavigator/>
  );
}