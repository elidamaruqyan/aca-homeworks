/**
 *   Calculate the area of a rectangle.
 *
 *   length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the rectangle's area.
 **/

const getArea = (length, width) => {
    let area;
    area = length * width;
    return area;
};

/**
 *   Calculate the perimeter of a rectangle.
 *
 *	length: The length of the rectangle.
 *   width: The width of the rectangle.
 *
 *	Return a number denoting the perimeter of a rectangle.
 **/
const getPerimeter = (length, width) => {
    let perimeter;
    perimeter = 2 * (length + width);
    return perimeter;
};

getArea(3, 4.5);
getPerimeter(3, 4.5);
