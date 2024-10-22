function UserGreeting(props){
    return <h1>Welcome back</h1>;
}
function GuestGreeting(porps){
    return <h1>Please Sign up.</h1>;
}
function greeting(props){
    const isLoggedin=prop.isLoggedin;
    if(isLoogedin){
        return <UserGreeting/>
    }
    return <GuestGreeting/>

}
function App(){
    return <Greeting isLoggedin={true}/>
}