const dayInput = document.querySelector("#day");
const monthInput = document.querySelector("#month");
const yearInput = document.querySelector("#year");

const calculateAgeBtn = document.querySelector("#calculate-age-btn");
const resultsContainer = document.querySelector("#result-container");

const dayLabel = document.querySelector("label[for='day']");
const monthLabel = document.querySelector("label[for='month']");
const yearLabel = document.querySelector("label[for='year']");

const errorValidations = document.querySelectorAll('.errorValidation')

function resetErrors() {
  errorValidations.forEach(validation => validation.innerHTML = '');
  dayInput.classList.remove("ErrorBorder");
  dayLabel.classList.remove("text-primary-light-red");
  monthInput.classList.remove("ErrorBorder");
  monthLabel.classList.remove("text-primary-light-red");
  yearInput.classList.remove("ErrorBorder");
  yearLabel.classList.remove("text-primary-light-red");
}

calculateAgeBtn.addEventListener("click", (event) => {
  event.preventDefault(); 

  const day = Number(dayInput.value);
  const month = Number(monthInput.value);
  const year = Number(yearInput.value);

  resetErrors()


  if (!day || day < 1 || day > 31) {
    if (!day) {
      errorValidations[0].innerHTML = 'This field is required';
    } else {
      errorValidations[0].innerHTML = 'Invalid day';
    }
    dayInput.classList.add("ErrorBorder");
    dayLabel.classList.add("text-primary-light-red");
  }

  if (!month || month < 1 || month > 12) {
    if (!month) {
      errorValidations[1].innerHTML = 'This field is required';
    } else {
      errorValidations[1].innerHTML = 'Invalid month';
    }
    monthInput.classList.add("ErrorBorder");
    monthLabel.classList.add("text-primary-light-red");
  }

  if (!year) {
    errorValidations[2].innerHTML = 'This field is required';
    yearInput.classList.add("ErrorBorder");
    yearLabel.classList.add("text-primary-light-red");
  }

  const currentYear = new Date().getFullYear();
  if (year > currentYear) {
    errorValidations[2].innerHTML = 'Invalid year';
    yearInput.classList.add("ErrorBorder");
    yearLabel.classList.add("text-primary-light-red");
  }

  if ((day === 31 && (month === 4 || month === 6 || month === 9 || month === 11)) || (day >= 30 && month === 2) || (day === 29 && month === 2 && (year % 4 !== 0 || (year % 100 === 0 && year % 400 !== 0)))) {
    errorValidations[0].innerHTML = 'Invalid date';
    dayInput.classList.add("ErrorBorder");
    dayLabel.classList.add("text-primary-light-red");
    monthInput.classList.add("ErrorBorder");
    monthLabel.classList.add("text-primary-light-red");
    yearInput.classList.add("ErrorBorder");
    yearLabel.classList.add("text-primary-light-red");
  }

  const hasErrors = Array.from(errorValidations).some(validation => validation.innerHTML !== '');

  if (hasErrors) {
  return;
  }
  
  const birthDate = new Date(year, month, day);

  const currentDate = new Date();

  const timeDiff = currentDate.getTime() - birthDate.getTime();

  const ageInYears = Math.floor(timeDiff / (1000 * 3600 * 24 * 365.25)); 
  const ageInMonths = Math.floor(timeDiff / (1000 * 3600 * 24 * 30.44)) % 12; 

  const daysInBirthMonth = new Date(year, month + 1, 0).getDate(); 
  const daysPassedThisMonth = daysInBirthMonth - day; 
  const daysPassedThisYear = daysPassedThisMonth + ageInMonths * 30.44;
  const ageInDays = Math.floor((timeDiff - ageInYears * 365.25 * 24 * 3600 * 1000 - ageInMonths * 30.44 * 24 * 3600 * 1000) / (1000 * 3600 * 24));

  resultsContainer.innerHTML = `
    <p><span class="text-primary-purple">${ageInYears}</span> years</p>
    <p><span class="text-primary-purple">${ageInMonths}</span> months</p>
    <p><span class="text-primary-purple">${ageInDays}</span> days</p>
  `;
});