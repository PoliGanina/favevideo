
import ListItem from "../list-item/list-item";

import '../list/list.scss';

const List = ({data, onPlay, onDelete, onToggleWatched}) => {
        const elements = data.map(item => {
            const {id, ...itemProps} = item;
            return (
                <ListItem
                    key={id} 
                    {...itemProps}
                    onPlay={() => onPlay(id)}
                    onDelete={() => onDelete(id)}
                    onToggleWatched={() =>onToggleWatched(id)}
                />
            )
        })
    
        return (
            <div className="list">
                <h2 type="text" className="list__title">Your video list</h2>
                <ul>
                    {elements}
                </ul>
            </div>
            
        )
}

export default List;