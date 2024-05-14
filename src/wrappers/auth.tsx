import { Navigate, Outlet } from 'umi';
export default () => {
  //   const { isLogin } = useAuth();
  const token = localStorage.getItem('ACCESS_TOKEN');
  if (token && token === 'YES') {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};
