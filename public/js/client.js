fetch(`${window.location.origin}/api/v0/gallery`)
  .then((res) => {
    return res.json();
  })

  .then((products) => {
    console.log(products);

    // Create a `outputHTML` variable where you will store the html that will eventually be printed to the page
    let outputHTML = '';


    // Using `document.querySelector()`, assign the .gallery element to a `gallery` variable.
    let gallery = document.querySelector('.gallery');


    products.forEach((product) => {

      outputHTML += `<figure class="card"> 
      <img src="${product.imagePath}" alt="${product.description}">
      <figcaption> <h3>${product.title}</h3> </figcaption>
      </figure>`;


    });
    gallery.innerHTML = outputHTML;

  })

  .catch((error) => {
    console.log('Error');
  });