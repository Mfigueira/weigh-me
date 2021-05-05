import '../../assets/styles/Weighings.css';
import { WeighingsChart } from './WeighingsChart';
import { WeighingsGrid } from './WeighingsGrid';

export const Weighings = ({ weighings }) => {
  return (
    <section>
      <h2 style={{ marginBottom: '0' }}>Chart</h2>
      <WeighingsChart weighings={weighings} />

      <h2>Grid</h2>
      <WeighingsGrid weighings={weighings} />
    </section>
  )
}