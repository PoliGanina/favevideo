import "./filter.scss";

const Filter = (props) => {
    const buttonsData = [
        {name: 'all', label: 'All videos'},
        {name: 'w', label: 'Watched'},
        {name: 'tbw', label: 'To be watched'},
    ];

    const buttons = buttonsData.map(({name, label}) => {
        const active = props.filter === name;
        const clazz = active ? 'btn-light' : 'btn-outline-light';
        return (
            <button type="button"
                    className={`btn ${clazz}`}
                    key={name}
                    onClick={() => props.onFilterSelect(name)}>
                    {label}
            </button>
        )
    })

    return (
        <div className="btn__group">
            {buttons}
        </div>
    )
}

export default Filter;