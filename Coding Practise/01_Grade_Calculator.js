let data = 85;
if (data > 100 || data < 0) {
    console.log("Invalid score");
}
else if (data >= 90) {
    console.log("A");
}
else if (data >= 80 && data <90) {
    console.log("B");
}
else if (data >= 70 && data < 80) {
    console.log("C");
}
else if (data >= 60 && data < 70) {
    console.log("D");
}
else if (data <60) {
    console.log("F");
}