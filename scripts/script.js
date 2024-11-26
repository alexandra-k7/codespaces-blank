// Handling form submission and storing data in localStorage
document.getElementById("wineSurvey")?.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get user input from the form
    const wineType = document.getElementById("wineType").value;
    const location = document.getElementById("location").value;
    const experience = document.getElementById("experience").value;

    // Store user preferences in localStorage
    localStorage.setItem("wineType", wineType);
    localStorage.setItem("location", location);
    localStorage.setItem("experience", experience);

    // Redirect to the results page after storing preferences
    window.location.href = "results.html";
});

// Display winery recommendations on the results page
if (document.getElementById("recommendationsList")) {
    // Retrieve preferences from localStorage
    const wineType = localStorage.getItem("wineType");
    const location = localStorage.getItem("location");
    const experience = localStorage.getItem("experience");

    // Generate winery recommendations based on user input
    const recommendations = getRecommendations(wineType, location, experience);

    // Display the recommendations in the HTML
    const recommendationsList = document.getElementById("recommendationsList");
    recommendationsList.innerHTML = `<h2>Recommended Wineries for You:</h2><ul>` + recommendations.map(function(winery) {
        return `<li>${winery}</li>`;
    }).join('') + `</ul>`;
}

// Function to generate recommendations based on user preferences
function getRecommendations(wineType, location, experience) {
    // Define winery recommendations based on wine type, location, and experience
    const wineries = {
        ithaca: {
            red: {
                tour: ["Red Newt Cellars", "Six Mile Creek Vineyard"],
                tasting: ["Cayuga Ridge Winery", "Hosmer Winery"],
                vineyard: ["Buttonwood Grove Winery", "Shaw Vineyard"],
                relax: ["King Ferry Winery", "Bellwether Hard Cider & Wine"]
            },
            white: {
                tour: ["Cayuga Wine Trail", "White Birch Vineyard"],
                tasting: ["Lucas Vineyards", "Cayuga Ridge Winery"],
                vineyard: ["Shaw Vineyard", "Hosmer Winery"],
                relax: ["Mayer's Vineyards", "Red Newt Cellars"]
            }
        },
        california: {
            red: {
                tour: ["Napa Valley Winery", "Sonoma County Vineyards"],
                tasting: ["California Red Wines", "Golden State Winery"],
                vineyard: ["Rolling Hills Vineyards", "Sunset Vineyards"],
                relax: ["Tranquil Valley Winery", "Serenity Hills Winery"]
            },
            white: {
                tour: ["Chardonnay Hills", "White Blossom Winery"],
                tasting: ["Crisp Chardonnay Winery", "Golden Grape Vineyards"],
                vineyard: ["Sierra White Vineyards", "Majestic White Winery"],
                relax: ["Calm Waters Vineyard", "Sunset Ridge Winery"]
            }
        },
        france: {
            red: {
                tour: ["Bordeaux Legends", "Château de Bordeaux"],
                tasting: ["Red Vines of Burgundy", "Southeast French Vineyards"],
                vineyard: ["Champagne Bordeaux Vineyard", "Montpellier Hills"],
                relax: ["Les Vins du Sud", "Provence Hidden Gem Winery"]
            },
            white: {
                tour: ["Loire Valley Winery", "Chablis White Vineyard"],
                tasting: ["Languedoc White Wines", "Alsace Fine Wines"],
                vineyard: ["Château de Loire", "Vin Blanc Vineyard"],
                relax: ["Tranquil Alsace Vineyards", "Côte d'Or White Wines"]
            }
        },
        italy: {
            red: {
                tour: ["Tuscany Wine Tours", "Piedmont Vineyards"],
                tasting: ["Chianti Classico", "Amarone Wine Estate"],
                vineyard: ["Sicilian Vineyard", "Tuscan Hills Vineyard"],
                relax: ["Montalcino Wine Estate", "Relaxing in Barolo"]
            },
            white: {
                tour: ["Veneto Wine Tour", "Prosecco Vineyard"],
                tasting: ["Friuli Wines", "Pinot Grigio Vineyards"],
                vineyard: ["Vineyards of Trentino", "Lazio White Wines"],
                relax: ["Piedmont Vineyards", "Lake Garda Winery"]
            }
        }
    };

    // Return recommendations based on location, wine type, and experience
    return wineries[location]?.[wineType]?.[experience] || ["No recommendations found"];
}
