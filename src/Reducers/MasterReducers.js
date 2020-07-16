
import combineSectionReducers from 'combine-section-reducers';
import LoginReducers  from '../Reducers/Reducers'


const MasterReducers = combineSectionReducers({
    LoginReducers: LoginReducers
})


export default MasterReducers;