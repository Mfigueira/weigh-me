export const Weighings = ({weighings}) => {

    return (
        <section>
            <h2>Weighings</h2>

            {weighings.length ?
                <table>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Weight</th>
                        </tr>
                    </thead>
                    <tbody>
                        {weighings.map((weighing, i) => {
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
                :
                <div>No data to show</div>
            }
        </section>
    )
}