
import {Component} from "react";

const content = '<iframe src="https://www.w3schools.com" title="W3Schools Free Online Web Tutorials">\n' +
    '</iframe>';


export class IFrame extends Component {
    render() {
        return (
            <>
            <div dangerouslySetInnerHTML={{__html: content}}/>
            </>
        );
    }
}