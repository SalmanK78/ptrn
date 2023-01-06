let n, i, j, r;
n = 5;

console.log("\n");

for (i = 1; i < n; i++) {
    r = " ";
    for (j = i; j <= n; j++) {
        r += "*" + " "
    }
    console.log(r);
}
for (i = 0; i < n; i++) {
    r = " ";
    for (j = 0; j <= i; j++) {
        r += "*" + " "
    }
    console.log(r);
}
console.log("\n");

for (i = n; i >= 1; i--) {
    r = " ";
    for (j = 1; j <= i; j++) {
        r += "*" + " "
    }
    console.log(r);
}
for (i = 0; i < n; i++) {
    r = " ";
    for (j = 0; j <= i; j++) {
        r += "*" + " "
    }
    console.log(r);
}
console.log("\n");