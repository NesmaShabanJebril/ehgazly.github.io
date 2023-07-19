
$(document).ready(function(){
    $(".open").click(function(){
      $(".open").toggle();
	   $(".close1").toggle();
	  $(".sidbar").toggleClass("active");
    });
});
$(document).ready(function(){
    $(".close1").click(function(){
      $(".open").toggle();
	   $(".close1").toggle();
	  $(".sidbar").toggleClass("active");
    });
});
    $(".time").click(function(){
   $(this).toggleClass("bg-main");
        $(this).toggleClass("c-w");
    });

// ============================================================================
// btn-plus and btn-minus in "#order-detail-content" table
// ============================================================================

  $('.btn-plus').on('click', function () {
    var $count = $(this).parent().find('.count');
    var val = parseInt($count.val(),10);
    $count.val(val+1);
    return false;
  });

  $('.btn-minus').on('click', function () {
    var $count = $(this).parent().find('.count');
    var val = parseInt($count.val(),10);
    if(val > 0) $count.val(val-1);
    return false;
  });



$('.en #addNew-sa').on('click', function(e) {
	e.preventDefault();        
	var newField = '<hr class="col-12"> <div class="col-sm-3"><lable >Detection period</lable><input type="text" class=" pad-0 mr-10 w-50"  value=" 00:minute"  placeholder="00:00"></div><div class="col-sm-3"><lable >from</lable><input type="text" placeholder="00:00" class="pad-0 mr-10 w-50"></div><div class="col-sm-3 "><lable >to</lable> <input type="text"  placeholder="00:00" class="w-50 pad-0 mr-10"></div> <div class="col-sm-3 text-center field-sa"><button class="btn mr-10" >modify</button><button class="btn btn-light mr-10 ">delete</button></div>';
             
 $('.field-sa:last').after(newField);
   
});
$('.en #addNew-su').on('click', function(e) {
	e.preventDefault();        
	var newField = '<hr class="col-12"> <div class="col-sm-3"><lable >Detection period</lable><input type="text" class=" pad-0 mr-10 w-50"  value=" 00:minute"  placeholder="00:00"></div><div class="col-sm-3"><lable >from</lable><input type="text" placeholder="00:00" class="pad-0 mr-10 w-50"></div><div class="col-sm-3 "><lable >to</lable> <input type="text"  placeholder="00:00" class="w-50 pad-0 mr-10"></div> <div class="col-sm-3 text-center field-su"><button class="btn mr-10" >modify</button><button class="btn btn-light mr-10 ">delete</button></div>';
 $('.field-su:last').after(newField);
   
});
$('.en #addNew-mo').on('click', function(e) {
	e.preventDefault();        
var newField = '<hr class="col-12"> <div class="col-sm-3"><lable >Detection period</lable><input type="text" class=" pad-0 mr-10 w-50"  value=" 00:minute"  placeholder="00:00"></div><div class="col-sm-3"><lable >from</lable><input type="text" placeholder="00:00" class="pad-0 mr-10 w-50"></div><div class="col-sm-3 "><lable >to</lable> <input type="text"  placeholder="00:00" class="w-50 pad-0 mr-10"></div> <div class="col-sm-3 text-center field-mo"><button class="btn mr-10" >modify</button><button class="btn btn-light mr-10 ">delete</button></div>';
 $('.field-mo:last').after(newField);
   
});
$('.en #addNew-tu').on('click', function(e) {
	e.preventDefault();        
var newField = '<hr class="col-12"> <div class="col-sm-3"><lable >Detection period</lable><input type="text" class=" pad-0 mr-10 w-50"  value=" 00:minute"  placeholder="00:00"></div><div class="col-sm-3"><lable >from</lable><input type="text" placeholder="00:00" class="pad-0 mr-10 w-50"></div><div class="col-sm-3 "><lable >to</lable> <input type="text"  placeholder="00:00" class="w-50 pad-0 mr-10"></div> <div class="col-sm-3 text-center field-tu"><button class="btn mr-10" >modify</button><button class="btn btn-light mr-10 ">delete</button></div>';
 $('.field-tu:last').after(newField);
   
});
$('.en #addNew-we').on('click', function(e) {
	e.preventDefault();        
	var newField = '<hr class="col-12"> <div class="col-sm-3"><lable >Detection period</lable><input type="text" class=" pad-0 mr-10 w-50"  value=" 00:minute"  placeholder="00:00"></div><div class="col-sm-3"><lable >from</lable><input type="text" placeholder="00:00" class="pad-0 mr-10 w-50"></div><div class="col-sm-3 "><lable >to</lable> <input type="text"  placeholder="00:00" class="w-50 pad-0 mr-10"></div> <div class="col-sm-3 text-center field-we"><button class="btn mr-10" >modify</button><button class="btn btn-light mr-10 ">delete</button></div>';    
 $('.field-we:last').after(newField);
   
});
$('.en #addNew-th').on('click', function(e) {
	e.preventDefault();        
var newField = '<hr class="col-12"> <div class="col-sm-3"><lable >Detection period</lable><input type="text" class=" pad-0 mr-10 w-50"  value=" 00:minute"  placeholder="00:00"></div><div class="col-sm-3"><lable >from</lable><input type="text" placeholder="00:00" class="pad-0 mr-10 w-50"></div><div class="col-sm-3 "><lable >to</lable> <input type="text"  placeholder="00:00" class="w-50 pad-0 mr-10"></div> <div class="col-sm-3 text-center field-th"><button class="btn mr-10" >modify</button><button class="btn btn-light mr-10 ">delete</button></div>';
 $('.field-th:last').after(newField);
   
});
$('.en #addNew-fr').on('click', function(e) {
	e.preventDefault();        
	var newField = '<hr class="col-12"> <div class="col-sm-3"><lable >Detection period</lable><input type="text" class=" pad-0 mr-10 w-50"  value=" 00:minute"  placeholder="00:00"></div><div class="col-sm-3"><lable >from</lable><input type="text" placeholder="00:00" class="pad-0 mr-10 w-50"></div><div class="col-sm-3 "><lable >to</lable> <input type="text"  placeholder="00:00" class="w-50 pad-0 mr-10"></div> <div class="col-sm-3 text-center field-fr"><button class="btn mr-10" >modify</button><button class="btn btn-light mr-10 ">delete</button></div>';
 $('.field-fr:last').after(newField);
   
});








