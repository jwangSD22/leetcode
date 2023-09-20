function timeConversion(s) {
    
    let hours = s.slice(0,2)
    let minutes =s.slice(3,5)
    let seconds =s.slice(6,8)
    let ampm = s.slice(-2)

    
    


  if(ampm==='AM'&&hours==='12'){
                hours = '00'
   

        s = `${hours}:${minutes}:${seconds}`
    }
    else if(ampm==='PM'&&hours==='12'){
        hours='12'
                s = `${hours}:${minutes}:${seconds}`
    }

   else if(ampm==='PM'){
        hours = Number(hours) 
        hours+=12
        hours = hours.toString()
   

        s = `${hours}:${minutes}:${seconds}`
    }
    
    
    else{
        s=`${hours}:${minutes}:${seconds}`
    }





    return s





}



console.log(timeConversion('12:45:54PM'))


