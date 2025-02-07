const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Number Classification API. Use /api/classify-number?number=<num>" });
});

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to check if a number is an Armstrong number
function isArmstrong(num) {
    const digits = num.toString().split("");
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
    return sum === num;
}

// Function to check if a number is a perfect number
function isPerfect(num) {
    let sum = 1;
    for (let i = 2; i <= num / 2; i++) {
        if (num % i === 0) sum += i;
    }
    return sum === num;
}

// Function to get the sum of digits
function getDigitSum(num) {
    return num.toString().split("").reduce((sum, digit) => sum + Number(digit), 0);
}

// API endpoint
app.get("/api/classify-number", async (req, res) => {
    const { number } = req.query;

    // Validate input (must be an integer)
    if (!number || isNaN(number) || !Number.isInteger(Number(number))) {
        return res.status(400).json({ number, error: true });
    }

    const num = Number(number);
    const properties = [];

    // Determine properties
    if (isArmstrong(num)) properties.push("armstrong");
    properties.push(num % 2 === 0 ? "even" : "odd");

    try {
        // Fetch fun fact from Numbers API
        const response = await axios.get(`http://numbersapi.com/${num}/math`);
        const funFact = response.data;

        res.json({
            number: num,
            is_prime: isPrime(num),
            is_perfect: isPerfect(num),
            properties,
            digit_sum: getDigitSum(num),
            fun_fact: funFact,
        });
    } catch (error) {
        res.status(500).json({ error: "Error fetching fun fact" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
