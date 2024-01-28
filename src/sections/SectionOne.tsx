import Box from "@mui/material/Box";
import "./Sections.css";

function SectionOne() {
  return (
    <Box>
      <h1>1#. React Query מעשי</h1>
      <img
        alt="Austria with my love!"
        style={{
          width: "auto",
          height: "auto",
        }}
        src="https://miro.medium.com/v2/resize:fit:955/1*aoSbTiz0dBOBhyaH-kRYgg.jpeg"
      />
      <p className="main-text">
        כאשר GraphQL ובמיוחד Apollo Client הפכו פופולריים ב-2018 בקירוב, הייתה
        מהומה רבה על כך שהחליף לחלוטין את ה-redux, והשאלה "האם Redux מת עדיין?"
        נשאל הרבה.
      </p>
      <p className="main-text">
        אני זוכר בבירור שלא הבנתי על מה מדובר. למה שספריית איסוף נתונים תחליף את
        מנהל הנתונים הגלובלי שלך? מה בכלל קשור אחד לשני?
      </p>
      <p className="main-text">
        התרשמתי שלקוחות GraphQL כמו אפולו היו מביאים רק את הנתונים עבורך, בדומה
        למה שלמשל. axios עושה עבור REST, ואת זה עדיין תצטרך כמובן דרך כלשהי
        להפוך את הנתונים האלה נגישים ליישום שלך.
      </p>
      <p className="main-text">לא יכולתי לטעות יותר.</p>
    </Box>
  );
}

export default SectionOne;
