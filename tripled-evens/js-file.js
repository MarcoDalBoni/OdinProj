const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

document.getElementById("perform").addEventListener('click', () => {

    const result = array.filter((num) => num % 2 === 0)
                        .map((num) => num * 3)
                        .reduce((total, curItem) => total += curItem, 0);
    console.log(result);
})