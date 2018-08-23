import React from 'react'
const ResultsList = ({gifs=[]}) => <div className="gif-wrap">
    {
        gifs.map((item, i) => 
            <img className="gif-img" key={i} src={item.images.preview_gif.url} />
        )
    }
</div>

export default ResultsList