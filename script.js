// Sample student data represented as a JavaScript object.
const student = {
  name: "K Jahnvi",
  age: 20,
  course: "BTech CSE",
  subjects: ["JavaScript", "React", "Node.js"],
  address: {
    city: "Gurugram",
    country: "India"
  }
};

// Convert the object to JSON text and parse it back into an object.
function showJSON() {
  const jsonString = JSON.stringify(student, null, 4);
  const parsedData = JSON.parse(jsonString);
  document.getElementById("jsonOutput").textContent =
    JSON.stringify(parsedData, null, 4);
}

// Fetch posts from a public REST API and render the first ten.
async function fetchPosts() {
  const status = document.getElementById("status");
  const postsContainer = document.getElementById("posts");

  status.textContent = "Loading data...";
  postsContainer.replaceChildren();

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const posts = await response.json();
    status.textContent = "Data fetched successfully!";

    posts.slice(0, 10).forEach((post) => {
      const div = document.createElement("div");
      div.className = "post";

      const heading = document.createElement("h3");
      heading.textContent = post.title;

      const paragraph = document.createElement("p");
      paragraph.textContent = post.body;

      div.append(heading, paragraph);
      postsContainer.appendChild(div);
    });
  } catch (error) {
    status.textContent = `Error: ${error.message}`;
  }
}
