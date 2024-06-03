// document.addEventListener('click', ()=> {
//   const categoryBtns = document.querySelectorAll('.category-btn');
//   const items = document.querySelectorAll('.item');

//   categoryBtns.forEach(btn => {
//     btn.addEventListener('click', () => {
     
//       categoryBtns.forEach(btn => {
//         btn.classList.remove('active');
//       });

//       btn.classList.add('active');

//       const category = btn.getAttribute('data-category');

//       items.forEach(item => {
//         if (category === 'all' || item.classList.contains(category)) {
//           item.style.display = 'block';
//         } else {
//           item.style.display = 'none';
//         }
//       });
//     });
//   });
// });


$(document).ready(function() {
    const categoryBtns = $('.category-btn');
    const items = $('.item');
  
    categoryBtns.on('click', function() {
      categoryBtns.removeClass('active');
      $(this).addClass('active');
  
      const category = $(this).data('category');
  
      items.each(function() {
        if (category === 'all' || $(this).hasClass(category)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  });
  
  
  