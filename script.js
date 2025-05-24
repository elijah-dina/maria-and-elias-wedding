let currentPage = 0;
const totalPages = 5;
const app = document.getElementById('app');
const dots = document.querySelectorAll('.dot');

function updateDots(currentPageIndex) {
    const allDots = document.querySelectorAll('.dots');
    allDots.forEach((dotContainer, i) => {
      const dots = dotContainer.querySelectorAll('.dot');
      dots.forEach((dot, j) => {
        dot.classList.toggle('active', j === currentPageIndex);
      });
    });
  }
  

function goToPage(index) {
  if (index >= 0 && index < totalPages) {
    currentPage = index;
    app.style.transform = `translateX(-${index * 100}vw)`;
    updateDots(index);
  }
}

// Swipe left/right support (touch)
let startX = null;
document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
  if (startX === null) return;
  let endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) goToPage(currentPage + 1); // swipe left
  else if (endX - startX > 50) goToPage(currentPage - 1); // swipe right
  startX = null;
});

// Optional: arrow key support
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowRight') goToPage(currentPage + 1);
  if (e.key === 'ArrowLeft') goToPage(currentPage - 1);
});

function showMap(type) {
    if (type === 'ceremony') {
      window.open('https://maps.google.com?q=SAINT+ELIAS+GREEK+ORTHODOX+CHURCH+MTAYLEB', '_blank');
    } else if (type === 'dinner') {
      window.open('https://maps.google.com?q=KYRA+VENUE+RAYFOUN', '_blank');
    }
}

function toggleGuestOptions(show) {
    const guestDiv = document.getElementById('guest-count');
    guestDiv.style.display = show ? 'block' : 'none';
  }
  
  function confirmRSVP() {
    const attendance = document.querySelector('input[name="attendance"]:checked');
    const guestCount = document.querySelector('input[name="guests"]:checked');
  
    if (!attendance) {
      alert("Please select if you will attend.");
      return;
    }
  
    if (attendance.value === "yes" && !guestCount) {
      alert("Please select number of guests.");
      return;
    }
  
    alert("Thank you for your response!");
  }
  
  