$('.arabic #addNew-sa').on('click', function(e) {
	e.preventDefault();        
	var newField = '<hr class="col-12"> <div class="col-sm-3"><lable >مدة الكشف</lable><input type="text" class=" pad-0 mr-10 w-50"  value=" 00:دقيقة"  placeholder="00:00"></div><div class="col-sm-3"><lable >من</lable><input type="text" placeholder="00:00" class="pad-0 mr-10 w-50"></div><div class="col-sm-3 "><lable >إلي</lable> <input type="text"  placeholder="00:00" class="w-50 pad-0 mr-10"></div> <div class="col-sm-3 text-center field-sa"><button class="btn mr-10" >تعديل</button><button class="btn btn-light mr-10 ">حذف</button></div>';
             
 $('.field-sa:last').after(newField);
   
});
$('.arabic  #addNew-su').on('click', function(e) {
	e.preventDefault();        
	var newField = '<hr class="col-12"> <div class="col-sm-3"><lable >مدة الكشف</lable><input type="text" class=" pad-0 mr-10 w-50"  value=" 00:دقيقة"  placeholder="00:00"></div><div class="col-sm-3"><lable >من</lable><input type="text" placeholder="00:00" class="pad-0 mr-10 w-50"></div><div class="col-sm-3 "><lable >إلي</lable> <input type="text"  placeholder="00:00" class="w-50 pad-0 mr-10"></div> <div class="col-sm-3 text-center field-su"><button class="btn mr-10" >تعديل</button><button class="btn btn-light mr-10 ">حذف</button></div>';
 $('.field-su:last').after(newField);
   
});
$(' .arabic  #addNew-mo').on('click', function(e) {
	e.preventDefault();        
var newField = '<hr class="col-12"> <div class="col-sm-3"><lable >مدة الكشف</lable><input type="text" class=" pad-0 mr-10 w-50"  value=" 00:دقيقة"  placeholder="00:00"></div><div class="col-sm-3"><lable >من</lable><input type="text" placeholder="00:00" class="pad-0 mr-10 w-50"></div><div class="col-sm-3 "><lable >إلي</lable> <input type="text"  placeholder="00:00" class="w-50 pad-0 mr-10"></div> <div class="col-sm-3 text-center field-mo"><button class="btn mr-10" >تعديل</button><button class="btn btn-light mr-10 ">حذف</button></div>';
 $('.field-mo:last').after(newField);
   
});
$('.arabic  #addNew-tu').on('click', function(e) {
	e.preventDefault();        
var newField = '<hr class="col-12"> <div class="col-sm-3"><lable >مدة الكشف</lable><input type="text" class=" pad-0 mr-10 w-50"  value=" 00:دقيقة"  placeholder="00:00"></div><div class="col-sm-3"><lable >من</lable><input type="text" placeholder="00:00" class="pad-0 mr-10 w-50"></div><div class="col-sm-3 "><lable >إلي</lable> <input type="text"  placeholder="00:00" class="w-50 pad-0 mr-10"></div> <div class="col-sm-3 text-center field-tu"><button class="btn mr-10" >تعديل</button><button class="btn btn-light mr-10 ">حذف</button></div>';
 $('.field-tu:last').after(newField);
   
});
$('.arabic  #addNew-we').on('click', function(e) {
	e.preventDefault();        
	var newField = '<hr class="col-12"> <div class="col-sm-3"><lable >مدة الكشف</lable><input type="text" class=" pad-0 mr-10 w-50"  value=" 00:دقيقة"  placeholder="00:00"></div><div class="col-sm-3"><lable >من</lable><input type="text" placeholder="00:00" class="pad-0 mr-10 w-50"></div><div class="col-sm-3 "><lable >إلي</lable> <input type="text"  placeholder="00:00" class="w-50 pad-0 mr-10"></div> <div class="col-sm-3 text-center field-we"><button class="btn mr-10" >تعديل</button><button class="btn btn-light mr-10 ">حذف</button></div>';    
 $('.field-we:last').after(newField);
   
});
$('.arabic  #addNew-th').on('click', function(e) {
	e.preventDefault();        
var newField = '<hr class="col-12"> <div class="col-sm-3"><lable >مدة الكشف</lable><input type="text" class=" pad-0 mr-10 w-50"  value=" 00:دقيقة"  placeholder="00:00"></div><div class="col-sm-3"><lable >من</lable><input type="text" placeholder="00:00" class="pad-0 mr-10 w-50"></div><div class="col-sm-3 "><lable >إلي</lable> <input type="text"  placeholder="00:00" class="w-50 pad-0 mr-10"></div> <div class="col-sm-3 text-center field-th"><button class="btn mr-10" >تعديل</button><button class="btn btn-light mr-10 ">حذف</button></div>';
 $('.field-th:last').after(newField);
   
});
$('.arabic  #addNew-fr').on('click', function(e) {
	e.preventDefault();        
	var newField = '<hr class="col-12"> <div class="col-sm-3"><lable >مدة الكشف</lable><input type="text" class=" pad-0 mr-10 w-50"  value=" 00:دقيقة"  placeholder="00:00"></div><div class="col-sm-3"><lable >من</lable><input type="text" placeholder="00:00" class="pad-0 mr-10 w-50"></div><div class="col-sm-3 "><lable >إلي</lable> <input type="text"  placeholder="00:00" class="w-50 pad-0 mr-10"></div> <div class="col-sm-3 text-center field-fr"><button class="btn mr-10" >تعديل</button><button class="btn btn-light mr-10 ">حذف</button></div>';
 $('.field-fr:last').after(newField);
   
});














document.getElementById("uploadBtn").onchange = function () {
    document.getElementById("uploadFile").value = this.value.replace("C:\\dr.soft\\", "");
};