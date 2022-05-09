
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
                <input type="text" className="list__title" defaultValue={'Your video list'}/>
                <ul>
                    {elements}
                </ul>
            </div>
            
        )
}

export default List;