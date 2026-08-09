document.querySelectorAll('.card img').forEach(img => {
    img.addEventListener('click', () => {
        const card = img.closest('.card');
        const title = card.dataset.title;
        const price = card.dataset.price;
        const status = card.dataset.status;
        const specs = card.dataset.specs;
        const story = card.dataset.story;

        const modal = document.createElement('div');
        modal.classList.add('modal');
        modal.innerHTML = `
        <div class="modal-content">
          <img src="${img.src}" alt="${img.alt}" style="max-width:100%; border-radius:10px;">
          <h3>${title}</h3>
          <p><strong>Price:</strong> ${price}</p>
          <p><strong>Status:</strong> ${status}</p>
          <p><strong>Specs:</strong> ${specs}</p>
          <p><strong>Story:</strong> ${story}</p>
          <div class="modal-buttons">
            <button class="order-btn">Order Custom Version</button>
            <button onclick="window.location.href='mailto:aswinienukonda@gmail.com?subject=Inquiry about ${title}'">Inquire via Email</button>
            <button class="wishlist-btn">❤️ Add to Wishlist</button>
          </div>
        </div>
      `;
        document.body.appendChild(modal);

        // Close modal when clicking outside
        modal.addEventListener('click', e => {
            if (e.target === modal) modal.remove();
        });

        // Wishlist functionality
        modal.querySelector('.wishlist-btn').addEventListener('click', () => {
            let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            wishlist.push(title);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
            alert(`${title} added to wishlist!`);
        });
    });
});
  
