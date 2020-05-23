$(function(){
    var bookListDiv = $(".book-list");
    
    refreshBookList();
    
    function refreshBookList(){
        renderBookList(bookListDiv);
    }
    
    function renderBookList(renderingPoint){
        $.ajax({
            url : "http://localhost:8282/books",
            type : "GET",
            dataType : "json",
        }).done(function(booksArr){
            renderingPoint.empty();
            
            for(var i=0; i<booksArr.length; i++){
                var titleDiv = $('<div class="book-title">');
                titleDiv.text(booksArr[i].title);
                
                renderingPoint.append(titleDiv);
            }
        }).fail(function(xhr, status, err){
            console.log(xhr, status, err);
        });
    }
})