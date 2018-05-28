import { reducer as reduxForm } from 'redux-form';
import Leagues from './leaguesReducer';
import Teams from './teamsReducer';
import Players from './playersReducer';


export default {
  form: reduxForm,
  Leagues,
  Teams,
  Players,
}