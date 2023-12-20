let currentPage = 1;
const loadData = () => {
    fetch(`http://localhost:3000/businesses?page=${currentPage}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('data-container');
            data.forEach(business => {
                const div = document.createElement('div');
                div.textContent = `Name: ${business.name}, Type: ${business.type}, Location: ${business.location}, Rating: ${business.rating}`;
                container.appendChild(div);
            });
            currentPage++;
        })
        .catch(error => console.error('Error:', error));
};

loadData(); // Load initial data
