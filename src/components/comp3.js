
function Foo3() {
    const arr = ["We", "are", "United"];

    return (
        <ul>
            {arr.map((v, i) => <li key={i}>{v}</li>)}
        </ul>
    )
}

export default Foo3;