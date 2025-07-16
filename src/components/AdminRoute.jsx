import { useSelector } from 'react-redux';
import { Navigate, Outlet, useLocation } from 'react-router';

//admin vitra xirna didaina, admin lai protect garxa
export default function AdminRoute() {
  const location = useLocation()
  const { user } = useSelector((state) => state.userSlice);

  return user?.role === 'Admin' ? <Outlet /> : <Navigate to="/" state={{ from: location }} replace />
}

// outlet vaneko jaa jana khoojeko ho tyaa jau vaneko
// replace garesi back garirakhnu pardaina
// location yeuta object ho jasma route ko information auxa