/**
 * Created by max on 21.06.15.
 */
var obj = {
    className: 'open size open open width'
};

function removeClass(obj, cls) {

    var arr = obj.className.split(' ');

    for (var i = 0; i <arr.length; i++) {

        if (arr[i] == cls) {

            arr.splice(i,1);
            i--;
        }
    }

    obj.className = arr.join(' ');

}

removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений

console.log(obj);