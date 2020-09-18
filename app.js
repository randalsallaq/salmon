'use strict';



var hours = ['6:00 am', '7:00 am', '8:00 am', '9:00 am', '10:00 am', '11:00 am', '12:00 pm', '1:00 pm', '2:00 pm', '3:00 pm', '4:00 pm', '5:00 pm', '6:00 pm', '7:00 pm', '8:00 pm'];


var totalcolumn = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

function getRandomNumber(min, max) {

    var randomnum = Math.random();
    randomnum = (randomnum * (max - min + 1)) + min;
    randomnum = Math.floor(randomnum);
    return randomnum;
};

var salmoncookiesArray = [];



var body = document.getElementById('salmonObjects');
var table = document.createElement('table');
body.appendChild(table);

function header(){

    var head = document.createElement('tr');
    table.appendChild(head);

    var tablehead = document.createElement('th');
    tablehead.textContent = " ";
    head.appendChild(tablehead);

     for (var y = 0; y < hours.length; y++){
         tablehead = document.createElement('th');
         tablehead.textContent = hours[y];
         head.appendChild(tablehead);
     }

     tablehead = document.createElement('th');
     tablehead.textContent = 'Daily Total';
     head.appendChild(tablehead);
    
}

function footer(){
    var totalhourRow = document.createElement('tr');
    table.appendChild(totalhourRow);

    var totalOftotal = 0;

    var totalHourTD = document.createElement('td');
    totalHourTD.textContent = "total";
    totalhourRow.appendChild(totalHourTD);

   for ( var x = 0; x < totalcolumn.length; x++){
     var totalsum = document.createElement('td');
    totalsum.textContent = totalcolumn[x];
    totalhourRow.appendChild(totalsum); 
    totalOftotal+= totalcolumn[x];

   }
   totalHourTD = document.createElement('td');
   totalHourTD.textContent = totalOftotal;
   totalhourRow.appendChild(totalHourTD);
   
    }


// function footer(){
//     var foot = document.createElement('tr');
//     var 
// }



function Salmoncookies (name, minCust, maxCus, AvgCookieSale){

        this.name = name;
        this.minCust = minCust;
        this.maxCus = maxCus;
        this.AvgCookieSale = AvgCookieSale;
        this.numberOfCustomersPerHour = [];
        this.numberOfcockies = [];
        this.total = 0;
        // this.numCust = numCust;
        salmoncookiesArray.push(this);
    };

    Salmoncookies.prototype.numCust = function () {
                for (var i = 0; i < hours.length; i++) {
                    var x = getRandomNumber(this.minCust, this.maxCus);
                    this.numberOfCustomersPerHour.push(x);
                }
            };

     Salmoncookies.prototype.numCock = function () {
                for (var i = 0; i < hours.length; i++) {
                    var c = Math.floor(this.numberOfCustomersPerHour[i] * this.AvgCookieSale);
                    // console.log(c);
                    this.numberOfcockies.push(c);
                    totalcolumn[i]+= c;
                }
            };

        Salmoncookies.prototype.totalFinal = function(){
                for  (var t = 0; t <hours.length; t++ ){
                    this.total+= this.numberOfcockies[t];
                        
                }
                    return this.total;
            };

    Salmoncookies.prototype.render = function () {
             var locationRow = document.createElement('tr');
             table.appendChild(locationRow);

             var locationName = document.createElement('td');
             locationName.textContent = this.name;
             locationRow.appendChild(locationName);

             for( var i =0; i < hours.length; i++){
             var rowTD = document.createElement('td');
            rowTD.textContent = this.numberOfcockies[i];
             locationRow.appendChild(rowTD)
             }

             var totalTD = document.createElement('td');
             totalTD.textContent = this.totalFinal();
             locationRow.appendChild(totalTD);
        
            }

    

      


    var seattle = new Salmoncookies ('Seattle', 23, 65, 6.3 );

    var tokyo = new Salmoncookies ('Tokyo', 3, 24, 1.2 );

    var paris = new Salmoncookies ('Paris', 20,	38,	2.3);

    var dubai = new Salmoncookies ('Dubai', 20, 38,	2.3);

    var lima = new Salmoncookies ('Lima', 2, 16, 4.6);


    header();



