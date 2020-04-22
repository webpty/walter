import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import HelpIcon from '@material-ui/icons/Help';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

const lightColor = 'rgba(255, 255, 255, 0.7)';

const styles = (theme: Theme) =>
  createStyles({
    secondaryBar: {
      zIndex: 0,
    },
    menuButton: {
      marginLeft: -theme.spacing(1),
    },
    iconButtonAvatar: {
      padding: 4,
    },
    link: {
      textDecoration: 'none',
      color: lightColor,
      '&:hover': {
        color: theme.palette.common.white,
      },
    },
    button: {
      borderColor: lightColor,
    },
  });

interface HeaderProps extends WithStyles<typeof styles> {
  onDrawerToggle: () => void
  selectLocale: Function
  currentLocale: string
}

const Header: React.FC<HeaderProps> = (props) => {
  const {classes, onDrawerToggle, selectLocale, currentLocale } = props;

  const [tabValue, setTabValue] = React.useState(0);

  const interceptSelectLocale = (lang: string) => {
    if (lang === currentLocale) {
      return null
    }
    selectLocale(lang);

    switch (lang) {
      case "en": {
        setTabValue(1)
        break
      }
      case "es": {
        setTabValue(2)
        break
      }
      default: {
        setTabValue(0)
      }
    }
  }
  return (
    <React.Fragment>
      
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                Recette de pain au levain
              </Typography>
            </Grid>
            <Grid item>
              <Button className={classes.button} variant="outlined" color="inherit" size="small">
                par David Auffret
              </Button>
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <Avatar alt="David Auffret" src="https://s.gravatar.com/avatar/0a3cad1d1ce226d4eb4f39f17fd25a33?s=80" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={tabValue} textColor="inherit">
          <Tab textColor="inherit" label="Français" onClick={() => interceptSelectLocale("fr")} />
          <Tab textColor="inherit" label="English" onClick={() => interceptSelectLocale("en")} />
          <Tab textColor="inherit" label="Español" onClick={() => interceptSelectLocale("es")} />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

export default withStyles(styles)(Header);
