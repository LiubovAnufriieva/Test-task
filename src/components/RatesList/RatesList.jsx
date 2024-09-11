import styles from "./RatesList.module.css";
import { GridItem } from "../GridItem/GridItem";
import { Grid } from "../Grid/Grid";

export const RatesList = ({ rates }) => {
  return (
    <Grid>
      {rates.map(([key, value]) => (
        <GridItem key={key}>
          <p className={styles.text}>
            1 {key} = {value}
          </p>
        </GridItem>
      ))}
    </Grid>
  );
};
