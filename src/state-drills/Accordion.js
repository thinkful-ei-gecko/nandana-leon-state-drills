import React, {Component} from 'react';

class Accordion extends  React.Component{
  static defaultProps={
    sections:[]
  };

  state={
    activeSectionIndex:null,
  }

  handleActiveSection=(sectionIndex)=>{
    this.setState({activeSectionIndex:sectionIndex})
  }

  renderAccordianItem(section,idx,activeSectionIndex){
    return(
      <li key={idx}>
        <button type='button' onClick={()=>this.handleActiveSection(idx)}>
        {section.title}
        </button>
        {(activeSectionIndex===idx) && <p>{section.content}</p>}
      </li>
    )
  }

render(){
  const {sections}=this.props
  const {activeSectionIndex} = this.state
  return(
    <ul>
      {sections.map((section,idx)=>this.renderAccordianItem(section,idx,activeSectionIndex)
      )}
    </ul>
  )

}
}

export default Accordion;