import PropTypes from 'prop-types'
function Student(props) {
    return (
        <div>
        <h1>Student Component</h1>
        {/* <p>{JSON.stringify(props)}</p> */}
        <h3>Student ID: {props.sid}</h3>
        <h3>First Name: {props.fnm}</h3>
        <h3>Last Name : {props.lnm}</h3>
        <h3>City      : {props.city}</h3>
        </div>
    )
}

Student.propTypes = {
    sid: PropTypes.number.isRequired,
    fnm: PropTypes.string.isRequired,
    lnm: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
}

Student.defaultProps = {
    sid: 1,
    fnm: "First Name",
    lnm: "Last Name",
    city: "City"
}

export default Student 