





























// let demo = document.getElementById('demo');
// let btn = document.getElementById('btn');
// btn.onclick = function() {
//     demo.innerHTML = 'salom';
// }
// var btn = document.getElementById('btn');
// var body = document.querySelector('body');
// btn.onclick = function() {
//     body.style.backgroundColor = 'red';
// }
// var open = document.getElementById('open');
// var panel = document.getElementById('panel');
// var open2 = document.getElementById('open2')
// open.onclick = function() {
//     panel.style.left = '0'
// }
// open2.onclick = function() {
//     panel.style.left = '-100%';
// }

//  var temp = prompt('havo haroratini kiritng');
//  if(temp > 20){
//      alert('havo harorati issiq');
//  }
// else {
//      alert('hava harorati sovuq');
//  }
//  var baho = prompt('neci baho olding')
//  if( baho == 5){
//      alert('sanga shokalat')
//  } else if(baho == 4) {
//      alert('yaxshi')
//  } else {
//      alert('shapaloq')
//  }
//  var price = prompt('yoshizni kiriting')
//  if(price < 18) {
//      alert('sizga ushbu konsertga kirish narxi 10 000 som');
//  } else if(price > 18 &&   price < 35) {
//      alert('sizga ushbu konsertga kirish narxi 30 000som')
//  }
//  else {
//      alert('sizga ushbu konsertga kirish narxi 25 000som')
//  }
//  var a = prompt(' 2 + 2 neci?');
//  switch(+a) {
//      case 4:
//          alert('togri');
//          break;
//          case 3:
//              alert('sal kamroq');
//              break;
//              case 5:
//                  alert('sal koproq')
//                 break;
//                 default:
//                     alert('umunan yaqinlashmadiz');
//                     break;
//  }
 



// var pas = prompt('parol kiriting')
// if(pas == 'pass1' || pas == 'pass2') {
//     alert('welcome')
// }
// else {
//     alert('error')
// }







// let temp = prompt('havo harorati neca gradus')
// if( temp  > 20){
//     alert('havo issiq')
// }
// else {
//     alert('havo harorati sovuq')
// }
// let yosh = prompt('yoshizni kiriting')
// if(yosh < 18) {
//     alert('sizga ushbu konsertga kirish narxi 10 000som')
// } else if(yosh > 18 && yosh < 35) {
//     alert('sizga konsertga kirish narxi 30 000som')
// }else if( yosh > 35 && yosh < 50) {
//     alert('sizga konserga kirish narxi 35 000som')
// }else {
//     alert('sizga konsertga kirish narxi 40 000som')
// }




// var hafta = prompt('hafta kunlarini raqam orqali kiritng')
// if( hafta == 1) {
//     alert('dushanba')
// } else if(hafta == 2) {
//     alert('seshanba')
// } else if(hafta == 3) {
//     alert('chorshanba')
// } else if(hafta == 4) {
//     alert('payshanba')
// } else if(hafta == 5) {
//     alert('juma')
// }else if(hafta == 6) {
//     alert('shanba')
// } else if (hafta == 7){
//     alert('yakshanba')
// }else {
//     alert('xato kun kiritiz')
// }

// var addNum = prompt('2 + 2 neci?')
// switch(+addNum) {
//     case 3:
//         alert('sal kamroq')
//         break;
//         case 5: 
//         alert('sal koproq')
//         break;
//         case 4:
//             alert('togri javob')
//             break;
//             case 2:
//                 alert('juda kam')
//                 break;
//             default: 
//             alert('umuman yaqinlashmadiz')
//             break;
// }
// var a = prompt('ayol yoki erkak iltimos kiriting')
// switch(a) {
//     case "ayol":
//         alert('ayol kishi ekan')
//         break;
//         case "erkak":
//             alert('erkak kishi ekan')
//             break;
//             default:
//                 alert('xato')
//                 break;
// }
// var a = prompt('kvartira xarid qilish uchun sizga 1 xinaki kvartiya kerak bolsa 1, 2 xonali kerak bolsa 2 bosing 3xonali kerak bolsa 3 bosinig')
// if( a == 1) {
//     var b = prompt('qaysi xudud kerak 1toshkent 2 toshkent viloyati')
//     if(b == 1){
//         alert("cilonzor tumani  21 kvartil 4 dom")
//     } else if(b == 2) {
//         alert('toshkent viloyati Buka tumani')
//     } else {
//         alert('faqat toshkent va toshkent viloyatida 1 xonali kvartirya bor')
//     }
// } else if( a == 2) {
//     var c = prompt('qaysi xudud kerak 1toshkent 2 toahkent viloyati')
//     if(c == 1) {
//         alert('toshkent cilonzor tumani 32 kvartil')
//     } else if(c == 2) {
//         alert ('toshkent viloyati yangi yul tumani')
//     } else {
//         alert('faqat toshkent va toshkent viloyatida 2 xonali kvartirya bor')
//     }
// } else if(a == 3) {
//     var d = prompt('qaysi xudud kerak 1toshkent 2 toahkent viloyati')
//     if(d == 1) {
//         alert('toshkent sergili 3 bekat yonida ')
//     } else if(d == 2) {
//         alert('toshkent viloyati Piskent tumani')
//     } else {
//         alert('faqat toshkent va toshkent viloyatida 3 xonali kvartirya bor')
//     }
// }
// else {
//     alert('faqat 1 va 2 va 3 xonali kvartiriyalr mavjud')
// }

// var pass = 4444;
// var summa = 20000;
// var pr1 = prompt('iltimos carta parolini kiriting')
// if(pr1 == pass) {
//     var pr2 = prompt('1 balans, 2pul yechish, 3 bank manzillari');
//     if(pr2 == 1){
//         alert(summa)
//     } else if(pr2 == 2) {
//         var pr3 = prompt('1 2000, 2 3000, 3 5000, boshqa summa uchun 4 bosing')
//         if(pr3 == 1) {
//             alert(summa - 2000)
//         } else if(pr3 == 2) {
//             alert(summa - 3000)
//         } else if (pr3 == 3) {
//             alert(summa - 5000)
//         } else if(pr3 == 4) {
//             var pr4 = prompt('qancha summa yechmoqcisiz');
//             alert(summa - pr4)
//         }
//     } else if(pr2 == 3) {
//         var pr5 = prompt('1 toshkent, 2 toshkent viloayti, 3 Andijon, 4 Fargona, 5 Namangan, 6 Sirdaryo, 7 Jizzax, 8 Samarqand, 9 Qahqadaryo')
//         if(pr5 == 1) {
//             alert('toshkent shaxar cilonzor tumani shuxrat choraxasida')
//         } else if( pr5 == 2) {
//             alert('toshkent viloyati Buka tumani Bobur kuchada')
//         } else if(pr5 == 3){
//             alert('Andijon viloyati Asaka tumani')
//         } else if(pr5 == 4) {
//             alert('Fargona viloyati ')
//         } else if(pr5 == 5) {
//             alert('Namangan viloati gullar shaxrida')
//         } else if(pr5 == 6) {
//             alert('Sirdaryo tumani Guliston shaxrida')
//         } else if(pr5 == 7) {
//             alert('Jizzax viloyati Zomin tumanida')
//         } else if(pr5 == 8) {
//             alert('Samarqand viloyati Urgut tumanida')
//         } else if(pr5 == 9) {
//             alert('Qahqadaryo viloyati ciroqci tumani')
//         } else {
//             alert('bizning bank 9 ta mavjud')
//         }
//     } else {
//         alert('faqat bizlarda 3 xizmat kursatishimiz bor')
//     }
// }else {
//     alert('karta paroli notugri')
// }



