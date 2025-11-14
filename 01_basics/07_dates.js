let myDate=new Date();
console.log(myDate);//--->The date object contains current date and time.
console.log(myDate.toString());
console.log(myDate.toLocaleString());//--->show date and time
console.log(myDate.toDateString());//--->show only date 

//let date=myDate.toString();
//console.log(typeof date);--->string

let myCreatedDate=new Date(2025,0,14);//--->(yyyy,mm,dd)--->Jan starts with 0;
console.log(myCreatedDate.toDateString());

//Another way to assign date
let myNewCreatedDate=new Date("01-12-2004");//Jan starts with 1;
console.log(myNewCreatedDate.toDateString());

let myTimeStamp=Date.now();//--->returns the current timestamp — the number of milliseconds that have passed since January 1, 1970.
console.log(myTimeStamp);

console.log(myCreatedDate.getTime());//--->returns the timestamp, i.e., the number of milliseconds since 1 January 1970 (UTC) for that particular date.

//convert milisec to sec...

console.log(Math.floor(myCreatedDate.getTime()/1000));
console.log(Math.floor(Date.now()/1000));

//More methods for date...

let newDate=new Date();
console.log(newDate.getMonth()+1);

//Important way to customize your date...
console.log(newDate.toLocaleString('default',{
    weekday:"long",
    month:"narrow"
}))













