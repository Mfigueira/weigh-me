import graph from '../../../assets/img/graph.svg';
import classes from './ZeroStateChart.module.scss';

const ZeroStateChart: React.FC = () => (
  <div className={classes.container}>
    <img src={graph} alt="graph" />
    <i>Add at least 2 Weighings to see the Chart</i>
  </div>
);

export default ZeroStateChart;