// let yosh = prompt("Yoshingiz nechada?");
// if (yosh < 7) {
//     alert("Sizga ushbu hayvonot bog'iga kirish bepul");

// }else if (yosh > 7 && yosh < 14) {
//     alert("Sizga ushbu hayvonot kirish narxi 10 000 so'm");
// } else if (yosh > 14 && yosh < 18) {
//     alert("Sizga ushbu hayvonot kirish narxi 15 000 so'm");
// } else if(yosh > 18 && yosh < 20 ) {
//     alert("Sizga ushbu hayvonot kirish narxi 18 000 so'm")
// } else{
//     alert("Yaxshi hordiq tilaymiz!!!")
// }

// for(var i = 0; i < 5; i++) {
//     alert(i)
// }
// for(var i = 0; i < 10; i++) {
//     if(i % 2) {
//         alert(i)
//     }
// }

// for(var i = 0; i < 5; i++) {
//     if(i === 3)break;
//     alert(i)
// }

// for(var b = 0; b < 20; b++) {
//     if(b % 3 === 0) continue;
//     alert(b)
// }
// var i = 0;
// while( i <= 5){
//     alert(i);
//     i++
// }
// var i = 3;
// do {
//     alert(i);
//     i--
// } while (i === 0)
// alert(i)
//   Object
// literalniy  yuli
// var car = {
//     name: 'f90',
//     color: 'red',
//     speed: 400,
//     model: "ferrari",
// }
// alert(car.speed)
// alert(car['model'])
// alert chaqirishni 1 yuli alert(car.speed)
// alert chaqirishni 2 yuli alert(car['name'])
       

            // 2 Konstructor yuli
// var  phone = new Object();
// phone.color = 'gold';
// phone.brand = 'apple';
// phone.model = '14pro max';
// alert(phone.color)
// alert(phone['model'])
                // 3 function
// function car(model, speed, color,) {
//     this.model = model;
//     this.speed = speed;
//     this.color = color;
// } 
// var a = new car('tesle', '300', 'red');
// console.log(a)


// for(var i = 0; i < 3; i++){
//     alert(i)
// }
// for(var i = 0; i < 10; i++) {
//     if(i % 2) {
//         alert(i)
//     }
// }
// for(var a = 4; a <= 7; a++) {
//     alert(a)
// }
// for(var i = 0; i <= 7; i++) {
//     if(i === 3) break; //tanafus, toxtab qolish
//     alert(i)
// }
// for(var i = 0; i < 7; i++){
//     if(i === 4) continue;
//     alert(i)
// }
// for(var i = 0; i < 5; i++){
//     for(var a = 0; a < 6; a++) {
//         console.log(a)
//     }
//     console.log(i)
// }

// var i = 0;
// while( i < 10) {
//     alert(i)
//     i++
// }

// var i = 3;
// do{
//     alert(i)
//     i--
// }while (i === 0);
// alert(i);
 


                     // Ubject -> obekt

                     //literalny yuli
// var user = {
//     name: "Jo'rabek",
//     age: 17,
// }
// alert(user.name); // alert ciqarishi 1 yoli
// alert(user['age']) // alert ciqairshni 2 yuli


// var phone = {
//     model: 'samsung',
//     year: 2020,
//     color: 'blue',
//     xotira: '64gb',
//     nomi: 'a12',
// }
// alert(phone.model)
// alert(phone.year)
// alert(phone.color)
// alert(phone.xotira)
// alert(phone.nomi)

            //Konsturktor yuli
// var house = new Object();
// house.year = '2010',
// house.height = '12 metr',
// house.weght = '4',
// house.color = 'brown',
// house.window = 2,
// alert(house.color)
// alert(house['window'])
                // Function
// function car(speed, brend, name, year) {
//     this.speed = speed
//     this.brend = brend
//     this.name = name
//     this.year = year
// } 
// var a = new car(350, 'tesla', 'madel Y', '2023')
// alert(a.year)
// alert(a["speed"])






// var i = 0;
// while(i < 10) {
//     alert(i)
//     i++
// }
// var i = 3;
// do{
//     alert(i)
//     i--;
// } while (i === 0);
// alert(i);
                    //OBject
                    // 1 Literalny yuli
                     
// var user = {
//     name: "Jo'rabek",
//     age: 17,
//     home: 'maktabni orqasida',
// }
// alert(user.home)   // alert chaqririshni 1 yuli
// alert(user['name'])   // alert chaqirishni 2 yuli



// var phone = {
//     model: 'iphone',
//     age: 2023,
//     name: "15pro max",
//     ram: '1tr',
//     color: 'gold',
// } 
// alert(phone.model)
// alert(phone.age)
// alert(phone['name'])
// alert(phone['ram']);
// alert(phone.color)


                     // 2 Konsturktor yuli
// var car = new Object()
// car.brend = 'BMW',
// car.speed = 360,
// car.color = 'red',
// car.price = ' 100.000$',
// car.name = 'M5'

// alert(car.brend)
// alert(car.speed)
// alert(car.color)
// alert(car.price)
// alert(car.name)

// function person(hands){
// this.hands = hands
// }
// var a = new person(2)
// alert(a.hands)

// function person(head, eye, ear, nose) {
//     this.head = head
//     this.eye = eye
//     this.ear = ear
//     this.nose = nose
// }

// var odam = new person('miya', 'nur', 'quloq', 'nafas')
// alert(odam.head)



// for(var i = 0; i <= 10; i++){
//     alert(i)
// }
// for(var i = 0; i <= 15; i++){
//     if(i % 2 === 0) {
//         console.log(i)
//     }
// }

// for( var a = 0; a < 10; a++) {
//     if(a === 6) break // toxtaib quyish loopni
//     console.log(a)
// }

// for(var i = 0; i < 10; i++) {
//     if(i === 7) continue 
//     console.log(i)
// }
// var i = 0;
// while( i < 10) {
//     alert(i)
//     i++
// }
// var i = 1;
// var n = 5;
// do{
//     console.log(i)
//     i++
// }while(i <= n)




           // Object
        // 1 letiralny uslugi

