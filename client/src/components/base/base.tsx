import { PrivatePages } from './private-pages';
import { PublicPages } from './public-pages';

export const Base = () => {
  // const { isAuth, isToRegister } = useSelector((state: any) => state.authUser);
  const isAuth = true;
  if (isAuth) {
    return (
      <>
        <PrivatePages isAuth={isAuth} />
      </>
    );
  }

  return <PublicPages isAuth={isAuth} />;
};
