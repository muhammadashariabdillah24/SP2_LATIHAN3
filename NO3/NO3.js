function arrayToObject(arr) {

    let date = new Date()
    let data1 = date.getFullYear() - arr["1 . Abduh Muhammad "][3]
    let data2 = date.getFullYear() - arr["2 . Ahmad Taufik "][3]

    let people1 = {
        firstName : arr["1 . Abduh Muhammad "][0],
        lastName : arr["1 . Abduh Muhammad "][1],
        gender : arr["1 . Abduh Muhammad "][2],
        age : data1
    }

    let people2 = {
        firstName : arr["2 . Ahmad Taufik "][0],
        lastName : arr["2 . Ahmad Taufik "][1],
        gender : arr["2 . Ahmad Taufik "][2],
        age : data2
    }

    console.log('1 . Abduh Muhammad : ', people1);
    console.log('\n')
    console.log('2 . Ahmad Taufik : ', people2)
}

var people = {
    "1 . Abduh Muhammad " : [
        "Abduh",
        "Muhammad",
        "male",
        1992,
    ],
    "2 . Ahmad Taufik " : [
        "Ahmad",
        "Taufik",
        "Male",
        1985
    ]
}


arrayToObject(people)