// var car = {
//     model: 'BMW',
//     speed: 360,
//     color: 'black',
//     price: "70.000$",
//     kl: '1 tonna' 
// }
// alert(car.speed)
// alert(car.color)
// alert(car['kl'])
      //  2 Konstructor yuli
// var laptap = new Object()
// laptap.year = 2022,
// laptap.brend = 'hp',
// laptap.price = '600$',
// alert(laptap.brend)

          // 3 function
// function iphone(brend, name, color, year, xotira) {
//     this.brend = brend
//     this.name = name
//     this.color = color
//     this.year = year
//     this.xotira = xotira
// }
// var apple = new iphone('apple',  'gold', '11 pro', '2019', '128gb');
// console.log(apple)






// var car = {
//       brend: 'tesla',
//       speed: 380,
//       year: 2022,
// }
// console.log(car)
// delete car.speed;
// delete car.year
// console.log(car)


// var phone = {
//       brend: 'samsung',
//       year: 2023,
//       name: 's23',
// }

// console.log('name' in phone)
// console.log('color' in phone)
// console.log('brend' in phone)

// var home = {
//       color: 'white',
//       room: 5,
//       location: 'Buka'
// }
// for( var key in home) {
//       console.log(key)
//       // color
//       // room
//       // location
// }

// var codes = {
//       "+49": 'Germany',
//       "+41": 'Switserland',
//       "+44": "Great Britain",
//       "+998": 'Uzbekistan',
//       "+1": 'Use',
// }
// for( var code in codes) {
//       console.log(code)
// }
// var user = {
//       name: 'Jorabek',
//       age: 17,
// }
// Object.freeze(user)
// console.log(user)
// user.year = 2006;
// console.log(user)
// delete user.age
// console.log(user)
// var user = {
//       name: 'Javokhir',
//       age: 17,
// }
// console.log(user)
// Object.seal(user)
// user.name = 'Shahnoza',
// user.age = 16,
// console.log(user)
// user.job = 'trading',
// console.log(user)

// var a = 'salom';
// var b = a
// alert(b)

// var user = {
//       name: 'Jorabek',
//       age: 17
// }
// var admin = user
// console.log(admin)
// console.log(user)


// var user = {
//       name: "Jo'rabek",
//       age: 17
// }
// var a = user
// console.log( a == user)
// console.log(user == a)



// var user2 = {
//       name: 'Javokhir',
//       age: 17,
// }
// var user3 = {
//       name: 'Javokhir',
//       age: 17,
// }
// console.log(user2 == user3)
// console.log(user3 == user2)

// var a = 450;
// alert(a)

// var  num = 255
// alert(num.toString(16))
// alert(num.toString(2))

// var names = ['Javokir', 'Farrux', 'Umid','Adtham', 'Javokhir', 'Xusan', 'Xurshid', 'Rano', 'Nihola', 'Dildora', 'Shahnoza', 'Jorabek'];
// var any = Math.floor(Math.random() * names.length);
// alert(names[any] +  " 14 pro max soxibi tabriklaymiz")

 // Math.floor() - sonlarni yani o'nli sonlarni yahlitlab beradi
 // Math.random() - 0 dan 1 gacham bolgan sonlarni cqazb beradi


//  var names = ['Shoxrux', 'Dilfuza', 'Sarvinoz', 'Marjona', 'Fazlidin', 'Azamat', 'Ozodbek', 'Sherzod', 'Uktambek', 'Gulbahor', 'Rayhon', 'Dilfuza2', 'Hilola', 'Fotima', 'Shaxlo', 'Jorabek'];
//  var any = Math.floor(Math.random() * names.length);
//  alert(names[any] + ' 14pro max golibi gapda');
  // Math.floor() - sonlarni yani o'nli sonlarni yahlitlab beradi
 // Math.random() - 0 dan 1 gacham bolgan sonlarni cqazb beradi

//  var names = ['Marjona', 'Munisa', 'Sojida', 'Pokiza', 'Shoh', 'Admin', 'Umida', 'Islombek','Nodirbek', 'Otabek','Latifjon','Kamronbek', 'Jorabek'];
//  var any = Math.floor(Math.random() * names.length) 
//  alert(names[any] + " 14pro max golibi faqat gapda")


// var names = ['Hamidjon', 'Kamronbek', 'Sardor', 'Sanjar', 'Azizbek', 'Zohidjon', 'Aslbek','Zarnigor', 'Nasiba', 'Islombek', 'Muhammadjon', 'Suhrob', 'Jorabek'];
// var any = Math.floor(Math.random() * names.length)
// alert(names[any] + " siz 14pro max yutib oldiz gapda")
// Math.floor() - sonlarni yani o'nli sonlarni yahlitlab beradi
 // Math.random() - 0 dan 1 gacham bolgan sonlarni cqazb beradi











//  var demo = document.getElementById('demo')
//  var  btn = document.getElementById('btn')
//  btn.onclick = function() {
//       demo.innerHTML = Date();
//  }


// function upperCase() {
//       var x = document.getElementById('fname')
//       x.value = x.value.toUpperCase();
// }
// function lowerCase() {
//       var a = document.getElementById('lname')
//       a.value = a.value.toLowerCase();
// }






// var user = {
//       name: "Jo'rabek",
//       age: 17,
// }
// console.log(user)
// user.year = 2006;
// user.life = 'Buka';
// console.log(user)

// var user =  {
//       name: "Shoxrux",
//       age: 16,
//       year: 2007,
// }
// console.log(user)
// delete user.year;
// delete user.name;
// console.log(user)




// var user = {
//       name: 'Shahlo',
//       age: 17,
//       year: 2006
// }
// console.log( "name" in user)
// console.log('color' in user)
// console.log('age' in user)
// console.log('brend' in user)

// var user = {
//       name: 'Fotima',
//       age: 17,
//       year: 2006,
// }
// for(var key in user) {
//       console.log(key)
// }

// var user = {
//       name: 'Dilfuza',
//       age: 16,
//       year: 2007,
// }

// Object.seal(user)
// console.log(user)
// user.color = 'red';
// delete user.age
// console.log(user)
// user.name = 'Jorabek'   
// user.age = 17
// console.log(user)


// var user  = {
//       name: 'Jorabek',
//       age: 17
// }
// var admin = user
// console.log(admin == user)
// console.log(user == admin)









// var user = {
//       name: 'Jorabek',
//       age: 17,
//       year: 2006
// }
// console.log('age' in user)
// console.log('color' in user)
// console.log('name' in user)

// var user = {
//       name: 'Kamronbek',
//       age: 14,
//       year: 2009
// }
// for( var key in user) {
//       console.log(key)
// }
// var code = {
//       "+49": "Germany",
//       "+41": "Switzerland",
//       "+44": "Great Britain",
//       "+998": 'UZB',
//       "+1": 'USA',
// }
// for(var key in code) {
//       console.log(+key)
// }


