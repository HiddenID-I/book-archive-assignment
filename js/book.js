const searchBook = () => {
    const search =document.getElementById('search');
    const searchText = search.value;
    search.value = '';
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displaySearchResult(data.docs));
    
}

const displaySearchResult = docs => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    docs.forEach(doc => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg" class="card-img-top" alt="...">
            <div class="card-body text-center">
                 <h5 class="card-title fs-6 text-success">Book Title: ${doc.title}</h5>
                 <h5 class="card-title fs-6 fw-light">Author Name: ${doc.author_name.slice(0, 1)}</h5>
                 <h5 class="card-title fs-6 fw-light">Publisher: ${doc.publisher.slice(0, 1)}</h5>
                 <h5 class="card-title fs-6 fw-lighter fst-italic">Publish Year: ${doc.first_publish_year}</h5>
                 
            </div>
      </div>
        `;
        searchResult.appendChild(div);
    })
}