for (var index = 0; index < salmoncookiesArray.length; index++) {

    salmoncookiesArray[index].numCust();
    salmoncookiesArray[index].numCock();
    salmoncookiesArray[index].render();
    
}

footer();



    // seattle.numCust();

    // seattle.numCock();
    // seattle.render();

    // for (var x = 0; x < salmoncookiesArray.length; x++){
    //     salmoncookiesArray[x].numCust();
    //     salmoncookiesArray[x].render();
    // };
   
// seattle.numCust();

// seattle.numCock();
// seattle.render();


// tokyo.numCust();
// tokyo.numCock();
// tokyo.render();

// paris.numCust();
// paris.numCock();
// paris.render();

// dubai.numCust();
// dubai.numCock();
// dubai.render();

// lima.numCust();
// lima.numCock();
// lima.render();

/******************Table*******************/ 


// var lastrow = [0,0,0,0,0]; //the data is inside the loop


// var parentelement = document.getElementById('salmonObjects');
// var table = document.createElement('table');
//     parentelement.appendChild(table);

//     for (var i=0; i<7; i++){
//         var row = document.createElement('tr');
//         table.appendChild(row);
//     }


//     for (var j = 0; j < 17; j++){
//         var colomn = document.createElement('td');
//         colomn.textContent = 'row' + i+1+ ' colomn '+(j+1);
//         row.appendChild(colomn);
//         td.textContent = getrandomnumbers(0,100);
//         table.appendChild(row);
//     var rowsum = 0;
//         for(var colomn = 0; colomn < 6; colomn++){
//             var td = document.createElement('td');
//                 row.appendChild(td);
    
//             if(colomn < 5){
                
//                 random = getrandomnumbers(0,100)
//                 td.textContent = getrandomnumbers(0,100);
//                 rowsum += random;
//                 lastrow[colomn] += random; //for the summation (last row) ** we have no way to arrange the coloms so we use an array as it strats also from zero
//             } else{
//               td.textContent = rowsum;
//             }
//         }
//     }
//     {
    
//     };
    



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
//         for  (var t = 0; t <hours.length; t++ ){
//         this.total+= this.numberOfcockies[t];
        
//     }
//     return this.total;
// },

//     render: function () {
        
//         var parent = document.getElementById('cockies-sales');
//         var h2=document.createElement('h2')
//         h2.textContent= this.name;
//         parent.appendChild(h2);
     
//         var ul = document.createElement('ul');
//         parent.appendChild(ul);

//         for (var i = 0; i < this.numberOfCustomersPerHour.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = hours[i] + ' : ' + this.numberOfcockies[i] + ' cookies ';
//             ul.appendChild(li);


//         }
//         var li2 = document.createElement('li');
//         ul.appendChild(li2);
//         li2.textContent ='Total :'+ this.totalFinal();
//         console.log(this.totalFinal());

//     }

    
// // };


// /*tokyo */

// var tokyo = {
//     name: 'tokyo',
//     minCust: 3,
//     maxCus: 24,
//     AvgCookieSale: 1.2,
//     numberOfCustomersPerHour: [],
//     numberOfcockies: [],
//     total:0,
//     numCust: function () {
//         for (var i = 0; i < hours.length; i++) {
//             var x = getRandomNumber(this.minCust, this.maxCus);
//             console.log(x);
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
//         for  (var t = 0; t <hours.length; t++ ){
//         this.total+= this.numberOfcockies[t];
        
//       }
//       return this.total;
//     },

//     render: function () {
        
//         var parent = document.getElementById('cockies-sales');
//         var h2=document.createElement('h2')
//         h2.textContent= this.name;
//         parent.appendChild(h2);
     
//         var ul = document.createElement('ul');
//         parent.appendChild(ul);

//         for (var i = 0; i < this.numberOfCustomersPerHour.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = hours[i] + ' : ' + this.numberOfcockies[i] + ' cookies ';
//             ul.appendChild(li);


//         }
//         var li2 = document.createElement('li');
//         ul.appendChild(li2);
//         li2.textContent = 'Total :'+  this.totalFinal();
//         console.log(this.totalFinal());
//         //li.textContent='Total :' + this.numberOfcockies[t]
//     } 
// };


