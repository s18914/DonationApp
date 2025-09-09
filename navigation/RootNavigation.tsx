import { Authenticated, NonAuthenticated } from './MainNavigation';
import { useAppSelector } from '../redux/hooks';

const RootNavigation = () => {
  const user = useAppSelector(state => state.user);
  return user.isLoggedIn ? <Authenticated /> : <NonAuthenticated />;
};

export default RootNavigation;
