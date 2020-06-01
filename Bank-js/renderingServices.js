
  
  function render(template,dataArr){
    let hml = ''
    let r = /\[(.*)\]/g;
    let propertiesTamplate = template.match(r)
  
    for(let i = 0;i<propertiesTamplate.length; i++){
      let p = propertiesTamplate[i];
      p =p.replace('[','').replace(']','')
      console.log(p)
      propertiesTamplate[i]=p
    }
    dataArr.forEach(item => {
      let itemHtml =template
      propertiesTamplate.forEach(p =>{
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