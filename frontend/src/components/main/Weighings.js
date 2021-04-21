export const Weighings = ({ weighings }) => {

    if (weighings.length > 0) {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    { weighings.map((weighing, i) => {
                        return (
                            <tr key={i}>
                                <td>{ weighing.date }</td>
                                <td>{ weighing.time }</td>
                                <td>{ weighing.weight }</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        )
    } else {
        return <div>No data to show</div>
    }
}