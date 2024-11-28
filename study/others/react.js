// HOC define
const withLogging = (WrappedComponent) =>{
    return ((props)=>{
        console.log('Rendered with props', props)
        return <WrappedComponent {...props} />  
    })
}

export default withLogging

// use
const BetterCounter = withLogging(Counter)
<BetterCounter />

// auth eg
const withAuth = (Component) =>{
    return ((porps) =>{
        const isUserSuth = localStorage.getItem('auth')
        if(!isUserSuth){
            return <Redirect to='/login' />
        }
        return <Component {...porps} />
    })
}
const ProtectedPage = withAuth(Page)


    
