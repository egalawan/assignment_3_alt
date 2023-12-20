// script.js

// Function to fetch and display data based on filters and pagination
function applyFilters() {
    const name = document.getElementById('nameFilter').value;
    const type = document.getElementById('typeFilter').value;
    const location = document.getElementById('locationFilter').value;
    const page = 1; // Set your initial page number
    const pageSize = 25; // Set the number of items per page
  
    fetch(`/filter?name=${name}&type=${type}&location=${location}&page=${page}&pageSize=${pageSize}`)
      .then(response => response.json())
      .then(data => {
        // Display the data in the data-container element (modify this according to your HTML structure)
        const dataContainer = document.getElementById('data-container');
        dataContainer.innerHTML = ''; // Clear previous data
  
        data.forEach(item => {
          const listItem = document.createElement('div');
          listItem.textContent = `Name: ${item.name}, Type: ${item.type}, Location: ${item.location}, Rating: ${item.rating}`;
          dataContainer.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Function to load more data (pagination)
  function loadMoreData() {
    const name = document.getElementById('nameFilter').value;
    const type = document.getElementById('typeFilter').value;
    const location = document.getElementById('locationFilter').value;
    const currentPage = 2; // Change this according to your needs
    const pageSize = 25; // Set the number of items per page
  
    fetch(`/filter?name=${name}&type=${type}&location=${location}&page=${currentPage}&pageSize=${pageSize}`)
      .then(response => response.json())
      .then(data => {
        // Display the data (append to existing data)
        const dataContainer = document.getElementById('data-container');
  
        data.forEach(item => {
          const listItem = document.createElement('div');
          listItem.textContent = `Name: ${item.name}, Type: ${item.type}, Location: ${item.location}, Rating: ${item.rating}`;
          dataContainer.appendChild(listItem);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Add event listeners to the filter and load more buttons
  document.getElementById('applyFiltersBtn').addEventListener('click', applyFilters);
  document.getElementById('loadMoreBtn').addEventListener('click', loadMoreData);
  