function render(template,dataArr){
    let hml = ''
    let r = /\[(.*)\]/g;    
    let propertiesTamplate=[...template.matchAll(r)] 
    console.log(propertiesTamplate)
    dataArr.forEach(item => {
      let itemHtml =template
      propertiesTamplate.forEach(p =>{
        let propValue = item[p[1]]
        itemHtml =itemHtml.replace(p[0],propValue)
      })
      hml += itemHtml
    });
    return hml
  }