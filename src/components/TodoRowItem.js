function TodoRowItem(){
    const rowNumber = 1;
    const rowDescription = 'Devlopping ! ';
    const rowAssigned = 'Mosine';
    return (
        <tr>
            <th scope="row">{rowNumber}</th>
            <td>{rowDescription}</td>
            <td>{rowAssigned}</td>
        </tr>
    )
}

export default TodoRowItem