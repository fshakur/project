// خب خوشگلم اول باید انتخاب کنی عناصرت
// خب
//می خوام اول liهایی که ساب منو دارن انتخاب کنیم
// چرا که چی بشن؟
//که کلیک کنیم روشون ساّآها فهمیدم مثل سنجش
const menu=document.querySelectorAll('li.item');//با این سلکتور می تونیم سلکتور های سی اس اس رو استفاده کنیم
//با این فور می تونیم تمام اون li هارو که انتخاب کردیم میشه یه ارایه ومی تونیم بچرخیم توشون

/*
menu.forEach(function(index){
    // یه  ارایه که اولی رو انتخاب کردم
    menu[0].addEventListener('click',function(){////  هم با فور میشه و هم با فور ایچ این یه حالت دیگه 
        console.log('his'+index);

    
        //بایه متغییر می تونیم بفهمیم روی چندمین عنصوریم که ازورودی میاد
    });
    */
// });
//با هرکلیلک کل ایتم هارو می چرخه
// میشه کلاس جدا داد بهشون که با هم نچرخن؟
// فقط اونی که قراره باز بشه ؛ باز بشه
//اره میشه 
//کل این فور واسه اینه که بگردی همه رو چک کنی چون بعدا نیازداریم که همه بررسی بشن آها
// بااین  کلمه ازاین ارایه اونی که روشیم  می تونیم عملیات روش انجام بدیم درواقع  عنصری که روشیم انتخاب میشه
// چرا دوتا الرت داره هر دفعه دوبار ok میزنی؟ 
//به خاطر رویداد والد هم هست یعنی چی؟ کدوم رویدادهررویدادی که اتفاق میفته  اهاواسه والدش هم میفته باش
//که حالا میشه این رو قطع کردکه تو بحث رویدادها میگم اوکی
//خب الان دیگه میشه هرکاری کردمثلا بیایم li  هارو انتخاب کنیم 
//   به تعداد همشون آلرت میاد
// اینجایی؟ محسن 
//رفتم دربازکردم
//اره به تعدادتمامشون میادحالا بریم کنترل کنیم
//همین فقط بدونی که چطور می چرخی کافیه  چه اهمیتی داره؟ برا چه موقع کاربرد داره؟ قطعا فقط برا منو نیست. پس کجاها میشه استفاده کرد
//واسه انتخاب های زیاد اسلاید شو هم استفاده میکنیم اها مرسی 
//همین مرورکن واسه فردابهت میگمم کجاکاربرد داره باش ممنون که وقت گزاشتی
//اینطوری راحت منو 
// اره مرسی
//می تونی به جای اینکه اچ رف  حذف کنی یه ایکن بزاری کنارش بعدروی اون  کلیک بشه منو بازبش اها
//سلیقه ایه - میدونم مرسی عزیزم تموم شد؟
//اره همین بود حالا نوه بازو بسته کردن رو می تونی باسی اساس زیباترکنی- باشه ولی چقد ساده بود چون امروز مطالعه کردن راحتتر فهمیدمش
// افرین بیا تل
for (let index = 0; index < menu.length; index++) {
    menu[index].addEventListener('click', function(){
        const icon=menu[index].firstElementChild;
      
        if(icon.classList.contains('fa-caret-down')){
            icon.classList.remove('fa-caret-down');
            icon.classList.add('fa-caret-up');
        
        }
    //    (icon.classList.contains('fa-caret-up')){
          else{icon.classList.remove('fa-caret-up');
        icon.classList.add('fa-caret-down');
        }
        //اینجا اومدیم اون منو ها که اانتخاب کردیم چون ارایه اند فورزدیم روشون وواسه رویداد کلیکشون می خوایم کاری انجام بدیم
// let submenu=menu[index].lastChild.innerHTML;
// alert(submenu);
// console.log(submenu);
//کاری که می خوایم انجام بدیم اینه که اون کلاس نمایش منو اضافه کنیم به ااون ساب منو پس اول انتخابش میکنیم
this.lastElementChild.classList.toggle('show-submenu');
//حله عزیزم اره جیگر
    });
    
}
// تست ویژگی های attribute  ها


// menu[0].classList.contains('fa-caret-down');
// alert(menu[0].classList.contains('item'));