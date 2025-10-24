document.addEventListener("DOMContentLoaded", () => {
  const month = new Date().getMonth();
  const zodiacs = [
    "capricorn",  // Jan
    "aquarius",   // Feb
    "pisces",     // Mar
    "aries",      // Apr
    "taurus",     // May
    "gemini",     // Jun
    "cancer",     // Jul
    "leo",        // Aug
    "virgo",      // Sep
    "libra",      // Oct
    "scorpio",    // Nov
    "sagittarius" // Dec
  ];
  document.body.setAttribute("data-zodiac", zodiacs[month]);
  console.log(`🌙 Zodiac theme applied: ${zodiacs[month]}`);
});


window.addEventListener('scroll', () => {
  const btn = document.querySelector('.whatsapp-float');
  if (window.scrollY > 200) {
    btn.style.opacity = '1';
    btn.style.visibility = 'visible';
  } else {
    btn.style.opacity = '0';
    btn.style.visibility = 'hidden';
  }
});
