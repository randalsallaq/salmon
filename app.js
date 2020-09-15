'use strict';



var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm'];

function getRandomNumber(min, max) {

    var randomnum = Math.random();
    randomnum = (randomnum * (max - min + 1)) + min;
    randomnum = Math.floor(randomnum);
    return randomnum;
};

/*first city*/
// var Seattle = {
//     name: 'Seattle',
//     minCust: 23,
//     maxCus: 65,
//     AvgCookieSale: 6.3,
//     numberOfCustomersPerHour: [],
//     numberOfcockies: [],
//     total:0,
//     numCust: function () {
//         for (var i = 0; i < hours.length; i++) {
//             var x = getRandomNumber(this.minCust, this.maxCus);
//             this.numberOfCustomersPerHour.push(x);
//         }
//     },

//     numCock: function () {
//         for (var i = 0; i < hours.length; i++) {
//             var c = Math.floor(this.numberOfCustomersPerHour[i] * this.AvgCookieSale);
//             // console.log(c);
//             this.numberOfcockies.push(c);
//         }
//     },

//     totalFinal: function(){
//         for  (var t = 0; t <hours.length; t++ );
//         this.total+= this.numberOfcockies;
//         return this.total;
//       },

//     render: function () {
//         var parent0 = document.getElementById('city');
//         var h2 = document.createElement('h2');
//         h2.textContent = this.name;
//         parent0.appendChild(h2);
//         var parent = document.getElementById('cockies-sales');
//         var Myarticle = document.createElement('article');
//         parent.appendChild(Myarticle);
//         var ul = document.createElement('ul');
//         Myarticle.appendChild(ul);
//         for (var i = 0; i < this.numberOfCustomersPerHour.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = hours[i] + ' : ' + this.numberOfcockies[i] + ' cookies ';
//             ul.appendChild(li);


//         }

//     }

    
// };


/*tokyo */

var seattle = {
    name: 'tokyo',
    minCust: 3,
    maxCus: 24,
    AvgCookieSale: 1.2,
    numberOfCustomersPerHour: [],
    numberOfcockies: [],
    total:0,
    numCust: function () {
        for (var i = 0; i < hours.length; i++) {
            var x = getRandomNumber(this.minCust, this.maxCus);
            console.log(x);
            this.numberOfCustomersPerHour.push(x);
        }
    },

    numCock: function () {
        for (var i = 0; i < hours.length; i++) {
            var c = Math.floor(this.numberOfCustomersPerHour[i] * this.AvgCookieSale);
            // console.log(c);
            this.numberOfcockies.push(c);
        }
    },

    totalFinal: function(){
        for  (var t = 0; t <hours.length; t++ );
        this.total+= this.numberOfcockies;
        return this.total;
      },

    render: function () {
        var parent = document.getElementById('cockies-sales');
        var Myarticle = document.createElement('article');
        parent.appendChild(Myarticle);
        var ul = document.createElement('ul');
        Myarticle.appendChild(ul);
        for (var i = 0; i < this.numberOfCustomersPerHour.length; i++) {
            var li = document.createElement('li');
            li.textContent = hours[i] + ' : ' + this.numberOfcockies[i] + ' cookies ';
            ul.appendChild(li);


        }
        //li.textContent='Total :' + this.numberOfcockies[t]

    }

    
};





seattle.numCust(seattle.minCus, seattle.maxCus);
seattle.numCock();


var tokyo = Object.create(seattle);
tokyo.minCus = 30;
tokyo.maxCus = 70;
tokyo.AvgCookieSale = 2.5;


tokyo.numCust(tokyo.minCus, tokyo.maxCus);
tokyo.numCock();
seattle.render();
// seattle.totalFinal();


// tokyo.render();


// Tokyo.numCust(tokyo.minCus, tokyo.maxCus);
// Tokyo.numCock();
// Tokyo.render();
// Tokyo.totalFinal();