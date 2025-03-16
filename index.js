




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };

// 1. Function to calculate 10% tax on an amount
function calculateTax(amount) {
    return amount * 0.10; // 10% tax
  }
  
  // 2. Function to convert a string to uppercase
  function convertToUpperCase(text) {
    return text.toUpperCase(); // Convert string to uppercase
  }
  
  // 3. Function to find the larger of two numbers
  function findMaximum(num1, num2) {
    return num1 > num2 ? num1 : num2; // Return the larger of the two numbers
  }
  
  // 4. Function to check if a word is a palindrome
  function isPalindrome(word) {
    const reversedWord = word.split('').reverse().join(''); // Reverse the string
    return word === reversedWord; // Check if the word is equal to its reverse
  }
  
  // 5. Function to calculate the price after applying a discount
  function calculateDiscountedPrice(originalPrice, discountPercentage) {
    const discountAmount = originalPrice * (discountPercentage / 100); // Calculate discount
    return originalPrice - discountAmount; // Return the discounted price
  }
  
  // Example Usage:
  
  // Test `calculateTax`
  console.log(calculateTax(100)); // Should log 10 (10% of 100)
  
  // Test `convertToUpperCase`
  console.log(convertToUpperCase("hello")); // Should log "HELLO"
  
  // Test `findMaximum`
  console.log(findMaximum(5, 10)); // Should log 10 (larger number)
  
  // Test `isPalindrome`
  console.log(isPalindrome("madam")); // Should log true (madam is a palindrome)
  console.log(isPalindrome("hello")); // Should log false (hello is not a palindrome)
  
  // Test `calculateDiscountedPrice`
  console.log(calculateDiscountedPrice(100, 20)); // Should log 80 (20% discount on 100)
  