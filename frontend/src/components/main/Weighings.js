import '../../assets/styles/Weighings.css';
import { WeighingsChart } from './WeighingsChart';
import { WeighingsGrid } from './WeighingsGrid';

export const Weighings = (
  {
    token, alert, setAlert,
    weighings, editWeighingFromState, removeWeighingFromState
  }) => {
  return (
    <section>
      <h2 style={{ marginBottom: '0' }}>Chart</h2>
      <WeighingsChart weighings={weighings} />

      <h2>Grid</h2>
      <WeighingsGrid
        weighings={weighings}
        token={token}
        alert={alert}
        setAlert={setAlert}
        editWeighingFromState={editWeighingFromState}
        removeWeighingFromState={removeWeighingFromState}
      />
    </section>
  )
}