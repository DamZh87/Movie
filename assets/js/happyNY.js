export function happyNY() {
    
    const   date = new Date(),   
            curYear = date.getFullYear(),
    
            startD1 = new Date(curYear, 11, 24, 23, 59, 59),
            endD1 = new Date(curYear, 11, 31, 23, 59, 59  ), 
    
            startD2 = new Date(curYear, 0, 1),
            endD2 = new Date(curYear, 0, 13, 23, 59, 59  )
   
    if (date >= startD1 && date <= endD1  || date >= startD2 && date <= endD2 ) {
     document.querySelector('.logo_png').setAttribute('src', './assets/img/header/logo.png');
    } else {
        document.querySelector('.logo_png').setAttribute('src', './assets/img/header/logo_norm.png');
    } 
    }

    // if (new Date() >= new Date(2025, 0, 13)) {
    //     document.querySelector('.logo_png').setAttribute('src', './assets/img/header/logo_norm.png');
    //     } else {
    //        document.querySelector('.logo_png').setAttribute('src', './assets/img/header/logo.png');
    //    } 
    