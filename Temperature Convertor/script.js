function convert() {
    // Get input values
    const celsius = parseFloat(document.getElementById('celsius').value);
    const fahrenheit = parseFloat(document.getElementById('fahrenheit').value);

    if (!isNaN(celsius)) {
        // Convert Celsius to Fahrenheit
        const f = (celsius * 9/5) + 32;
        document.getElementById('fahrenheit').value = f.toFixed(2);
    } else if (!isNaN(fahrenheit)) {
        // Convert Fahrenheit to Celsius
        const c = (fahrenheit - 32) * 5/9;
        document.getElementById('celsius').value = c.toFixed(2);
    } else {
        alert("Please enter a value in either Celsius or Fahrenheit.");
    }
}
