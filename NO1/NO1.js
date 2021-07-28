funObjek = (param1,param2,param3,param4,param5) => {
    let fasilitasPondokIT = {

        Wifi : ['Pondok Pro 1','Pondok Pro 2','Pondok Pro 3','Pondok Pro 4'],
        Motor : ['Kharisma','Revo'],
        namaMentor : ['Mas David','Mas Wandi','Master Jujun'],
        merkLaptop : ['Asus','Lenovo','Acer'],
        merkGalon : ['Aqua','SMS','LeMinerale']
    }

    let printObjekWifi = fasilitasPondokIT.Wifi[param1]
    let printObjekMotor = fasilitasPondokIT.Motor[param2]
    let printNamaMentor = fasilitasPondokIT.namaMentor[param3]
    let printMerkLaptop = fasilitasPondokIT.merkLaptop[param4]
    let printMerkGalon = fasilitasPondokIT.merkGalon[param5]
    
    document.write('Nama Wifi : ' + printObjekWifi)
    document.write('<br>')
    document.write('Nama Motor : ' + printObjekMotor)
    document.write('<br>')
    document.write('Nama Mentor : ' + printNamaMentor)
    document.write('<br>')
    document.write('Nama Laptop : ' + printMerkLaptop)
    document.write('<br>')
    document.write('Nama Galon : ' + printMerkGalon)
}

let PromptWifi = prompt('Nama wifi : Pondok Pro 1/Pondok Pro 2/Pondok Pro 3/Pondok Pro 4');
let PromptMotor = prompt('Nama Motor : Kharisma/Revo');
let PromptMentor = prompt('Nama Mentor : Mas David/Mas Wandi/Mas Jujun');
let PromptLaptop = prompt('Nama Laptop : Asus/Lenovo/Acer');
let PromptGalon = prompt('Nama Galon : Aqua/SMS/LeMinerale')

let Wifi;
let Motor;
let Mentor;
let Laptop;
let Galon;

if(PromptWifi == 'Pondok Pro 1'){
    Wifi = 0;
} else if(PromptWifi == 'Pondok Pro 2'){
    Wifi = 1;
} else if(PromptWifi == 'Pondok Pro 3'){
    Wifi = 2;
} else if(PromptWifi == 'Pondok Pro 4'){
    Wifi = 3;
} else {
    Wifi = Math.random() * 3;
    Wifi = Math.ceil(Wifi)
}

if(PromptMotor == 'Kharisma'){
    Motor = 0;
} else if(PromptMotor == 'Revo'){
    Motor = 1;
} else {
    Motor = Math.random() * 1;
    Motor = Math.ceil(Motor)
}

if(PromptMentor == 'Mas David'){
    Mentor = 0;
} else if(PromptMentor == 'Mas Wandi'){
    Mentor = 1;
} else if(PromptMentor == 'Mas Jujun'){
    Mentor = 2;
} else {
    Mentor = Math.random() * 2;
    Mentor = Math.ceil(Mentor)
}

if(PromptLaptop == 'Asus'){
    Laptop = 0;
} else if(PromptLaptop == 'Lenovo'){
    Laptop = 1;
} else if(PromptLaptop == 'Acer'){
    Laptop = 2;
} else {
    Laptop = Math.random() * 2
    Laptop = Math.ceil(Laptop)
}

if(PromptGalon == 'Aqua'){
    Galon = 0;
} else if(PromptGalon == 'SMS'){
    Galon = 1;
} else if(PromptGalon == 'LeMinerale'){
    Galon = 2
} else {
    Galon = Math.random() * 2
    Galon = Math.ceil(Galon)
}

funObjek(Wifi,Motor,Mentor,Laptop,Galon)