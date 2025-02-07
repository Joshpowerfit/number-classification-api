# number-classification-api

# Number Classification API

## Description
This API classifies a given number based on mathematical properties and provides a fun fact.

## Features
- Checks if a number is **prime**, **perfect**, or **Armstrong**.
- Determines if the number is **odd** or **even**.
- Computes the **sum of its digits**.
- Fetches a **fun fact** from Numbers API.

## Usage
### Endpoint:

GET /api/classify-number?number=371

### Example Response:
```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}

Deployment
The API is publicly accessible at:

https://number-classification-api-zez7.onrender.com/api/classify-number?number=371


Setup Locally

git clone https://github.com/Joshpowerfit/number-classification-api.git
cd number-classification-api
npm install
node index.js

Reference

Numbers API
Parity in Mathematics
Hire Node.js Developers