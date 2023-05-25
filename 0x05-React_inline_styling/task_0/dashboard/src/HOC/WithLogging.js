import React from "react";


function WithLogging(wrappedComponent){
    const wrappedComponentName = wrappedComponent.displayName || wrappedComponent.name || "Component";
    class HOC extends React.Component {
        componentDidMount() {
            console.log(`Component ${wrappedComponentName} is mounted`)
        }

        componentWillUnmount() {
            console.log(`Component ${wrappedComponentName} is going to unmount`)
        }
        render() {
            return <WrappedComponent {...this.props} />;
        }
    }
    HOC.displayName = `WithLogging(${wrappedComponentName})`;
    return HOC;
}

export default WithLogging;