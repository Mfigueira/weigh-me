import classes from './Footer.module.scss';

export const Footer = () => (
  <footer className={classes.footer}>
    <p>Developed by Manuel Figueira - 2021</p>
    <p>
      <span>Icons made by </span>
      <a href="https://www.freepik.com" title="Freepik">
        Freepik
      </a>
      <span> from </span>
      <a href="https://www.flaticon.com/" title="Flaticon">
        www.flaticon.com
      </a>
    </p>
  </footer>
);
