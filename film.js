const arrows = document.querySelectorAll(".arrow");
const movieList = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  const withRatio = Math.floor(window.innerWidth / 300);
  console.log(Math.floor(window.innerWidth / 300));
  let clickCounter = 0;
  const imageItem = movieList[i].querySelectorAll("img").length;

  arrow.addEventListener("click", function () {
    clickCounter++;
    if (imageItem - (4 + clickCounter) + (4 - withRatio) >= 0) {
      var style = window.getComputedStyle(movieList[i]);
      var matrix = new WebKitCSSMatrix(style.transform);
      console.log("translateX: ", matrix.m41);

      movieList[i].style.transform = `translateX(${matrix.m41 - 300}px)`;
    } else {
      movieList[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

/*! dark mode */
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container,.navbar,.sidebar,.sidebar i,.toggle,.toggle-ball,.movie-list-filter select,.movie-list-title.active"
);

ball.addEventListener("click", function () {
  items.forEach((item) => item.classList.toggle("active"));
});

// Arama ikonu, arama çubuğu ve arama butonunu seçiyoruz
const searchIcon = document.querySelector('.search-icon');
const searchContainer = document.querySelector('.search-container');
const searchInput = document.querySelector('.search-input');
const searchExecuteBtn = document.querySelector('.search-execute-btn');

// Arama ikonu tıklandığında arama çubuğunu açıp kapatma işlemi
searchIcon.addEventListener('click', function () {
  searchContainer.classList.toggle('active');
  searchInput.focus(); // Çubuğu açtığında odaklanır
});

// Arama butonuna tıklanıldığında arama işlemini başlat
searchExecuteBtn.addEventListener('click', function () {
  const searchTerm = searchInput.value.trim();
  
  if (searchTerm !== '') {
    alert(`Arama: ${searchTerm}`); // Burada arama işlemini başlatabilirsiniz
    // API veya veritabanı bağlantısıyla arama yapılabilir
  } else {
    alert('Lütfen bir film ismi girin.');
  }
});

const apiKey = 'YOUR_API_KEY'; // API anahtarınızı buraya ekleyin
const apiURL = 'https://api.example.com/search'; // Film arama API'si

// Arama butonuna tıklanıldığında arama işlemini başlat
searchExecuteBtn.addEventListener('click', function () {
  const searchTerm = searchInput.value.trim();
  
  if (searchTerm !== '') {
    fetch(`${apiURL}?query=${searchTerm}&api_key=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        if (data.results && data.results.length > 0) {
          displaySearchResults(data.results); // API'den gelen sonuçları burada gösterin
        } else {
          alert('Sonuç bulunamadı.');
        }
      })
      .catch(error => {
        console.error('Arama hatası:', error);
        alert('Bir hata oluştu.');
      });
  } else {
    alert('Lütfen bir film ismi girin.');
  }
});

// Sonuçları görüntüleme fonksiyonu
function displaySearchResults(results) {
  const resultsContainer = document.querySelector('.search-results');
  resultsContainer.innerHTML = ''; // Önceki sonuçları temizle

  results.forEach(result => {
    const movieItem = document.createElement('div');
    movieItem.classList.add('movie-item');
    
    const movieTitle = document.createElement('h3');
    movieTitle.textContent = result.title;
    
    const moviePoster = document.createElement('img');
    moviePoster.src = `https://image.tmdb.org/t/p/w500${result.poster_path}`;
    moviePoster.alt = result.title;
    
    movieItem.appendChild(moviePoster);
    movieItem.appendChild(movieTitle);
    resultsContainer.appendChild(movieItem);
  });
}


// House ikonu seçimi
const houseIcon = document.querySelector(".house-icon");

// House ikonuna tıklama olayını ekle
houseIcon.addEventListener("click", function () {
  // Sayfayı en başa kaydır
  window.scrollTo({
    top: 0,
    behavior: "smooth"  // Sayfanın kaydırılma animasyonu
  });
});

// Bookmarks ikonu seçimi
const bookmarksIcon = document.querySelector(".bookmarks-icon");
const bookmarksMenu = document.querySelector(".bookmarks-menu");

// Bookmarks ikonuna tıklama olayını ekle
bookmarksIcon.addEventListener("click", function () {
  // Menüyü açıp kapat
  bookmarksMenu.style.display = (bookmarksMenu.style.display === "none" || bookmarksMenu.style.display === "") ? "block" : "none";
});

// Eğer menü dışına tıklanırsa, menüyü kapatabiliriz:
document.addEventListener("click", function(event) {
  // Eğer tıklanan element, bookmarks ikonundan farklı ise menüyü kapat
  if (!bookmarksIcon.contains(event.target) && !bookmarksMenu.contains(event.target)) {
    bookmarksMenu.style.display = "none";
  }
});



