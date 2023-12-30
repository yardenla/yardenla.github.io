// List of random phrases
const phrases = [
  "אלמד לספור עד 10 בשפות שונות",
  "לא אשכח לקנות חלב כשהמקרר ריק",
  "אפסיק לשלוח הודעות בטעות למספר שלא ידוע",
  "אלמד לשרוד יום ללא קפה",
  "אתחיל לשים לב להוראות השימוש",
  "לא אשכח להכניס את התאריכים לנכוניות (לא לשכוח לשנות לשנה הנכונה)",
  "אסיים לראות סדרה",
  "אשפר את היכולת למצוא מפתחות",
  "אזכה בפעם הבאה שאני ממלא.ת לוטו",
  "אגלה איך לבשל מלון במיקרוגל (נודלס)",
  "לא אשתמש במחשב בזמן שאני מדבר בטלפון",
  "אעבוד",
  "אדע להבדיל בין החצאיות שלי",
  "אחשוב פעמיים לפני שאני אומר.ת כן למשהו",
  "אגלה את המקום בו אני מכחיש את המקום שבו שכחתי",
  "אלמד להפסיק לאהוב את המזגן",
  "אשדרג את רמת האימון שלי לפתיחת צנרת הבקבוקים",
  "אגביר את המעורבות החברתית והתרומה לקהילה",
  "אתחיל פרויקט אישי או מטרה חדשה שמספקת ערך",
  "אשקיע יותר זמן ביצירת יכולת אישית ומקצועית",
  "אגלה את המקום בו אני מכחיש את המקום שבו שכחתי",
  "אתמקד ברגע הנוכח ולהפסיק לדאוג מדברים מיותרים",
  "אחיה",
  "אלמד ריקוד חדש",
  "אוכל יותר ירקות",
  "אשים מזגן על קור",
  "אאתגר את המוח",
  "אלמד להעריך יותר את הדברים הקטנים",
  "לא אשלח מיילים לפני שסיימתי לכתוב אותם",
  "אעשה יותר ספורט",
  "לא אריב עם אנשים מטומטמים ברשת",
  "לא אתעצבן על השירות",
  "ארוץ חצי מרתון הפוך",
  "לא אעביר לערוץ 14",
  "אסדר את השולחן",

];

// Function to display random phrases rapidly before settling on the final phrase
function displayRandomPhrasesQuickly() {
  const displayElement = document.getElementById("random-text");

  // Iterate through the phrases rapidly
  let currentIndex = 0;
  const intervalId = setInterval(() => {
    displayElement.innerText = phrases[currentIndex];
    currentIndex++;

    // Check if we have displayed all phrases
    if (currentIndex >= phrases.length) {
      clearInterval(intervalId); // Stop the interval
      displayRandomFinalPhrase(); // Display the final random phrase
    }
  }, 90); // Adjust the interval duration as needed
}

// Function to display the final random phrase
function displayRandomFinalPhrase() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  document.getElementById("random-text").innerText = phrases[randomIndex];
}

// Display random phrases quickly when the page loads
window.addEventListener("load", () => {
  displayRandomPhrasesQuickly();
});
