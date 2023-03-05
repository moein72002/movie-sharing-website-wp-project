import './listItem.scss'
import { useState } from 'react';

const ListItem = ({ index }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div className="listItem"
            style={{ transform: isHovered && "scale3d(1.4, 1.4, 1)" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            {!isLoaded && <img src="https://hbomax-images.warnermediacdn.com/images/GYGP7pwQv_ojDXAEAAAFc/tileburnedin?size=1280x720&partner=hbomaxcom&v=bd4e8b8745a1fcccbb19d76012ae572e&host=art-gallery.api.hbo.com&language=fi-fi&w=1280" alt="" />}
            {isHovered && <iframe className='video' onLoadedData={() => setIsLoaded(true)} src="https://www.youtube.com/embed/zSWdZVtXT7E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}
        </div >
    )
}

export default ListItem