async function fetchPosts() {
    const url = 'https://jsonplaceholder.typicode.com/posts'; // Endpoint for posts
    try {
        // Fetch data from the API
        const response = await fetch(url);

        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the JSON data
        const posts = await response.json();

        // Get the <ul> element to display the posts
        const postsList = document.getElementById('postsList');

        // Iterate over the posts and create list items
        posts.forEach(post => {
            const li = document.createElement('li');
            li.textContent = `Title: ${post.title} - Body: ${post.body}`;
            postsList.appendChild(li);
        });
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Call the function to fetch and display posts
fetchPosts();
