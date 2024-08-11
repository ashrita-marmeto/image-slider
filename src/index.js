const slideData = [
  {
      category: "Women's Apparel",
      title: "Elevate your wardrobe with our limited-time fashion offer!",
      buttonLabel: "Explore More",
      buttonLink: "#",
      alignment: "center",
      imageUrl: "https://dummyimage.com/600x400/C06C84/c06c84"
  },
  {
      category: "Trendy Classics",
      title: "Discover Signature Look: Fashion Forward and Fabulous!",
      buttonLabel: "Shop Now",
      buttonLink: "#",
      alignment: "center",
      imageUrl: "https://dummyimage.com/600x400/6c5b7b/6c5b7b"
  },
  {
      category: "Modern Elegance",
      title: "Step into the World of Style with the Latest Fashion Trends Unveiled!",
      buttonLabel: "Explore Now",
      buttonLink: "#",
      alignment: "center",
      imageUrl: "https://dummyimage.com/600x400/355c7d/355c7d"
  }
];

const splideList = document.querySelector('.splide__list');
slideData.forEach(slide => {
  const li = document.createElement('li');
  li.className = 'splide__slide';
  li.innerHTML = `
      <img src="${slide.imageUrl}" alt="${slide.title}" class="slide-image">
      <div class="slide-content" data-alignment="${slide.alignment}">
          <p>${slide.category}</p>
          <h2>${slide.title}</h2>
          <a href="${slide.buttonLink}">${slide.buttonLabel}</a>
      </div>
  `;
  splideList.appendChild(li);
});

document.addEventListener('DOMContentLoaded', function () {
  const splide = new Splide('.splide', {
      perPage: 1,
      pagination: true,
      arrows: true,
  });
  splide.mount();

  const hamburger = document.getElementById('hamburger');
  const drawer = document.getElementById('drawer');
  const positionDropdown = document.getElementById('position-dropdown');
  const slideContents = document.querySelectorAll('.slide-content');

  hamburger.addEventListener('click', () => {
      drawer.classList.toggle('open');
      hamburger.classList.toggle('open');
  });

  positionDropdown.addEventListener('change', (event) => {
      const position = event.target.value;
      updateSlideContentPosition(position);
  });

  function updateSlideContentPosition(position) {
    slideContents.forEach(content => {

      content.style.top = '';
      content.style.bottom = '';
      content.style.left = '';
      content.style.right = '';
      content.style.transform = '';
      
      if (position.includes('top')) {
        content.style.top = '0';
      } else if (position.includes('bottom')) {
        content.style.bottom = '0';
      } else if (position.includes('middle')) {
        content.style.top = '50%';
        content.style.transform += 'translateY(-50%)';
      }

      if (position.includes('left')) {
        content.style.left = '0';
      } else if (position.includes('right')) {
        content.style.right = '0';
      } else if (position.includes('center')) {
        content.style.left = '50%';
        content.style.transform += ' translateX(-50%)';
      }
    });
  }


  slideContents.forEach(content => {
    const alignment = content.dataset.alignment;
    let position;
  
    switch (alignment) {
      case 'left':
        position = 'middle-left';
        content.style.textAlign = 'left';
        break;
      case 'right':
        position = 'middle-right';
        content.style.textAlign = 'right';
        break;
      case 'center':
        position = 'middle-center';
        content.style.textAlign = 'center';
        break;
    }

  
    updateSlideContentPosition(position);
    positionDropdown.value = position;
  });


});

