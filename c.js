let n, i, j, r;
n = 6;
for (i = 1; i < n; i++) {
    r = " ";
    for (j = 1; j <= i; j++) {
        r += "*" + " "
    }
    console.log(r);
}

console.log("\n//------how works\n");

for (i = 1; i < n; i++) {
    r = " ";
    for (j = 1; j <= i; j++) {
        r += "*" + " "
        console.log(j);
    }
    console.log(r);
}

console.log("\n//------if print inner\n");


for (i = 1; i < n; i++) {
    r = " ";
    for (j = 1; j <= i; j++) {
        r += "*" + " "
        console.log(r);
    }
}

console.log("\n//------how works\n");

for (i = 1; i < n; i++) {
    r = " ";
    for (j = 1; j <= i; j++) {
        r += "*" + " "
        console.log("i = " + i, "j = " + j, "r = " +
            r);
    }
}