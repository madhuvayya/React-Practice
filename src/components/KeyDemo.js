import React from 'react';

class KeyDemo extends React.Component {
   constructor() {
      super();
		
      this.state = {
         data:[
            {
               component: 'First...',
               id: 1
            },
            {
               component: 'Second...',
               id: 2
            },
            {
               component: 'Third...',
               id: 3
            }
         ]
      }
   }
   render() {
      return (
         <div>
            <div>
               {this.state.data.map((dynamicComponent, i) => <Content 
                  key = {i} componentData = {dynamicComponent}/>)}
            </div>
         </div>
      );
   }
}

export default KeyDemo;

class Content extends React.Component {
    render() {
       return (
          <div>
             <div>{this.props.componentData.component} {this.props.componentData.id}</div>
             <div></div>
          </div>
       );
    }
 }