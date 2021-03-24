
const styles = {
    inputError: {
        color: 'red',
        fontSize: 13,
        fontStyle: 'italic'
    }
}

export default function InputGroup({ form, name, title, type = "text", placeholder, inputChange, error, className }) {
    if (!placeholder) placeholder = title

    let randomID = 'id-' + (Math.round(Math.random() * 100000))

    className = className ? `form-group ${className}` : 'form-group'

    return (
        <div className={className}>
            <label htmlFor={randomID}>{title}</label>
            <input className="form-control form-control-sm" id={randomID} name={name} type={type} placeholder={placeholder} value={form[name]} onChange={inputChange} />
            {
                error[name] && <p className="error-text" style={styles.inputError}>{error[name]}</p>
            }
        </div>
    )
}
