// 재귀함수를 사용하여 배열의 모든 순열을 생성하고 출력하는 함수
function permuteArray(arr, l, r, count) {
    if (l === r) {
        document.write(arr.join(" ") + "<br>");
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

//arr = prompt("배열을 입력하세요").split(" ");
arr = [1, 2, 3, 4, 5];
let count = { value: 0 };
permuteArray(arr, 0, arr.length - 1, count);
document.write("총 개수: " + count.value + "<br>");