// var user = {
//       name: 'Latif',
//       age: 19,
// }
// Object.freeze(user);
// console.log(user);
// user.color = 'blue';
// console.log(user);
// delete user.name;
// console.log(user);

// var user = {
//       name: 'Otabek',
//       age: 18,
// }
// Object.seal(user)
// console.log(user)
// user.year = 2005;
// delete user.age;
// console.log(user)
// user.name = 'Jorabek';
// user.age = 17,
// console.log(user)










// var user = {
//       name:"Jo'rabek",
//       age: 17
// }
// console.log(user)
// user.year = 2006
// user.life = 'Buka'
// console.log(user)


// var user = {
//       name: "Jo'rabek",
//       age: 17,
//       year: 2006,
// }
// console.log("name" in user)
// console.log("color" in user)
// console.log('age' in user)

// var user = {
//       name: 'Suxrob',
//       age: 15,
//       job: 'student',
// }
// for( var key in user) {
//       console.log(key)
// }

// var user = {
//       name: 'Hamidjon',
//       age: 15,
// }
// Object.freeze(user)
// console.log(user)
// user.year = 2008;
// console.log(user)
// delete user.age;
// console.log(user)

// var user = {
//       name: "Kamronbek",
//       age: 16,
//       year: 2007,
// }
// Object.seal(user)
// console.log(user)
// user.job = 'student';
// delete user.name
// user.name = "Jo'rabek";
// user.age = 17
// console.log(user)

// var messange = 'hello';
// var a = messange;
// alert(messange)

// var user = {
//       name: 'Islombek',
//       age: 16,
// }
// var user2 = user;
// var user3 = '';
// console.log(user2 == user)
// console.log(user == user2)
// console.log(user == user3)

// var car = {
//       brend: 'BMW',
//       speed: 360,
//       color: 'black',
// }
// var phone = {
//       brend: 'apple',
//       name: 'xs',
//       color: 'gold'
// }
// Object.assign(car, phone)
// console.log(car.color)
// console.log(phone.name)




// var btn = document.getElementById('btn')
// var demo1 = document.getElementById('demo1')
// var demo2 = document.getElementById('demo2')

// function fun1() {
//       alert('hello world');
// }
// function fun2() {
//       demo1.innerHTML = 'function2';
// }
// function fun3() {
//       demo2.innerHTML = 'function3';
// }
// btn.addEventListener('click', fun1)
// btn.addEventListener('click', fun2)
// btn.addEventListener('click', fun3)


// var btn = document.getElementById('btn')
// var demo1 = document.getElementById('demo1')

// function fun1() {
//       btn.style.width = '50px';
//       btn.style.height = '50px';
//       btn.style.backgroundColor = 'blue';
//       btn.style.color = 'red';
// }
// function fun2() {
//       demo1.innerHTML = 'hello world';
// }
// function fun3() {
//       btn.style.width = '';
//       btn.style.backgroundColor ='';
//       btn.style.height = ''
//       btn.style.color = '';
// }
// btn.addEventListener('mouseover', fun1)
// btn.addEventListener('click', fun2)
// btn.addEventListener("mouseout", fun3)

// var btn = document.getElementById('btn')
// var demo1 = document.getElementById('demo1')

// function fun1() {
//       demo1.innerHTML += ' Moused over! <br>';
// }
// function fun2() {
//       demo1.innerHTML += ' Clicked! <br>';
// }
// function fun3() {
//       demo1.innerHTML += ' Moused out! <br>';
// }
// btn.addEventListener('mouseover', fun1)
// btn.addEventListener('click', fun2)
// btn.addEventListener('mouseout', fun3)
// var btn = document.getElementById('btn');
// var demo1 = document.getElementById('demo1');

// function fun1() {
//       alert('hello world');
// }
// function fun2() {
//       demo1.innerHTML = 'salom';
// }
// btn.addEventListener('dblclick', fun1);
// btn.addEventListener('dblclick', fun2);

// function validate() {
//       var msg
//       if(document.myForm.userPass.value.length >5){
//             msg = 'good';
//       }else {
//             msg = 'little';
//       }
//       document.getElementById('mylocation').innerHTML = msg
// }

// var a = 1000000000;
// alert(a)

// var c = 1_000_000_000;
// alert(c)

// var b = 1e9;
// alert(b)


// var num = 12.25482565;
// console.log(num.toFixed(6));
// var num2 = 13.345;
// console.log(num2.toFixed());

// console.log(+ ('100px'));
// console.log(parseInt('1000px09'));

// var a = '15432e3221';
// console.log(parseInt(a));

// var a = '15.63551';
// console.log(parseInt(a));
// console.log(parseFloat(a));

// console.log(Math.random());
// console.log(parseInt(Math.random() * 10)); // 0 to 9
// console.log(Math.round(Math.random() * 10)); // 0 to 10


// var name = "Jo'rabek";
// var age = 17;
// console.log(`my names is ${name} and I'm ${age} year old`)


// var yosh = prompt('yoshizni kiriting')
// console.log(`siz ${2023 - yosh} yilda tugilgan ekansiz`)


// var name = "Jorabek Gulyora Fotima Sarvinoz";
// console.log(name.length) // string -> uzunligini bilish uchun


// var name = 'Jorabek';
// for(var item in name) {
//       console.log(item)
//       //j -> 0
//       //o -> 1
//       //r -> 2
//       //a -> 3
//       //b -> 4
//       //e -> 5
//       //k -> 6
// } 
// var name = 'JoraBEk';
// console.log(name.toLowerCase()) // matni kichkina yozuvlarda qilib bereadi
// console.log(name.toUpperCase()) // matni kotta harflarda qillib beradi


// var name = prompt('matni kiriting')
// console.log(name.toUpperCase())

//  var name = prompt('harf kiritng');
//  console.log(name[0].toUpperCase() + name.slice(1,).toLowerCase());





// console.log(+ ('100px'));
// console.log(parseInt('10200px09'))


// var a = '1543e342';
// console.log(parseInt(a))

// var num = '12.54334';
// console.log(parseInt(num)) // 12
// console.log(parseFloat(num)) // 12.54334

// console.log(parseInt(Math.random() * 10000)) // 0 to 9
// console.log(Math.round(Math.random() * 10000)) // 0 to 10

// var name = "Jo'rabek";
// var age  = 17;
// console.log(`My name is ${name} my age ${age}`);
// console.log('My name is ' + name + " my age " +  age);




// var a = 1000000000;
// console.log(a)
// var b = 1_000_000_000;
// console.log(b)
// var c = 1e9;
// console.log(c)


// var num = 12.56248956;
// console.log(num.toFixed(4))

// console.log(+ ('100px'))
// console.log(parseInt('100px343'))
// var num = '123e43';
// console.log(parseInt(num))

// var a = '12.23';
// console.log(parseInt(a)); // 12
// console.log(parseFloat(a)); //12.23


