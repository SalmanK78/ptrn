let n, i, j, r;
n = 5;
for (i = 0; i < n; i++) {
    r = " ";
    for (j = 1; j <= i; j++) {
        r += i + " "
    }
    console.log(r);
}
for (i = n; i >= 1; i--) {
    r = " ";
    for (j = 1; j <= i; j++) {
        r += j + " "
    }
    console.log(r);
}
for (i = 0; i < n; i++) {
    r = " ";
    for (j = 1; j <= i; j++) {
        r += "s+k" + " "
    }
    console.log(r);
}
for (i = n; i >= 1; i--) {
    r = " ";
    for (j = 1; j <= i; j++) {
        r += "s+k" + " "
    }
    console.log(r);
}
for (i = 0; i < n; i++) {
    r = " ";
    for (j = 1; j <= i; j++) {
        r += "*" + " "
    }
    console.log(r);
}
for (i = n; i >= 1; i--) {
    r = " ";
    for (j = 1; j <= i; j++) {
        r += "*" + " "
    }
    console.log(r);
}