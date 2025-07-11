https://recipe-book-application.vercel.app/

Form:
<img width="1634" height="945" alt="recipebook" src="https://github.com/user-attachments/assets/a713cd8c-9963-4bf3-b575-bfbd73ca2266" />

Added:
<img width="1776" height="931" alt="data" src="https://github.com/user-attachments/assets/05f85d1c-69fe-4393-bb9d-279369759c77" />

Update:
<img width="1743" height="926" alt="updated" src="https://github.com/user-attachments/assets/bbcadf2a-1134-4122-b238-f53e29104832" />

Delete:
<img width="1706" height="922" alt="delete" src="https://github.com/user-attachments/assets/49930102-e27b-40d4-84a6-4e228204b294" />

Filter:
<img width="1683" height="924" alt="filter" src="https://github.com/user-attachments/assets/fa06852a-c01c-4f59-9d15-2f1c95cd85ca" />



🧾 Recipe Book Web Application Documentation
📄 Overview

The Recipe Book App allows users to add, view, edit, delete, search, and filter recipes. Each recipe contains a title, ingredients, instructions, cuisine type, and an image (via URL). Data is stored in localStorage, ensuring persistence across sessions.
🧱 Project Structure

recipe-book-app/
├── index.html        # Main HTML structure
├── style.css         # Styling for layout, cards, responsiveness
├── script.js         # JavaScript for functionality (CRUD, search, filter)
└── assets/           # Optional: images or icons folder

🧩 Features
✅ Add Recipe

    Inputs: Title, Ingredients, Instructions, Image URL, Cuisine

    Stored in localStorage

    Form reset after submission

✏️ Edit Recipe

    Populates form with existing data

    Updates recipe on submission

🗑 Delete Recipe

    Removes recipe from UI and localStorage

🔍 Search & Filter

    Search by title or ingredients (case-insensitive)

    Filter by cuisine type using dropdown

🖼 Display Recipes

    Cards include image, title, ingredients, instructions, and cuisine

    Buttons for Edit and Delete

    Responsive and clean UI

💻 Technologies Used

    HTML5 for structure

    CSS3 for styling

    JavaScript (ES6) for logic

    localStorage for data persistence
    

🗂 Example Data Structure

{
  title: "Burger",
  ingredients: "Bread, Cheese, Patty",
  instructions: "Assemble and cook.",
  image: "https://example.com/image.jpg",
  cuisine: "Indian"
}

📌 Notes

    Image must be a valid URL

    Recipes are stored in JSON format in localStorage

    Optional: Add form validation and toast notifications for better UX