// console.log(Math.random())
// console.log(parseInt(Math.random() * 10)) // 0 to 9
// console.log(Math.round(Math.random() * 10)) // 0 to 10
// console.log('salom "It academy" salom')
// console.log("salom 'It academy' salom")


// var name = "Jo'rabek";
// var age = 17;
// console.log(`My name is ${name} age ${age}`)
// console.log("my name is " + name + " age " + age)


// var age = prompt('yoshizni kiriting')
// console.log(`sizning tugilgan yiliz ${2023 - age}`)
// var name = "Jorabek";
// var name2 = 'Nasiba';
// console.log(name2.length)
// console.log(name.length)




// var  a = 1000000000;
// console.log(a);
// var b = 1_000_000_000;
// console.log(b);
// var c = 1e9;
// console.log(c);

// var num = 15.5455;
// console.log(num.toFixed(2))

// console.log( + ('100px'));
// console.log(parseInt('100px'));
// var a = '109e12';
// console.log(parseInt(a));
// var a = '14.545';
// console.log(parseInt(a))  // 14
// console.log(parseFloat(a)) // 14.545

// console.log(Math.random())
// console.log(parseInt(Math.random() * 10)) //  0 to 9
// console.log(Math.round(Math.random() * 10)) // 0 to 10

// console.log('salom "It academy" salom')
// console.log("salom 'It academy' salom")
// var name = 'Jorabek';
// var age = 17
// console.log(`my name is ${name} my age ${age}`)
// console.log('My name is ' + name + ' my age ' + age)


// var name = 'Jorabek';
// var name2 = 'Adhambek';
// console.log(name2.length);
// console.log(name.length);
// var pr = prompt('matn yozing')
// console.log(pr.length)

// var name = 'Shahnoza';
// for(var item of name) {
//       console.log(item)
   
// }


// var name = 'JoRaBek';
// console.log(name.toUpperCase()) // matni kotta qilish
// console.log(name.toLowerCase()) // matni kichik   qilish



// var demo = document.getElementById('demo')
// function hopde() {
//       demo.innerHTML = Date();
// }

// function upperCase() {
// var hopde = document.getElementById('hopde');
// hopde.value = hopde.value.toUpperCase()
// }

// gsap.from('header', {
//       y: -100,
//       duraction: 2,
//       delay: 1,
//       opacity: 0,
// });
// gsap.from('.li1', {
//       y: 30,
//       opacity: 0,
//       duraction: 2, 
//       delay: 1.5,
// });
// gsap.from('.li2', {
//       y: -30,
//       opacity: 0,
//       duraction: 2,
//       delay: 1.5,
// });
// gsap.from('.li3', {
//       x: 30,
//       opacity: 0,
//       duraction: 2,
//       delay: 2,
// });
// gsap.from('.li4', {
//       x: -30,
//       opacity: 0,
//       duraction: 2,
//       delay: 2,
// });
// gsap.from('.li5', {
//       y: -30,
//       opacity: 0,
//       duraction: 3,
//       delay: 2.5,
// });
// gsap.from('.li6', {
//       y: 30,
//       opacity: 0,
//       duraction: 3,
//       delay: 2.5,
// });
// gsap.from('.row1', {
//       x: 100,
//       duraction: 4,
//       delay: 3,
//       opacity: 0,
// });
// gsap.from('.row3', {
//       x: -100,
//       duraction: 4,
//       delay: 3,
//       opacity: 0,
// });
// gsap.from('.row2', {
//       y: -100,
//       duraction: 4,
//       delay: 3.3,
//       opacity: 0,
// })
// gsap.from('p' ,{
//       delay: 4,
//       duraction: 4.5,
//       opacity: 0,
//       y: 20,

// })
                     // Object usuli
// var mevalar = {
//       1: 'Olma',
//       2: 'Kiwi',
//       3: 'Banan',
// }
// console.log(mevalar);

                  // Array usuli

// var mevala = ['Olma', 'Kiwi', 'Banan'];
// console.log(mevala[0].length)

// var num = [1,2,3,4,5,6,7];
// console.log(num.at(-4))

// var names = ['Shahlo', 'Gulyora', 'Fotima', 'Fazlidin'];
// console.log(names)
// names.shift() // shift() arrayni boshidan ma'lumot olib tashlaydi
// console.log(names)

// var names = ['Azamat', 'Ozodbek', 'Sherzod'];
// console.log(names);
// names.pop() // pop() arrayni oxirdan ma'lumot uchirib tashaydi;
// console.log(names)

// var names = ['Bob', 'James', 'Andrey'];
// console.log(names);
// names.unshift('Jorabek'); // unsheft() arrayni boshiga ma'lumot qushib beradi
// console.log(names);
// var mevalar = ['Olma', 'Kiwi', 'Banan', 'Anor', 'Olcha'];
// var meva = mevalar;
// console.log(meva === mevalar);
// meva.push('Shaftoli');
// console.log(mevalar)
// console.log(meva)

// var fruits = ['Apple', 'Orange', 'Pear'];
// for(var i = 0; i < fruits.length; i++) {
//       console.log(fruits[i])
// }

// var  num  = [1,2,3,4, 'hello'];
// console.log(num.toString());
// var num2 = [1,2,3,4, 'hello'];
// console.log(num2);

// var num = [12,3,4,23,4, 'Jorabek'];
// console.log(num.join());
// console.log(num.join('-'));



// var str = 'Hello World coffee';
// console.log(str.split());
// console.log(str.split(""));
// console.log(str.split(" "));

//===============================================================


// var arr1 = ['Gulyora', 'Aziza', 'Shohnazar', 'Jorabek', 'Gulbahor', 'Fazlidin', 'Shahlo',];
// console.log(arr1.slice(0, 2));
// console.log(arr1[3].slice(0, 6));
// // =====================================================
// var arr2 = [1,2343,44,232,12,4, 'Bob'];
// console.log(arr2[6].slice(0, 2));


// var fruits = {
//       1: 'Apple',
//       2: 'Orange',
//       3: 'Banana',
//       4: 'Chery',
// }
// console.log(fruits)


// var fruits2 = ['Apple', 'Orange', 'Banana', 'Chery'];
// console.log(fruits2)

// var fruits = [1,334,454,'Apelsin','Apple', 'Kiwi', 'orange', 'anor'];
// console.log(fruits.length) // -> length array uzunligi

// var names = ['Kamronbek', 'Latif', 'Sarvinoz', 'Pokiza'];
// console.log(names);
// names.push('Otabek'); // push() arrayni oxiriga ma'lumot qushadi
// console.log(names);
// var names = ['Kamronbek', 'Latif', 'Sarvinoz']
// console.log(names);
// names.shift(); // shift() arrayni ichidagi birinchi ma'lumotni olib yashlaydi
// console.log(names)
// =================================================
// var names = ['Kamronbek', 'Latif', 'Sarvinoz']
// console.log(names)





//======================================================================



             // Object
