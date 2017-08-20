// @jsx: object

var elem = <div>
    <h1>test</h1>
    <h2>{40 + 2}</h2>
    <ol>{
        [1,2,3].map(num => <li>num</li>)
    }</ol>
</div>;
