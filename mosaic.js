
(function($){
    $.fn.mosaic = function(arr){
        var size = arr.length, //counts how many items are in the array
            tiles = Math.ceil(Math.sqrt(size)), //number of tiles in each row/column
            tiles2 = tiles*tiles, //total number of tiles to draw
            contsize = this.width(),
            tilesize = Math.floor(contsize / tiles - 2);//calculated tile size
        
        //load the data into the divs:
        for (var i in arr){
            
            if (arr[i].value) {
                this.append('<div class="mTile mMarked" title="'+arr[i].name+'"></div>');
            }
            else {
                this.append('<div class="mTile" title="'+arr[i].name+'"></div>');
            };
        };
        
        while (size!=tiles2){ //fill up the mosaic with empty tiles
            this.append('<div class="mTile" title=""></div>');
            size++;
        }
      
        if (contsize%tiles){//resize the container if the tiles don't fit perfectly
            contsize = (tilesize+2)*tiles; 
            this.css({'width':contsize,'height':contsize});
        }

        this.children().css({'width':tilesize,'height':tilesize}).wTooltip({'delay':100}); //applies the size and tooltips to all the tiles

        return this;
    } 
})(jQuery);