// var Dubai = {
//     name: 'Dubai',
//     minCust: 11,
//     maxCus: 38,
//     AvgCookieSale: 3.7,
//     numberOfCustomersPerHour: [],
//     numberOfcockies: [],
//     total:0,
//     numCust: function () {
//         for (var i = 0; i < hours.length; i++) {
//             var x = getRandomNumber(this.minCust, this.maxCus);
//             console.log(x);
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
//         for  (var t = 0; t <hours.length; t++ ){
//         this.total+= this.numberOfcockies[t];
        
//       } return this.total;
//     },

//     render: function () {
//         var parent = document.getElementById('cockies-sales');
//         var h2=document.createElement('h2')
//         h2.textContent= this.name;
//         parent.appendChild(h2);
     
//         var ul = document.createElement('ul');
//         parent.appendChild(ul);

//         for (var i = 0; i < this.numberOfCustomersPerHour.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = hours[i] + ' : ' + this.numberOfcockies[i] + ' cookies ';
//             ul.appendChild(li);


//         }
//         var li2 = document.createElement('li');
//         ul.appendChild(li2);
//         li2.textContent = 'Total :'+  this.totalFinal();
//         console.log(this.totalFinal());
//         //li.textContent='Total :' + this.numberOfcockies[t]
//     } 
// };


// var paris = {
//     name: 'paris',
//     minCust: 11,
//     maxCus: 38,
//     AvgCookieSale: 3.7,
//     numberOfCustomersPerHour: [],
//     numberOfcockies: [],
//     total:0,
//     numCust: function () {
//         for (var i = 0; i < hours.length; i++) {
//             var x = getRandomNumber(this.minCust, this.maxCus);
//             console.log(x);
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
//         for  (var t = 0; t <hours.length; t++ ){
//         this.total+= this.numberOfcockies[t];
        
//       } return this.total;
//     },

//     render: function () {
        
//         var parent = document.getElementById('cockies-sales');
//         var h2=document.createElement('h2')
//         h2.textContent= this.name;
//         parent.appendChild(h2);
     
//         var ul = document.createElement('ul');
//         parent.appendChild(ul);

//         for (var i = 0; i < this.numberOfCustomersPerHour.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = hours[i] + ' : ' + this.numberOfcockies[i] + ' cookies ';
//             ul.appendChild(li);


//         }
//         var li2 = document.createElement('li');
//         ul.appendChild(li2);
//         li2.textContent = 'Total :'+  this.totalFinal();
//         console.log(this.totalFinal());
//         //li.textContent='Total :' + this.numberOfcockies[t]
//     } 
// };


// var lima = {
//     name: 'lima',
//     minCust: 2,
//     maxCus: 16,
//     AvgCookieSale: 4.6,
//     numberOfCustomersPerHour: [],
//     numberOfcockies: [],
//     total:0,
//     numCust: function () {
//         for (var i = 0; i < hours.length; i++) {
//             var x = getRandomNumber(this.minCust, this.maxCus);
//             console.log(x);
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
//         for  (var t = 0; t <hours.length; t++ ){
//         this.total+= this.numberOfcockies[t];
        
//       } return this.total;
//     },

//     render: function () {
        
//         var parent = document.getElementById('cockies-sales');
//         var h2=document.createElement('h2')
//         h2.textContent= this.name;
//         parent.appendChild(h2);
     
//         var ul = document.createElement('ul');
//         parent.appendChild(ul);


//         for (var i = 0; i < this.numberOfCustomersPerHour.length; i++) {
//             var li = document.createElement('li');
//             li.textContent = hours[i] + ' : ' + this.numberOfcockies[i] + ' cookies ';
//             ul.appendChild(li);
        
           

//         }
//         var li2 = document.createElement('li');
//         ul.appendChild(li2);
//         li2.textContent = 'Total :'+ this.totalFinal();
//         console.log(this.totalFinal());
//         //li.textContent='Total :' + this.numberOfcockies[t]
//     } 
// };



// Seattle.numCust();
// Seattle.numCock();
// Seattle.render();

// tokyo.numCust();
// tokyo.numCock();
// tokyo.render();


// Dubai.numCust();
// Dubai.numCock();
// Dubai.render();


// paris.numCust();
// paris.numCock();
// paris.render();

// lima.numCust();
// lima.numCock();
// lima.render();



// var tokyo = Object.create(Seattle);
// tokyo.prototype.minCust = 0;
// console.log(tokyo);
// console.log(Seattle);


///////////########### "second lab : table"#########//////////

