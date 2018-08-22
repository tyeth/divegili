import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';

class TyethHello extends React.Component {
    render() {
        let content="This is my H1";
        if(this.props.hasOwnProperty('face')) content = this.props.face;
        return Component.render('h1',{name:"tyeth"},content);

    }
}

let dave;
dave = (<TyethHello face="yes"></TyethHello>);

