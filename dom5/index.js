// Area=π×radius^2

function calculateCircleArea(radius) {
    // Check if the radius is a positive number
    if (radius <= 0) {
        return 'Radius must be a positive number';
    }
    
    // Calculate the area using the formula
    const area = Math.PI * Math.pow(radius, 2);
    
    // Return the result
    return `The area of the circle with radius ${radius} is ${area.toFixed(2)}`;
}

// Example usage
const radius = 5;
console.log(calculateCircleArea(radius));
