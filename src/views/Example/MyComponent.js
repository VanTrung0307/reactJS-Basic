import React from "react";

class MyComponent extends React.Component {

    //key:value
    state = {
        name: '',
        channel: 'ReactJS Basic'
    }

    /*
    JSX => return block
    fragment
    */

    handleOnChangeName = (event) => {
        //console.log(event.target.value, 'event target: ', event.target, 'event object: ', event)
        //merge
        // this.state.name = event.target.value;  ----bad code

        this.setState({
            name: event.target.value,
            //channel: 'abc'
        })
    }

    handleClickButton = () => {
        //console.log('hit the button')
        alert('click me')
    }

    //re-render
    render() {
        //let name = 'Trung';
        console.log('>>> call  render: ', this.state)

        return (
            /* có thể dùng <> </> (shortcut) để bọc ngoài nhiều khối html trong react
                <></> cũng là 1 fragment trong react
                <React.Fragment></React.Fragment>*/

            <>
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
                <div className="third">
                    <button onClick={() => this.handleClickButton()}>Click me</button>
                </div>
            </>
        )
    }
}

export default MyComponent;
//export {} : export nhiều class