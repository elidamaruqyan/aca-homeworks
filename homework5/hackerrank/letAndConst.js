const main = () => {
    const PI = Math.PI;
    let r = 2.6;
    let area;
    let perimeter;

    // Print the area of the circle:
    area = PI * (r * r);
    console.log(area);

    // Print the perimeter of the circle:
    perimeter = 2 * (PI * r);
    console.log(perimeter);

    try {
        // Attempt to redefine the value of constant variable PI
        PI = 0;
        // Attempt to print the value of PI
        console.log(PI);
    } catch (error) {
        console.error("You correctly declared 'PI' as a constant.");
    }
};

main();
