import ReactPlayer from 'react-player';

import List from '../list/list';

import './list-area.scss';

const ListArea = ({visibleData, urlToPlay, onPlay, onDelete, onToggleWatched}) => {

    return(
        <div className="list__area">
            <List 
                data={visibleData}
                urlToPlay={urlToPlay}
                onDelete={onDelete}
                onToggleWatched={onToggleWatched}
                onPlay={onPlay}/>
            <div className="list__player">
                <ReactPlayer 
                    url={urlToPlay}
                    controls={true}
                    width='100%'
                    height='100%'/>
            </div>
            
        </div>
    )
}

export default ListArea;