import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Button, ButtonGroup } from '@material-ui/core';

import AddList from './components/add-list';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      width: '980px',
      margin: 'auto',
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

type LayoutProps = {
    children: any;
};

const Layout: React.FC<LayoutProps> = ({children}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
            <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
                <Link to={'/'}>
                    <Button>
                        Home
                    </Button>
                </Link>
                <Link to={'/list'}>
                    <Button>
                        Lists
                    </Button>
                </Link>
                <AddList />
            </ButtonGroup>
        </Grid>
        <Grid item xs={12}>
            {children}
        </Grid>
        <Grid item xs={9}>
          <Paper className={classes.paper}>Test application for writing and learning words</Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper className={classes.paper}><strong>version 0.1</strong></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Layout;