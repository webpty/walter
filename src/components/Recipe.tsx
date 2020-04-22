import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import RefreshIcon from '@material-ui/icons/Refresh';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import Avatar from '@material-ui/core/Avatar';
import {FormattedMessage} from 'react-intl';
import {fr, steps} from '../languages/recipe'

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      maxWidth: 936,
      margin: 'auto',
      overflow: 'hidden',
    },
    searchBar: {
      borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    },
    searchInput: {
      fontSize: theme.typography.fontSize,
    },
    block: {
      display: 'block',
    },
    addUser: {
      marginRight: theme.spacing(1),
    },
    RecipeWrapper: {
      margin: '0',
    },
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
    orange: {
      background: 'orange',
      color: 'white',
    },
    green: {
      background: '#6db600',
      color: 'white',
    },
    selected: {
      background: '#94d8ff',
      cursor: 'pointer',
    },
    notSelected: {
      background: 'white',
      cursor: 'pointer',
    },
    caption: {
      color: '#666',
    }
  });

export interface RecipeProps extends WithStyles<typeof styles> {}

const Recipe: React.FC<RecipeProps> = (props) => {
  const {classes} = props;

  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  // const steps = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29]
  const items = steps.map((x, i) => {
    const labelId = `checkbox-list-secondary-label-${i}`;
    return (
      <ListItem
        alignItems="flex-start"
        key={i}
        className={checked.indexOf(i) !== -1 ? classes.selected : classes.notSelected}
        onClick={handleToggle(i)}
      >
        <ListItemAvatar>
          <Avatar className={checked.indexOf(i) !== -1 ? classes.green : classes.orange}>{i + 1}</Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={x.title}
          secondary={
            <>
              <Typography
                component="span"
                variant="body1"
                className={classes.inline}
                color="textPrimary"
              >
                {x.description}
              </Typography>
              <br />
              {x.notes &&
                <Typography
                  component="span"
                  variant="caption"
                  className={classes.caption}
                  color="textPrimary"
                >
                  Note: {x.notes}
                </Typography>
              }
            </>
          }
        />
        <ListItemSecondaryAction>
          <Checkbox
            edge="end"
            onChange={handleToggle(i)}
            checked={checked.indexOf(i) !== -1}
            inputProps={{'aria-labelledby': labelId}}
          />
        </ListItemSecondaryAction>
      </ListItem>
    )
  })
  return (
    <Paper className={classes.paper}>
      <div className={classes.RecipeWrapper}>
        <List className={classes.root}>
          {items}
        </List>
      </div>
    </Paper>
  );
}

export default withStyles(styles)(Recipe);
