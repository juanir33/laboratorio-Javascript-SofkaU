export const selectDOMelement = (query) => {
    return  document.querySelector(query)
  };
  export const create = (tagName)=>{
      return document.createElement(tagName)
  };

  export const addClasse = (params)=>{
      let classes = params
      return classList.add(classes)
  }
  