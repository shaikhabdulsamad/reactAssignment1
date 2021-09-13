function Foo4() {
    const list = [{ name: "Hello World 1" }, { name: "Hello World 2" }, { name: "Hello World 3" }]

    return (
        <ul>
            {list.map((v, i) => <li key={i}>{v.name}</li>)}
        </ul>
    )
}

export default Foo4;