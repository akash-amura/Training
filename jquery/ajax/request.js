function makeGetRequest(){
  $.ajax({
    url:"http://jsonplaceholder.typicode.com/posts",
    type:"GET",
    dataType:"json",
  }).done(function(json){
    console.log('success!');
    console.log(json);
  }).fail(function(xhr,status,errorThrown){
    console.log('fail!');
    console.log(status);
    console.log(errorThrown);
  });
}

function makePostRequest(){

  $.ajax({
    url:"http://jsonplaceholder.typicode.com/posts",
    type:"POST",
    data:{
      title: "A dream job",
      body:"motherfucker"
    },
    dataType:"json",
  }).done(function(json){
    console.log('success!');
    console.log(json);
  }).fail(function(xhr,status,errorThrown){
    console.log('fail!');
    console.log(status);
    console.log(errorThrown);
  });
} 

$(document).ready(function(){
  console.log('reaady');
  makeGetRequest();
  makePostRequest();
});
