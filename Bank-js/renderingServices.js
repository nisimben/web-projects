
  
  function render(template,dataArr){
    let hml = ''
    let r = /\[(.*)\]/g;
    let propertiesTamplate = template.match(r)
    console.log('propertiesTamplate'+propertiesTamplate)
  
    for(let i = 0;i<propertiesTamplate.length; i++){
      let p = propertiesTamplate[i];
      p =p.replace('[','').replace(']','')
      propertiesTamplate[i]=p
    }
    // פריטים מהדטה-בייס לופ
    dataArr.forEach(item => {
      console.log('item    '+item )
      let itemHtml =template
      propertiesTamplate.forEach(p =>{
        console.log('p '+p)
        let propValue = item[p]
        itemHtml =itemHtml.replace(`[${p}]`,propValue)
      })
      hml += itemHtml
    });
    return hml
  }
//   let myTemplate =document.getElementById('template_student').innerHTML
//   let myList = document.getElementById('myList')
//   myList.innerHTML =render(myTemplate,student)