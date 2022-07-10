function Welcome(props) {
    const name = 'Hulio Chaves';
    const element = <span>Привет, {name}</span>
    return (
        <div>
            <h1>Welcome {props.name}</h1>
            {element}
        </div>
    )
}

export default Welcome;