// var fruits = {
//       1: 'Kiwi',
//       2: 'Apple',
//       3: 'Banana',
//       4: 'Peach',
//       5: 'Orange',
// }
// console.log(fruits);
//              // Array
// var fruits2 = ['Kiwi', 'Apple', 'Banana', 'Peach', 'Orange'];
// console.log(fruits2);

//===========================================================


// var names = ['Xusan', 'Shahnoza', 'Ozodbek'];
// console.log(names[2])

//=============================================
// var fruits = ['Apple', 'Peach', 'Orange', 'Kiwi', 'Banana', 'Ananas'];
// console.log(fruits.length) // length -> uzunligi

//====================================================

// var names = ['Bob', 'James', 'Jeck', 'Tor'];
// console.log(names);
// names.push('Anna'); // push() -> arrayni oxirga ma'lumot qushadi
// console.log(names)


//=====================================================

// var names = ['Bob', 'James', 'Jeck', 'Tor'];
// console.log(names);
// names.shift(); // shift() -> arrayni boshidan ma'lumot olib tashaydi
// console.log(names);

//=========================================================
// var names = ['Bob', 'James', 'Jeck', 'Tor'];
// console.log(names);
// names.unshift('John'); // unshift() -> arrayni boshiga ma'lumot qushib berayabdi
// console.log(names);

// =========================================
// var names = ['Bob', 'James', 'Jeck', 'Tor'];
// console.log(names);
// names.pop(); // pop() -> arrayni oxiridan ma'lumot olib tashlaydi
// console.log(names);

//================================================

// var cars = ['Lambargini', 'Mers', 'Ferrari', 'Gelik', 'Rolls Roys'];
// var cars2 = cars;
// console.log(cars2 === cars);
// cars2.push('BMW');
// cars.unshift('Jeep');
// console.log(cars2);
// console.log(cars);


//=============================================================

// var laptap = ['Hp', 'Asus', 'Msi', 'Aser', 'Apple', 'Dell','Lenova','Toshiba',]
// for(var i = 0; i < laptap.length; i++)  {
//       console.log(laptap[i]);
// };

//=======================================================
// var num = [1,2,3,4, 'hello'];
// console.log(num.toString()) // arrayda number va string kelganda toString() string qilib qaytaradi

//=====================================================


// var num = [1,343,45,342, 'hello'];
// console.log(num.join());
// console.log(num.join('-'));


//=============================================


// var str = 'hello World';
// console.log(str)
// console.log(str.split());
// console.log(str.split(""));
// console.log(str.split(' '));

//==========================================



// var names = ['Kamronbek', 'Latif', 'Munisa', 'Sarvinoz'];
// console.log(names);
// names.pop(); // pop() arrayni oxirdan ma'lumot olib tashlaydi
// console.log(names);

//=====================================================

// var names = ['Kamronbek', 'Latif', 'Munisa', 'Sarvinoz'];
// console.log(names); 
// names.unshift('Shohjahon'); //unshift() -> arrayni boshiga ma'lumot qushadi
// console.log(names);

//=====================================================

// var fruits = ['Orange', 'Apple', 'Peach', 'Banana', 'Chery', 'Kiwi'];
// var fruits2 = fruits;
// console.log(fruits2 === fruits);
// fruits2.unshift('Anor');
// fruits.pop();
// console.log(fruits);
// console.log(fruits2);

//================================================================

// var fruits = ['apple', 'kiwi', 'orange'];
// for(var i = 0; i < fruits.length; i++) {
//       console.log(fruits[i]);
// }
//========================================================

// var fruits = new Array('Apple', 'Orange', 'Kiwi');
// var f = fruits;
// console.log(f)
// console.log(fruits);
// console.log(f === fruits)

//=====================================

// var num = [1,2,3,2,34, 'Hello']
// console.log(num);
// console.log(num.toString()) // toString() number va string string qilib beradi

//===========================================

// var num = [1,32,342,3, 'hello', 'world'];
// console.log(num);
// console.log(num.join(' 7 '));

//=================================

// var names = ('SHohjahon Xusanboy Latif');
// console.log(names)
// console.log(names.split());
// console.log(names.split(''));

// var names = prompt('ism kiriting')
// console.log(names.split(' '));


//====================================================================

//            Object
// var fruits = {
//       1: 'Apple',
//       2: 'Banana',
//       3: 'Kiwi',
// }
// console.log(fruits)

// //          Array
// var fruits2 = ['apple', 'orange', 'kiwi']
// console.log(fruits2);

// var names = ['bOB', 'James', 'John'];
// console.log(names[0]);

// var fruits = ['apple', 'banana', 'orange', 'pear', 'chery'];
// console.log(fruits.length);

// var fruits2 = ['apple', 'banana', 'orange', 'pear']
// console.log(fruits2[0].length);

///=========================================

// var names = ['Bob', 'John', 'James'];
// console.log(names);
// names.push('Jorabek'); // push() -> arrayni oxiriga ma'lumot qushish uchun
// console.log(names) ;

//=============================================

// var names = ['John', 'Bob', 'James'];
// console.log(names)
// names.pop(); // pop() -> arrayni oxirdan ma'lumotni uchirish uchun
// console.log(names)
//=================================================

// var names = ['John', 'James', 'Bob']
// console.log(names)
// names.shift(); // shift() -> arrayni boshidan ma'lumot olib tashlaydi
// console.log(names)


//=============================
// var names = ['John', 'Bob', 'James'];
// console.log(names)
// names.unshift('Jorabe'); // unshift() -> arrayni boshiga ma'lumot qushish uchun
// console.log(names);

//======================================================


// var fruits = ['Apple', 'Orange', 'Kiwi', 'Pear', 'Chery'];
// var fruits2 = fruits;
// var fruits3 = fruits2;
// console.log(fruits === fruits);
// fruits2.push('Kiwi');
// fruits.shift();
// console.log(fruits);
// console.log(fruits2);
// console.log(fruits3[2].length);


//==================================================


// var names = ['Hamidjon', 'Muhammad', 'Kamron'];
//  for(var i = 0; i < names.length; i++) {
//       console.log(names[i]);
// }
///=======================================================

// var fruits2 = ['Hamidjon', 'Muhammad', 'Kamron'];
// console.log(fruits2);

// var fruits = new Array('Hamidjon', 'Muhammad', 'Kamron');
// console.log(fruits);
// fruits.push('Islombek');
// console.log(fruits);

//========================================================

// var num = [12,34,3, 'hello'];
// console.log(num);

// console.log(num.toString());

//======================================



// var num = [223, 322, 'John', 'Bob'];
// console.log(num)
// console.log(num.join(' 2 '))

//==========================================


// var str = prompt('Ismlar kiriting')
// // console.log(str.split()) // split() oddiy stringni array qilib beradi
// console.log(str.split(' '))
// // console.log(str.split(''))


//================================================================================



// var demo = document.getElementById('demo');
// demo.innerHTML = 'salom';

