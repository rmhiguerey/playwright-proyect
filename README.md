
## Project Structure

    playwright-project/
    ├── product-management/
    │   ├── public/
    │   │   ├── index.html
    │   │   ├── style.css
    │   │   └── script.js
    │   ├── server/
    │   │   └── db.json
    │   ├── tests/
    │   │   └── api.test.js
    │   ├── playwright.config.js
    │   ├── package.json
    │   └── README.md
    ├── other-playwright-files/
    │   ├── ... (otros archivos y carpetas de Playwright)
    └── package.json


# Requirements

    - Node.js
    - npm

# Clone the repository

    - Clone the repository:
    
        ```bash
        git clone <REPOSITORY_URL>
        
# APP

    - Install the dependencies:

        cd playwright-project/product-management
        npm install

    - Start the JSON server: 
        npm start

    - url
    
        Resources
        http://localhost:3008/products

        Home
        http://localhost:3008

# playwright-project

    - Install the dependencies:

        cd playwright-project
        npm install

    - Run 

        npm run test:bdd

    - Show report

        npx playwright show-report    




