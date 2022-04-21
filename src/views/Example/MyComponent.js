import React from "react";

class MyComponent extends React.Component {

    //key:value
    state = {
        name: 'Trung',
        channel: 'ReactJS Basic'
    }

    /*
    JSX => return block
    fragment
    */

    handleOnChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    render() {
        //let name = 'Trung';


        return (
            /* có thể dùng <> </> (shortcut) để bọc ngoài nhiều khối html trong react
                <></> cũng là 1 fragment trong react*/
            <React.Fragment>
                <div className="first">
                    {/* {console.log('My name is:', name)} */}
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    Hello my component, My name is {this.state['name']}
                </div>
                <div className="second">
                    My lesson : {this.state.channel}
                </div>
            </React.Fragment>
        )
    }
}

export default MyComponent;
//export {} : export nhiều class