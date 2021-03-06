import axios from 'axios'

const GET_CAMPUSES = 'GET_CAMPUSES'
    , GET_CAMPUS = 'GET_CAMPUS'

export const getCampuses = campuses => ({
  type: GET_CAMPUSES, campuses
})

export const getCampus = campus => ({
  type: GET_CAMPUS, campus
})

export const fetchCampuses = () => dispatch => {
  return axios.get('/api/campuses')
    .then(res => res.data)
    .then(campuses => dispatch(getCampuses(campuses)))
    .catch(err => console.error(err))
}

export const fetchCampus = campusId => dispatch => {
  return axios.get(`/api/campuses/${campusId}`)
    .then(res => res.data)
    .then(campus => dispatch(getCampus(campus)))
    .catch(err => console.error(err))
}

export const postCampus = (campus, history) => dispatch => {
  return axios.post('/api/campuses', campus)
    .then(res => res.data)
    .then(newCampus => {
      dispatch(getCampus(newCampus))
      history.push(`/campuses/${newCampus.id}`)
    })
    .catch(err => console.error(err))
}

const campuses = (state = [], action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses

    case GET_CAMPUS:
      return [...state, action.campus]

    default: return state
  }
}

export default campuses