// var h1 = document.querySelector('h1');
// h1.innerHTML = 'hello world';
// var demo1 = document.getElementById('demo1');
// var demo2 = document.getElementById('demo2');
// var demo3 = document.getElementById('demo3');
// var btn = document.getElementById('btn');


// btn.onclick = function() {
//       demo1.innerHTML = 'Hello world1';
//       demo2.innerHTML = 'Hello world2';
//       demo3.innerHTML = 'Hello world3';
// }
//===================================================

// var pr1 = prompt('Ismiz kiriting');
// var pr2 = prompt('Familya kiriting');
// var demo1 = document.getElementById('demo1');
// var demo2 = document.getElementById('demo2');

// demo1.innerHTML =  'Sizning izmiz: ' + pr1;
// demo2.innerHTML = 'Sizning familyangiz: ' + pr2;



// var btn = document.getElementById('btn');
// var body = document.querySelector('body');
// var demo = document.getElementById('demo');
// btn.onclick = function() {
//       body.style.backgroundImage = 'url(https://bootstrapmade.com/demo/templates/Logis/assets/img/hero-img.svg)'
//       btn.style.backgroundColor = 'red';
//       btn.style.color = 'white';
//       demo.style.color = 'white';
//       demo.style.fontSize = '30px';
// }

//==========================================
// var demo = document.getElementById('demo');
// function fun1() {
//       demo.innerHTML = 'hello';
// }

//======================================================================


// var btn = document.getElementById('btn')
// var demo1 = document.getElementById('demo1');
// var demo2 = document.getElementById('demo2');


// function fun1() {
//       demo1.innerHTML = 'Browser inner  window widht: ' + window.innerWidth + 'px';
// }
// function fun2() {
//       demo2.innerHTML = 'Browser inner window Height: ' + window.innerHeight + 'px';
// }
// btn.addEventListener('click', fun1);
// btn.addEventListener('click', fun2)


//====================================

// var btn = document.getElementById('btn')
// var demo = document.getElementById('demo');

// function fun1() {
//       demo.innerHTML = 'Ekran rangi chuqurligi' + screen.colorDepth;
// }
// btn.addEventListener('click', fun1);

//====================================



// function fun1() {
//       demo.innerHTML = 'Ushbu sahifaning toliq URL manzili:' + window.location.href; 
// }
// btn.addEventListener('click', fun1);
//================================

// function fun() {
//       window.location.assign('https://www.figma.com/file/9WENqDOAcIBtROlJKo0juC/Untitled?type=design&node-id=0-1&mode=design&t=dwVDYSqCvDdpV1Ld-0');
// }

// var btn = document.getElementById('btn')
// var demo = document.getElementById('demo');
// function fun1() {
//       demo.innerHTML = navigator.appVersion;
// }
// btn.addEventListener('click', fun1);
// var btn = document.getElementById('btn');
// var demo = document.getElementById('demo');
// function fun1() {
//       demo.innerHTML = "Language: " + navigator.language
// }
// btn.addEventListener('click', fun1)
// var btn = document.getElementById('btn');
// var demo = document.getElementById('demo');


// function fun() {
//       demo.innerHTML = "Online? "  + navigator.onLine
// }
// btn.addEventListener('click', fun)

//========================================

// var demo  = document.getElementById('demo');
// setInterval(fun1, 1000)
// function fun1() {
//       var a = new Date()
//       demo.innerHTML = a.toLocaleTimeString()
// }
//==============================
// var demo = document.getElementById('demo');

// demo.innerHTML = 'hello wold';


// var h1 = document.querySelector('h1');

// h1.innerHTML = 'salom';
//============================


// var btn = document.getElementById('btn');
// var demo = document.getElementById('demo');

// btn.onclick = function() {
//       demo.innerHTML = 'salom'
// }

//==============================

// var demo = document.getElementById('demo');

// function fun() {
//       demo.innerHTML = 'salom'
// }
//===========================

// var pr1 = prompt('Ismiz kiriting');
// var pr2 = prompt('Familya kiriting');
// var demo1 = document.getElementById('demo1');
// var demo2 = document.getElementById('demo2');

// demo1.innerHTML =  'Sizning izmiz: ' + pr1;
// demo2.innerHTML = 'Sizning familyangiz: ' + pr2;

//================




// var demo1 = document.getElementById('demo1')
// var demo2 = document.getElementById('demo2');


// var pr1 = prompt('Ismizni kiriting');
// var pr2 = prompt('Familya kiriting');

// demo1.innerHTML = 'Sizning ismiz:' + pr1;
// demo2.innerHTML = 'Sizning familyangniz: ' + pr2;

//=========================================
// var btn = document.getElementById('btn');
// var body = document.querySelector('body');
// btn.onclick = function () {
//       body.style.backgroundColor = 'green';
//       btn.style.color = 'white';
//       btn.style.backgroundColor = 'red';
//       btn.style.fontSize = '30px';
//       btn.style.borderRadius = '30px'
// }
// function fun1() {
//       body.style.backgroundColor = 'white';
//       btn.style.color = 'black';
//       btn.style.backgroundColor = 'white';
//       btn.style.fontSize = '15px';
//       btn.style.borderRadius = '0px'
// }
//=========================================


// var box = document.getElementById('box');

// function fun1() {
//       box.style.backgroundColor = 'red';
// }
// function fun2() {
//       box.style.backgroundColor = 'blue';
// }
// function fun3() {
//       box.style.backgroundColor = 'green';
// }
// function fun4() {
//       box.style.backgroundColor = 'yellow';
// }
// function fun5() {
//       box.style.backgroundColor = 'orange';
// }

//============================================================================


// var demo = document.getElementById('demo');
// demo.innerHTML = 'hello world';

// var h1 = document.querySelector('h1');
// h1.innerHTML = 'salom'

//========================================


// var btn = document.getElementById('btn');
// var demo = document.getElementById('demo');
// btn.onclick = function() {
//       demo.innerHTML = 'Hello world';
// }


// var demo2 = document.getElementById('demo2')
// function Kamronbek() {
//       demo2.innerHTML = 'salom'
// }


// var names = ['Kamronbek', 'Latif', 'Sojida','Munisa', 'Sarvinoz', 'Xusan', 'Shohjahon', 'Pokiza', 'Islombek', 'Nodir', 'Marjona'];
// var any = Math.floor(Math.random() * names.length);
// alert(names[any])


// var demo = document.getElementById('demo');
// demo.innerHTML = 'hello world';

//=======================================

// var h1 = document.querySelector('h1')
// h1.innerHTML = 'salom';
// var p = document.querySelector('p');
// p.innerHTML = 'salom2'

//===========================================


// var btn = document.getElementById('btn');
// var demo = document.getElementById('demo');
// btn.onclick = function() {
//       demo.innerHTML = 'hello';
// }
// var demo2 = document.getElementById('demo2');
// function a() {
//       demo2.innerHTML = 'hello world'
// }
//==================================================


