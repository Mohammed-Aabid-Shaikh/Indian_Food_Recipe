// Sample data of recipes (this can be replaced with a fetch call for dynamic data)
const recipes = [
    // Veg
    { name: "Vegetarian", url: "./vegetarian/vegetarian.html" },
    { name: "Veg", url: "./vegetarian/vegetarian.html" },
    { name: "Irish Bombay Potatoes", url: "./vegetarian/recipes/Irish_Bombay_Potatoes.html" },
    { name: "Palak Paneer", url: "./vegetarian/recipes/palak_paneer.html" },
    { name: "Paneer Butter Masala", url: "./vegetarian/recipes/paneer_butter_masala.html" },
    { name: "Dal Tadka", url: "./vegetarian/recipes/dal_tadka.html" },
    { name: "Chole", url: "./vegetarian/recipes/chole.html" },
    { name: "Pav Bhaji", url: "./vegetarian/recipes/pav_bhaji.html" },
    { name: "Malai Kofta", url: "./vegetarian/recipes/malai_kofta.html" },
    { name: "Paneer Bhurji", url: "paneer_bhurji.html" },
    // Non Veg
    { name: "Non-Vegetarian", url: "/Non_Vegetarian/non_vegetarian.html" },
    { name: "Non-Veg", url: "/Non_Vegetarian/non_vegetarian.html" },
    { name: "Butter Chicken", url: "/Non_Vegetarian/recipes/butter_chicken.html" },
    { name: "Chicken Biryani", url: "/Non_Vegetarian/recipes/chicken _biryani.html" },
    { name: "Mutton Curry", url: "/Non_Vegetarian/recipes/mutton_curry.html" },
    { name: "Chicken Bhuna Masala", url: "/Non_Vegetarian/recipes/chicken_bhuna_masala.html" },
    { name: "Madras Lamb Curry", url: "/Non_Vegetarian/recipes/madras_lamb_curry.html" },
    { name: "Mutton Stew", url: "/Non_Vegetarian/recipes/mutton_stew.html" },
    { name: "Murgh Dum Biryani", url: "/Non_Vegetarian/recipes/murgh_dum_biryani.html" },
    { name: "Fish Makhani", url: "/Non_Vegetarian/recipes/fish_makhani.html" },
    // Desserts
    { name: "Desserts", url: "/Desserts/desserts.html" },
    { name: "Sandesh", url: "/Desserts/recipes/sandesh.html" },
    { name: "Gulab Jamun", url: "/Desserts/recipes/gulab_jamun.html" },
    { name: "Rasmalai", url: "/Desserts/recipes/rasmalai.html" },
    { name: "Jalebi", url: "/Desserts/recipes/jalebi.html" },
    { name: "Kalakand", url: "/Desserts/recipes/kalakand.html" },
    { name: "Nankhatai", url: "/Desserts/recipes/nankhatai.html" },
    { name: "Kheer", url: "/Desserts/recipes/kheer.html" },
    { name: "Rasgulla", url: "/Desserts/recipes/rasgulla.html" },
    // Snacks
    { name: "Snacks", url: "/Snacks/snacks.html" },
    { name: "Samosa", url: "/Snacks/recipes/samosa.html" },
    { name: "Shakarpara", url: "/Snacks/recipes/shakarpara.html" },
    { name: "Poha Chivda", url: "/Snacks/recipes/poha_chivda.html" },
    { name: "Chakli", url: "/Snacks/recipes/chakli.html" },
    { name: "Banana Chips", url: "/Snacks/recipes/banana_chips.html" },
    { name: "Khaman", url: "/Snacks/recipes/khaman.html" },
    { name: "Vada Pav", url: "/Snacks/recipes/vada_pav.html" },
    { name: "Pakora", url: "/Snacks/recipes/pakora.html" }
];

// Function to show suggestions as the user types
function showSuggestions() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const suggestionsList = document.getElementById('suggestions-list');
    // Clear previous suggestions
    suggestionsList.innerHTML = '';

    if (input) {
        const filteredRecipes = recipes.filter(recipe =>
            recipe.name.toLowerCase().includes(input)
        );

        // Show suggestions if there are matches
        if (filteredRecipes.length > 0) {
            filteredRecipes.forEach(recipe => {
                const suggestionItem = document.createElement('div');
                suggestionItem.classList.add('suggestion-item');
                suggestionItem.textContent = recipe.name;
                suggestionItem.onclick = () => {
                    document.getElementById('search-input').value = recipe.name;
                    // Clear suggestions after selection
                    suggestionsList.innerHTML = '';
                    // window.location.href = recipe.url;
                };
                suggestionsList.appendChild(suggestionItem);
            });
        } else {
            const noResultItem = document.createElement('div');
            noResultItem.classList.add('suggestion-item');
            noResultItem.textContent = 'No results found';
            noResultItem.style.cursor = 'default';
            suggestionsList.appendChild(noResultItem);
        }
    }
}

// Function to handle the search button click
function handleSearchButtonClick() {
    const input = document.getElementById('search-input').value.toLowerCase();
    // Find the recipe that matches the input value
    const selectedRecipe = recipes.find(recipe =>
        recipe.name.toLowerCase() === input
    );
    
    if (selectedRecipe) {
        // Redirect to the URL of the selected recipe
        window.location.href = selectedRecipe.url;
    } else {
        alert('Recipe not found');
    }
}

// Add event listener for the search button
document.querySelector('.btn').addEventListener('click', handleSearchButtonClick);

// Hide suggestions when clicking outside the search input
document.addEventListener('click', (event) => {
    const searchContainer = document.querySelector('.search-container');
    if (!searchContainer.contains(event.target)) {
        document.getElementById('suggestions-list').innerHTML = '';
    }
});