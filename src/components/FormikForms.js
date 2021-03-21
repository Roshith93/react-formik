import { makeStyles } from '@material-ui/core/styles'
import { TextField, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}))

export const FormikForms = () => {
  const classes = useStyles()

  return (
    <form className={classes.root} noValidate autoComplete='off'>
      <div>
        <TextField label='First Name' defaultValue='' />
      </div>
      <div>
        <TextField label='Last Name' defaultValue='' />
      </div>
      <div>
        <TextField label='Company' defaultValue='' />
      </div>
      <Button variant='contained' color='primary' type="submit">
        Submit
      </Button>
    </form>
  )
}
