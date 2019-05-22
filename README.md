## Universidad Nacionalista México

Code in Node.js of UNM API

## Required steps

### Create config folder with three files<br>
#### 1. config.js file with

```javascript
//PORT
process.env.PORT = process.env.PORT || 5000;
//DATABASE
process.env.URLDB = 'mongodb://localhost:27017/{your_DB_name}';
//SEED JWT
process.env.SEED = process.env.SEED || 'seed-desarrollo';
//TOKEN DURATION
process.env.CAD_TOKEN = '24h';

```

#### 2. secrets.js file with your cloudinary keys

```javascript

module.exports = {
    cloudinary: {
        api_key: '{your_api_key}',
        cloud_name: '{your_cloud_name}',
        api_secret: '{your_api_secrets}'
    }
}

```

#### 3. upload.js with 

```javascript
const multer = require('multer');
module.exports = multer({dest: 'uploads'});

```

## Available Scripts

In the project directory, you can run:

### `npm install`

To install all modules required

### `npm start`

Runs the app in the development mode.<br>
View in console all request 
