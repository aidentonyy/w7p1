

function Themes(bg, textCol, font){
        this.bg = bg;
        this.textCol = textCol;
        this.font = font;
        this.display = function(){
            return this.bg + "/" + this.textCol + "/" + this.font
        }
    }

    let theme1 = new Themes("#000000", "#ffffff", "open-sans");
    let theme2 = new Themes("#ffffff", "#000000", "Geneva");
    let theme3 = new Themes("#000000", "#20C20E", "Verdana");
    
    console.log(theme1.display());
    console.log(theme2.display());
    console.log(theme3.display());