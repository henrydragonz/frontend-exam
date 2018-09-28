$("#category").click(()=> {
  $(".list").toggle();
});

$(".list ul li").click( (e)=> {
  let selectedValue = $(e.currentTarget).text();
  $('#category').val(selectedValue);
    $(".list").toggle();
});

$("#find-lawyer").click(()=> {
  $(".modal-con").show();
});
