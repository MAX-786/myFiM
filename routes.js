// Side bar options
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Notifications from "@material-ui/icons/Notifications";
import LogoutIcon from '@mui/icons-material/Logout';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import PolicyIcon from '@mui/icons-material/Policy';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';

const dashboardRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: Dashboard,

    layout: "/admin",
  },
  {
    path: "/profile",
    name: "Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: Person,

    layout: "/admin",
  },
  {
    path: "/consents",
    name: "Consents",
    rtlName: "قائمة الجدول",
    icon: "content_paste",

    layout: "/admin",
  },
  {
    path: "/transfers",
    name: "Transfers",
    rtlName: "طباعة",
    icon: LibraryBooks,

    layout: "/admin",
  },
  {
    path: "/transactionHistory",
    name: "Transaction History",
    rtlName: "خرائط",
    icon: AccountBalanceIcon,

    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: Notifications,

    layout: "/admin",
  },
  {
    path: "/insurance",
    name: "Insurance",
    rtlName: "التطور للاحترافية",
    icon: PolicyIcon ,

    layout: "/admin",
  },
];

export default dashboardRoutes;
