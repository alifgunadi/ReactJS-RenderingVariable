import React from "react";



export default class Conditional extends React.Component {
    
    state = {
        isLoading: true
    }

    render() {
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
        }, 3000);

        // const isLogin = true;
        // let message = "";
        // if(isLogin) {
        //   message = "Anda telah login"
        // }else{
        //    message = "Silahkan login terlebih dahulu"
        // }
        // return(
        //     <div>
        //         <h1>{message}</h1>
        //     </div>
        // )

        // return(
        //     <div>
        //         { isLogin 
        //         ? <h1>Anda telah login</h1> 
        //         : <h1>Silahkan login terlebih dahulu</h1>
        //         }
        //     </div>
        // )

        return(
            <div>
                { this.state.isLoading 
                ? <h1>Loading..</h1>
                : <h1>Selamat datang</h1>}
            </div>
        )
    }
    
}