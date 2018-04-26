const set = (cname, cvalue, exdays) => {
    let d = new Date();
    let hostname = 'authentication.dmcho.com';
  
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    let now = new Date();
    console.log(`today date = ${now.toUTCString()}`)
    console.log(`expires date = ${expires}`)
    console.log(`window.document.cookie = ${cname + "=" + cvalue + ";" + expires + "; path=/;" + "domain=." + hostname + ";"}`)
    window.document.cookie = cname + "=" + cvalue + ";" + expires + "; path=/;" + "domain=." + hostname + ";";
  };
  
  const setTimeStamp = (cname, cvalue, time) => { // time = 시간데이터 (24시간 기준)
    let d = new Date();
    let now = new Date();
    let hostname = process.env.host;
    if(d.getHours() >= time){
      d.setDate(d.getDate() + 1);
    }
    d.setHours(time);
    d.setMinutes(0);
    d.setSeconds(0);
    
    let expires = "expires="+ d.toUTCString();
    window.document.cookie = cname + "=" + cvalue + ";" + expires + "; path=/;" + "domain=." + hostname + ";";
  };
  
  const get = cname => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(window.document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };
  
  export {
    set,
    get,
    setTimeStamp
  };