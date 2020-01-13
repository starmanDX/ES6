var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
    return array.reduce(function (prev, item) {
        var flag = prev.find(function (prevNumber) {
            return prevNumber === item;
        });
        if (!flag) {
            prev.push(item);
        }
        return prev;
    }, []);

}
unique(numbers);