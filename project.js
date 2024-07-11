let uniquePermutations = new Set();

function permuteArray(arr, l, r, count) {
    if (l === r) {
        uniquePermutations.add(arr.join(" "));
        count.value++;
    } else {
        for (let i = l; i <= r; i++) {
            swap(arr, l, i);
            permuteArray(arr, l + 1, r, count);
            swap(arr, l, i);
        }
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

let arr = prompt("배열을 입력하세요").split(" ");
let count = { value: 0 };
permuteArray(arr, 0, arr.length - 1, count);

let uniquePermutationsArray = Array.from(uniquePermutations);
for (let perm of uniquePermutationsArray) {
    document.write(perm + "<br>");
}
document.write("총 개수 (중복된 수열까지 포함): " + count.value + "<br>");
