//// [jsxObjectOutput.tsx]
var elem = <div>
    <h1>test</h1>
    <h2>{40 + 2}</h2>
    <ol>{
        [1,2,3].map(num => <li>num</li>)
    }</ol>
</div>;


//// [jsxObjectOutput.js]
var elem = { tag: "div", children: [{ tag: "h1", children: "test" },
        { tag: "h2", children: 40 + 2 },
        { tag: "ol", children: [1, 2, 3].map(function (num) { return ({ tag: "li", children: "num" }); }) }] };
