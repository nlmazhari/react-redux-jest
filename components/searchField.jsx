import React from 'react'

const SearchField = ({onChange=f=>f, onClick=f=>f}) => {
    let queryVal
    return (
        <div className="row">
            <div className="col-md-12">
                <form className="form-horizontal">
                    <div className="form-group">
                        <div className="col-md-10">
                            <input 
                                type="text" 
                                name="giphy-search" 
                                className="form-control" 
                                placeholder="type your search here"
                                ref={input => queryVal = input}
                            />
                        </div>
                        <div className="col-md-2">
                            <button 
                                type="button" 
                                onClick={() => onClick(queryVal.value)} 
                                className="btn btn-default pull-right"
                            >Search
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SearchField