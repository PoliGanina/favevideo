import './list-item.scss';

const ListItem = (props) => {

    const {name, watched, onPlay, onDelete, onToggleWatched} = props;
    let classNameOfStar = "fa-solid fa-square-check";
 
    if (watched) {
        classNameOfStar += ' show';
    } 

    return (
        <li className="list__item">
            <h3 onClick={onPlay}>{name}</h3>
            <div className="list__item-controls">
                <button type="button"
                        className="btn-trash btn-sm "
                        onClick={onDelete}>
                    <i className="fas fa-trash"></i>
                </button>
                <i  className={classNameOfStar}
                    onClick={onToggleWatched}></i>
            </div>
                
        </li>
    )
}

export default ListItem;