Frontend Test Task Improvements

This project includes all required fixes and improvements for the given frontend test tasks.
Below I’ve described how each issue looked originally and what I changed to fix it.

tasks & Fixes
1. Add Sort Function by Price

Before:
The product list was static — there was no option to sort items by price.

After:
I added a dropdown menu with two options: “Low to High” and “High to Low”.
Used a state variable sortingOrder to track the selection and re render the product list accordingly.
Now users can dynamically sort the products by price.

2. Format Price to Japanese Yen

Before:
Prices were displayed as plain numbers without any currency formatting (e.g., 2999).

After:
I created a helper file lib/currency.js and used Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" }) to convert all prices into the proper Japanese Yen format.
Then I imported and applied this formatter wherever prices are shown.

3. Change Product Grid Layout

Before:
The product grid layout displayed 4 columns and 3 rows, which looked cramped on smaller screens.

After:
I updated the grid styling to 3 columns and 4 rows, improving readability and spacing across devices.
This change was made in the product list container using responsive grid classes.

4. Update “Buy Now” Button Text

Before:
On the product detail page, the button next to “Add to Cart” didn’t clearly indicate its function.

After:
I updated the text to “Buy Now” to make it clear that it triggers the checkout process.
This improves usability and matches the test requirement.

5. Horizontal Product List Animation (Right to Left)

Before:
The “You may also like” section displayed products statically in one row — no movement or interaction.

After:
I added a smooth right-to-left scrolling animation using CSS keyframes inside Marquee.module.css.
Products are now wrapped in a container with the .anim class for continuous motion.
Also adjusted timing and overflow settings to remove any blank space between loops.

Demo Video
A short Loom video (under 60 seconds) demonstrates all tasks working correctly.

Tech Stack
Next.js
React.js
Tailwind CSS