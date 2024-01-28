import Box from "@mui/material/Box";
// import Image from "mui-image";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
import reactQueryLogo from "./assets/react-query-logo.png";
import "./SideNavigation.css";

const navList = [
  "React Query מעשי",
  "שינויי נתוני React Query",
  "אופטימיזציות של רינדור React Query",
  "בדיקות סטטוס ב-React Query",
  "בדיקת React Query",
  "React Query ו-TypeScript",
  "שימוש ב-WebSockets עם React Query",
  "מפתחות React Query יעילים",
  "מינוף ההקשר של פונקציית השאילתה",
  "מציין מיקום ונתונים ראשוניים ב-React Query",
  "React Query כמנהל נתונים",
  "טיפול בשגיאות React Query",
  "שליטה במוטציות בנתונים ב-React Query",
  "לא מקוון React Query",
  "טפסי React Query",
  "שאלות נפוצות React Query",
  "React Query פוגש את React Router",
  "זריעת מטמון השאילתה",
  "בתוך React Query",
  "React Query מסוג בטוח",
  "אולי אותך לא תזדקק ל-React Query",
  "חשיבה ב-React Query",
  "React Query והקשר React",
  "זו הסיבה שאתה רוצה React Query",
  "ממשק ה-API של אפשרויות השאילתה",
];

function SideNavigation() {
  return (
    <div
      dir="rtl"
      style={{
        height: "200%",
        width: "100%",
      }}
    >
      <Box
        p={2}
        className="container"
        sx={{
          width: "200%",
          height: "100%",
          //   overflowY: "auto",
          //   overflowX: "auto",
          flexGrow: 1,
        }}
      >
        <List>
          {navList.map((item, index) => (
            <ListItem className="list-item" key={item}>
              <ListItemButton className="list-item">
                <img
                  src={reactQueryLogo}
                  className="logo sidenav"
                  alt="React Query logo"
                />
                <Link to="/section1">
                  <p className="text" dir="rtl">{`${index}#:  ${item}`}</p>
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </div>
  );
}

export default SideNavigation;