// var btn = document.getElementById('btn');
// var demo = document.getElementById('demo');
// var body = document.querySelector('body')

// btn.onclick = function () {
//       demo.innerHTML = 'hello world';
//       demo.style.color = 'red';
//       btn.style.backgroundColor = 'red';
//       btn.style.borderRadius = '5px';
//       body.style.backgroundColor = 'green';
// }

//=============================================
// var demo1 = document.getElementById('demo1')
// var demo2 = document.getElementById('demo2')

// var pr1 = prompt('ismizni kiriting');
// var pr2 = prompt('Familiya kiritng');

// demo1.innerHTML = 'Sizning ismiz: ' + pr1;
// demo2.innerHTML = 'Szning familiyangiz: ' + pr2; 

//=======================================

// var btn = document.getElementById('btn')
// var box = document.getElementById('box');
// var p = document.querySelector('p')

// btn.onclick = function() {
//       box.style.backgroundImage = 'url(https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg)';
//       p.style.color = 'white';
//       p.style.fontSize = '30px';
// }

//===========================================

// var btn = document.getElementById('btn')
// var panel = document.getElementById('panel')
// btn.onclick = function() {
//       panel.style.left = '0';
// }
// var btn2 = document.getElementById('btn2');

// btn2.onclick = function() {
//       panel.style.left = '-100%';
// };


//===================================================================

// var demo = document.getElementById('demo')
// function fun() {
//       try{
//             navigator.geolocation.getCurrentPosition(showPosition);
//       }
//       catch {
//             demo.innerHTML = err;
//       }
// }
// function showPosition(position) {
//       demo.innerHTML = 'Latitude' + position.coords.latitude + "<br> Longitude" + position.coords.longitude;
// }

//=====================================================================

// var input = document.getElementById('id1')
// var demo = document.getElementById('demo')
// function fun() {
//       if(!input.checkValidity()) {
//             demo.innerHTML = input.validationMessage;
//       }
//       else {
//             demo.innerHTML = 'nice';
//       }
// } 
//=====================


// var text;
// function fun() {
//       if(input.validity.rangeOverflow) {
//             text = 'eng maxsimum 100'
//       }
//       else {
//             text = 'nice'
//       }
//       demo.innerHTML = text
// }
//====================



// var input = document.getElementById('id1')
// var demo = document.getElementById('demo')

// var text;
// function fun() {
//       if(input.validity.rangeUnderflow){
//             text = 'eng mininum 10'
//       }
//       else {
//             text = 'good'
//       }
//       demo.innerHTML = text
// }

//===================================

// var userInput = document.getElementById('userInput');
// var btn = document.getElementById('searchBtn');
// var city = document.getElementById('city');
// var description = document.getElementById('description');
// var tempurature = document.getElementById('temperature');

// btn.addEventListener('click', function(){
//       const API_KEY = '005443ed2c351b278bb5c95207d73a5b';
//       const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

//       fetch(BASE_URL + "?appid=" + API_KEY + "&q=" + userInput.value)
//       .then(response =>  response.json())
//       .then(data => {
//             city.innerHTML = data['name'];
//             tempurature.innerHTML = Math.round(data['main']['temp'] - 273.15);
//             description.innerHTML = data['weather'][0]['description'];

//       }).catch( err => alert('Wrong city name'));


// });

// const container = document.querySelector('.container');
// const snowflake = document.querySelector('.snowflake');

// function appendSnowflake() {
//     const newSnowflake = snowflake.cloneNode(true);

//     // Each snowflake looks and behaves a little different:
//     newSnowflake.style.paddingLeft = Math.random() * 10 + 'px';
//     newSnowflake.style.animationDuration =
//         Math.random() * 5 + 3 + 's';
//     newSnowflake.style.opacity = Math.random() * 1;

//     container.append(newSnowflake);
// }

// const interval = setInterval(appendSnowflake, 50);

// setTimeout(() => {
//     clearInterval(interval);
// }, 2000);


var pass = '4444';
var pr1 = prompt('iltimos bank carta parolizni kiriting');
var summa = 100000;

if(pr1 == pass) {
    var pr2 = prompt('bizning xizmatlar 1 balans, 2 pul yechish, 3 bank manzillari, 4 valyuta ayir boshlash');
    if(pr2 == 1) {
        alert('sizing cartangizda ' + summa + ' bor')
    }
    else if(pr2 == 2) {
        var pr3 = prompt('1 20000, 2 40000, 3 60000, 4 boshqa summa kiritish uchun')
        if(pr3 == 1) {
            alert("sizda "  + 80000 + " suma qoldi sizdan 20000 som minus boldi")
        }
        else if(pr3 == 2) {
            alert("sizda "  + 60000 + " suma qoldi sizdan 40000 som minus boldi")
        }
        else if(pr3 == 3) {
            alert("sizda "  + 40000 + " suma qoldi sizdan 60000 som minus boldi")
        }
        else if(pr3 == 4) {
            var pr5 = prompt('minus boladigan summani kiriting')
            alert(summa - pr5 + 'sizda  summa qoldi, sizdan ' + pr5 + ' mablag minus boldi')
        }
        else {
            alert('pul yechish uchun faqat 4 menu bor')
        }
    }
    else if(pr2 == 3) {
        var pr6 = prompt('1 toshkent, 2 toshkent viloyati, 3 sirdaryo, 4 fargona')
        if(pr6 == 1) {
            alert('toshkent shaxar Chilonzor tumani Lutfiy kochasi')
        }
        else if(pr6 == 2) {
            alert('toshkent viloyati Buka tumani tinchlik kuchasi')
        }
        else if(pr6 == 3) {
            alert('Sirdaryo viloyati  Guliston shaxxri')
        }
        else if(pr6 == 4) {
            alert('Fargona viloyati  Bogdod tumani')
        }
    }
    else if(pr2 == 4) {
        var pr7 = prompt('1 usd summa ayirboshlash, 2 summani usd ayirboshlash')
        if(pr7 == 2) {
            var pr8 = prompt('summani kiritng')
            var u = pr8 / 12060;
            alert('siz kiritgan summa dollorga chaqanda '+ u )
        }
        else if(pr7 == 1) {
            var pr9 = prompt('usd kiritng')
            var a = 12060 * pr9;
            alert('siz usd summa chaqanda ' + a)
        }
    } 
    else {
        alert('faqat 4 menu mavjud')
    }
}
else {
    alert('parol notugri')
}






var addNum = prompt('qaysi xonaniki yoqish kerak');
switch(addNum){
    case 'oshxona': 
        alert('oshxona chirogi yondi');
        break;
    case 'mexmonhona':
        alert('mexmonhona chirogi yondi');
        break;
    case 'vanna': 
        alert('vanna chirogi yondi');
        break;
    case 'yotoqxona': 
        alert('yotoqxona chirogi yondi');
        break;
    default: {
        alert('faqat 4 xona mavjud');
    }
}