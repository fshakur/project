// var userEntry=5;
// var x=userEntry;
// do{
// console.log(x+'<br>');
//     x--
// }while(x>0){
//     console.log("userEntry="+userEntry);

// }
//خب اول عکس ها و دایره هارو انتخاب میکنیم
const jahatright = document.getElementById('jahat-raight');////
const jahatleft = document.getElementById('jahat-left');////
const images = document.querySelectorAll('div.img img');
const circles = document.querySelectorAll('.circle');
// let length = circles.length;
// console.log(length);
let currentimage = 0;
//کجا نوشتی ست اینتروال
// یه دیقه صبر کن

setInterval(function(){
     
    ////////////////////////////////////////////////////
    
    for (let index = 0; index < circles.length; index++) {
        if (images[index].classList.contains('active-img')) {
            currentimage = index;

        }

    }
    images[currentimage].classList.remove('active-img');
    circles[currentimage].classList.remove('active-circle');
    currentimage++;
    if(currentimage==images.length)
    {
        // این شرط داره میگه که وقتی رسیدی به آخرین عکس ، دباره برگرد به عکس اول و اونو نشون بده به جای اینکه بیای یه صفحه خالی رو نشون بدی.
        // پس قبل اینکه صفحه خالی بشه باید براش تعریف کرده باشیم که با پیش رفتن به سمت جلوتر صفحه خالی میشه پس شما اولین عکس رو بریز توش چون قراره چرخشی ادامه داشته باشه.
        currentimage=0;
    }
    images[currentimage].classList.add('active-img');
    circles[currentimage].classList.add('active-circle');
},3000);
   
jahatright.addEventListener('click', function () {
    for (let index = 0; index < circles.length; index++) {
        if (images[index].classList.contains('active-img')) {
            currentimage = index;

        }

    }
    images[currentimage].classList.remove('active-img');
    circles[currentimage].classList.remove('active-circle');
    currentimage++;
    if(currentimage==images.length)
    {
        currentimage=0;
    }
    images[currentimage].classList.add('active-img');
    circles[currentimage].classList.add('active-circle');
   

   
    
    // alert(currentimage);
});
jahatleft.addEventListener('click', function () {
    for (let index = 0; index > circles.length; index--) {
        if (images[index].classList.contains('active-img'))
         {
            currentimage = index;
        }

    }

    images[currentimage].classList.remove('active-img');
    circles[currentimage].classList.remove('active-circle');
    currentimage--;
    if(currentimage<0)
    {
        currentimage=images.length-1;
    }
    images[currentimage].classList.add('active-img');
    circles[currentimage].classList.add('active-circle');
///////////////////////////////    

// alert(currentimage);
});
//حالا واسه دایره ها رویدادکلیک استفاده میکنیم
for (let i = 0; i < circles.length; i++) {
    circles[i].addEventListener('click', function () {

        //خب الان روی هردایره کلیک کردیم
        //واسه ارتباطش باعکسش ازایندیکس استفاده میکنیم
        //حالا کاری که می خوایم اینجام بدیم اینه که روی هردایره کلیک شداون کلاس اکتیو اضافه بشه وبقیه کلاس هاشون برداشته بشه
        //پس اول میام کلاس رو برمیدارم اگه دارن
        // مگه از فور استفاده نکردیم؟ بازم از فورایچ استفاده می کنیم؟
        //خب واسه اینکه اول کلاس هارو پاک کنیم به یه فوردیگه نیازداریم
        // فعلا منظورتو متوجه نشدم مگه بعدا 
        //اها بزار فعلا نمی نویسم که بدونی چیه
        //فعلاکلاس رواضافه میکنیم
        //خب عزیزم دیدی که همه اضافه شد ولی وقتی می خواستیم برگردیم اول نشد
        // حالا از متد remove استفاده می کنیم؟
        //اره ولی باید همه حذف بشن واسه همین یه فوردیگه می خوایم
        // الان این فور مقدار i برعکس میشه؟
        //نه ببین این فور مقدار داریره ای که روشی میده ولی ازعکس های قبلی که کلاس بهشون اضافه شده نمیشه استفاده کرد
        //ماباید قبل ازکلاس اضافه کردن اول همه عکس هارو انتخاب کنیم وکلاس رو حذف کنیم
        // بریم ببینیم چطوره
        //خب عشقم کارمیکنه حالا میریم روی دایره ها که کلیک کرداکتیومیکنیم
        for (let index = 0; index < images.length; index++) {
            images[index].classList.remove('active-img');

        }
        //فوربالا برای پاک کردن کلاس های قبلی که به عکس هادادیم بودحالا یه فوردیگه می خوایم واسه دایره ها
        // 
        for (let j = 0; j < circles.length; j++) {
            circles[j].classList.remove('active-circle');
        }
        //این فوراول روی تک تک دایره ها کلیک بشه رویدادکلیک انجام میشه پس کلاس اکتیو اینجا اضافه میکنیم
        this.classList.add('active-circle');
        currentimage = i;
        // این this  دقیقا داره به چی اشاره می کنه
        //به خوددایره ای که کلیک کردیم
        //   دوتا خطی که سلکت کردم به کدوم اشاره داره آره می دنم فقط الان تو 
        images[i].classList.add('active-img');//این کلاس رو کپی کن نمی تونم
        alert("hello");
    })};
